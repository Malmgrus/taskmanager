import { formatDate } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { Projecttracker, tasktracker } from '../projecttracker';
import { ProjectServiceService } from '../projectService.service'
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { HttpclientService } from '../httpclient.service';
import { ReusabletaskComponent } from '../reusabletask/reusabletask.component';
import { CustomPipe } from '../custom.pipe';

@Component({
  selector: 'projecttask',
  imports: [RouterModule, ReusabletaskComponent, CustomPipe],
  templateUrl: './projecttask.component.html',
  styleUrl: './projecttask.component.css'
})
export class ProjecttaskComponent {
  private activatedRoute = inject(ActivatedRoute);
  data: any;
  newData = signal<any>({});
  defaultName: string = "Task";
  project: Projecttracker[] = [];
  task: tasktracker[] = [];
  proId: number = -1;
  count = signal<number>(0);
  
    constructor(private router: Router, private ProjectServiceService: ProjectServiceService) {
  }

  getPosition(): number {
    for (let i = 0; i < this.project.length; i++) {
      if (this.project[i].id == this.proId) {
        return i;
      }
    }
    return -1;
  }

  ngOnInit() {
    this.project = this.ProjectServiceService.getProjects();
    this.proId = parseInt(this.activatedRoute.snapshot.params["id"]);
    this.count.set(this.project[this.getPosition()].tasks.length);
  }

  addTask() {
    const newTask: tasktracker = {
      taskId: this.count(),
      taskName: this.defaultName,
      priority: 3,
      status: 3,
      deadline: null
    };

    this.project[this.getPosition()].tasks.push(newTask);
    this.count.update(value => value + 1);
    console.log(this.count())
  }

  // loops thorugh to get all tasks, sorts them by priority and displays them.
  loopTask(status: number): tasktracker[] {
    let statusList: any[] = [];

    for (let selectPro of this.project) {
      for (let selectTask of selectPro.tasks) {
        if (selectTask.status === status) {
          statusList.push(selectTask);
        }
      }
    }
    return statusList.sort((a, b) => a.priority - b.priority)
  }

  addTaskName(id: number, $event: Event) {
    const input = $event.target as HTMLInputElement;
    let taskName = input.value;
    const task = this.project[this.getPosition()].tasks.find(t => t.taskId === id);
    if (task) {
      task.taskName = taskName;
    }
  }

  setDeadline(id: number, $event: Event) {
    const input = $event.target as HTMLInputElement;
    const newDeadline: Date = new Date(String(input.value));
    const todaysDate: Date = new Date();

    const task = this.project[this.getPosition()].tasks.find(t => t.taskId === id);
    if (task) {
      if (newDeadline >= todaysDate) {
        const formatedDate = formatDate(newDeadline, 'yyyy-MM-dd', 'en-US');
        task.deadline = formatedDate;
      } else {
        alert("Date has already passed, please choose a valid date");
      }
    }
  }

  changePrio(id: number, decide: boolean) {
    
    let newPrio: number;
    if (decide === true) {
      newPrio = this.project[this.getPosition()].tasks[id].priority - 1;
    } else {
      newPrio = this.project[this.getPosition()].tasks[id].priority + 1;
    }

    if (newPrio >= 1 && newPrio <= 3) {
      this.project[this.getPosition()].tasks[id].priority = newPrio;
    }
  }

  changeStatus(id: number, decide: boolean) {
    let newStatus: number;
    if (decide === true) {
      newStatus = this.project[this.getPosition()].tasks[id].status - 1;
    } else {
      newStatus = this.project[this.getPosition()].tasks[id].status + 1;
    }
    
    if (newStatus >= 1 && newStatus <= 3) {
      this.project[this.getPosition()].tasks[id].status = newStatus;
    }
  }

  removeTask(id: number) {
    const index = this.project[this.getPosition()].tasks.findIndex(i => i.taskId === id);
    if (index !== -1) {
      this.project[this.getPosition()].tasks.splice(index, 1);
    }
  }
}