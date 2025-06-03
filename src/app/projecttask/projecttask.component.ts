import { Component, OnInit, inject} from '@angular/core';
import { Projecttracker } from '../projecttracker';
import { ProjectServiceService } from '../projectService.service'
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'projecttask',
  imports: [RouterModule],
  templateUrl: './projecttask.component.html',
  styleUrl: './projecttask.component.css'
})
export class ProjecttaskComponent {
  private activatedRoute = inject(ActivatedRoute);
  defaultName: string = "Task";
  project: Projecttracker[] = [];
  proId: number = this.getPosition();
  count: number = 0; //this.project[this.proId].tasks.length();

  
  proNameparam = this.activatedRoute.snapshot.params["proName"];
    constructor(private router: Router, private ProjectServiceService: ProjectServiceService) {
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
    this.proId = parseInt(this.activatedRoute.snapshot.params["id"]);
    this.count = this.project[this.getPosition()].tasks.length;
  }

  addTask() {

    for (let item of this.project) {
      if (item.id === this.proId) {
        this.project[this.proId].tasks.push({taskId: this.count, taskName: "task", description: "", priority: 3, status: 1});
      }
    }
    this.count++;
/*    const project = this.project.find(item => item.id === this.proId);
    if (project) {
      project.tasks = [{taskId: this.count, taskName: this.defaultName, description: "", priority: 3, status: 1}];
    }*/
  }

  loopTask(status: number) {
    let statusList = [];

    for (let selectPro of this.project) {
      for (let selectTask of selectPro.tasks) {
        if (selectTask.status === status) {
          statusList.push(selectTask);
        }
      }
    }

    //make sort
    

    //const sortedList: any[] = statusList[2].priority.sort((n1, n2) => n1 - n2);

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

  addTaskDescription(id: number, $event: Event) {
    const input = $event.target as HTMLInputElement;
    let taskDesc = input.value;
    const task = this.project[this.proId].tasks.find(t => t.taskId === id);
    if (task) {
      task.description = taskDesc;
    }
  }

  changePrio(id: number, decide: boolean) {
    
    let newPrio: number;
    if (decide === true) {
      newPrio = this.project[this.proId].tasks[id].priority + 1;
    } else {
      newPrio = this.project[this.proId].tasks[id].priority - 1;
    }
    
    if (newPrio >= 1 && newPrio <= 3) {
      console.log("prio", newPrio)
      this.project[this.proId].tasks[id].priority = newPrio;
    }
  }

  changeStatus(id: number, decide: boolean) {
    let newStatus: number;
    if (decide === true) {
      newStatus = this.project[this.proId].tasks[id].status - 1;
    } else {
      newStatus = this.project[this.proId].tasks[id].status + 1;
    }
    
    if (newStatus >= 1 && newStatus <= 3) {
      this.project[this.proId].tasks[id].status = newStatus;
    }
    console.log("asoidaöksjd")
    }

  removeTask(id: number) {

  }
}