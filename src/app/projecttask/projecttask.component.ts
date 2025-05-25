import { Component } from '@angular/core';
import { Projecttracker } from '../projecttracker';
import { Tasktracker } from '../tasktracker';

@Component({
  selector: 'projecttask',
  imports: [],
  templateUrl: './projecttask.component.html',
  styleUrl: './projecttask.component.css'
})
export class ProjecttaskComponent {
  defaultName: string = "Task";
  count: number = 0;

  task: Tasktracker[] = [{
    id: this.count,
    taskName: this.defaultName,
    description: ""
  }]
  taskAmount: number[] = [];
  tasks: {id: number, taskName: string}[] = [];
  taskNames: string[] = [];

  addTask() {
    this.count++;
    this.task.push({id: this.count, taskName: this.defaultName, description: ""})
  }

  constructor() {
  }

  ngOnInit() {
    //körs i början som rolig hook
  }

  addTaskName(id: number, $event: Event) {
    const input = $event.target as HTMLInputElement;
    let taskName = input.value;
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.taskName = taskName;
    }
  }

  addTaskDescription(id: number, $event: Event) {
    const input = $event.target as HTMLInputElement;
    let taskDesc = input.value;
    const task = this.task.find(t => t.id === id);
    if (task) {
      task.description = taskDesc;
    }
  }
}