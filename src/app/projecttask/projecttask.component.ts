import { Component, OnInit, inject, signal } from '@angular/core';
import { Projecttracker, tasktracker } from '../projecttracker';
import { ProjectServiceService } from '../projectService.service'
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { HttpclientService } from '../httpclient.service';

@Component({
  selector: 'projecttask',
  imports: [RouterModule],
  templateUrl: './projecttask.component.html',
  styleUrl: './projecttask.component.css'
})
export class ProjecttaskComponent {
  private activatedRoute = inject(ActivatedRoute);
  data: any;
  defaultName: string = "Task";
  project: Projecttracker[] = [];
  task: tasktracker[] = [];
  proId: number = this.getPosition();
  count: number = 0;
  
  proNameparam = this.activatedRoute.snapshot.params["proName"];
    constructor(private router: Router, private ProjectServiceService: ProjectServiceService, private HttpclientService: HttpclientService) {
  }

  getPosition(): number {
    for (let i = 0; i < this.project.length; i++) {
      if (this.project[i].id === this.proId) {
        return i;
      }
    }
    return -1;
  }

  ngOnInit() {
    this.project = this.ProjectServiceService.getProjects();
    this.HttpclientService.getData().subscribe(data => {
      this.data = data;
      console.log("data ", this.data)
    })
    this.proId = parseInt(this.activatedRoute.snapshot.params["id"]);
    this.count = this.project[this.getPosition()].tasks.length;
  }

  addTask() {
    let desc: string = this.data.todo;
    for (let item of this.project) {
      if (item.id === this.proId) {
        this.task.push({taskId: this.count, taskName: "task", description: desc, priority: 3, status: 3, deadline: null})
      }
    }

    const newTask: tasktracker = {
      taskId: this.count,
      taskName: this.defaultName,
      description: desc,
      priority: 3,
      status: 3,
      deadline: null
    }

    this.project[this.getPosition()].tasks.push(newTask);
    console.log("project", this.project);
/*    const findTask = this.project[this.getPosition()].tasks.find(i  => i.taskId === this.proId);
    console.log("findtask", findTask)
    if (findTask) {
      console.log("hittade")
      this.project[this.getPosition()].tasks.push(findTask);
    }
    console.log("project", this.project);*/
    this.count++;
  }

  loopTask(status: number) {
    let statusList: any[] = [];

    

    for (let selectPro of this.project) {
      for (let selectTask of selectPro.tasks) {
        if (selectTask.status === status) {
          statusList.push(selectTask);
        }
      }
    }
    return statusList;
  }

  addTaskName(id: number, $event: Event) {
    const input = $event.target as HTMLInputElement;
    let taskName = input.value;
    const task = this.project[this.proId].tasks.find(t => t.taskId === id);
    if (task) {
      task.taskName = taskName;
    }
  }

  setDeadline(id: number, $event: Event) {
    const input = $event.target as HTMLInputElement;
    const newDeadline = new Date(input.value);
    const todaysDate = new Date();
    const task = this.project[this.getPosition()].tasks.find(t => t.taskId === id);
    if (task) {
      if (new Date(newDeadline) >= todaysDate) {
//        task.deadline?.set(new Date(newDeadline))
        //task.deadline?.set(newDeadline)// = signal<Date>(newDeadline);
        //deadline: signal(new Date(newDeadline))
      } else {
        alert("Date has already passed, please choose a valid date");
      }
      console.log("task deadline", this.project)
      //console.log("task deadline ", task.deadline);
    }
  }

  addTaskDescription(id: number, $event: Event) {
    const input = $event.target as HTMLInputElement;
    let taskDesc = input.value;
    const task = this.project[this.getPosition()].tasks.find(t => t.taskId === id);
    if (task) {
//      this.ProjectServiceService.setDeadline(id, this.proId, new Date(taskDesc));
    }
    console.log("deadline rä", this.project)
  }

  changePrio(id: number, decide: boolean) {
    
    let newPrio: number;
    if (decide === true) {
      newPrio = this.project[this.getPosition()].tasks[id].priority + 1;
    } else {
      newPrio = this.project[this.getPosition()].tasks[id].priority - 1;
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
    console.log("id index ", index, "project ", this.project);
  }
}