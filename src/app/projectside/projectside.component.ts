import { Component, signal, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Projecttracker } from '../projecttracker';

@Component({
  selector: 'projectside',
  imports: [    CommonModule,
    FormsModule,
    RouterModule],
  templateUrl: './projectside.component.html',
  styleUrl: './projectside.component.css'
})

export class ProjectsideComponent {
  defaultName: string = "Project";
  count: number = 0;
  project: Projecttracker[] = [{
    id: 0,
    proName: this.defaultName,
    tasks: {taskName: "", description: ""}
  }];

  addProject() {
    this.count++;
    this.project.push({id: this.count, proName: this.defaultName, tasks: {taskName: "", description: ""}});
  }

  removeProject(id: number) {
    this.project.splice(id, 1);
    console.log(this.project);
  }

  constructor(private router: Router) {
  }
  ngOnInit() {
    //körs i början som rolig hook
  }

  addName(id: number, $event: Event) {
    const input = $event.target as HTMLInputElement;
    let projectName = input.value;
    const project = this.project.find(p => p.id === id);
    if (project) {
      project.proName = projectName;
    }
  }
};