import { Injectable } from '@angular/core';
import { Projecttracker } from './projecttracker';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  private projects: Projecttracker[] = [
    {
      id: 0,
      proName: "project",
      tasks: [
        {
          taskId: 0,
          taskName: "task",
          description: "",
          priority: 3,
          status: 3
        }
      ]
    }
  ];

  constructor() { }

  getProjects(): Projecttracker[] {
    return this.projects;
  }

  setProjects(projects: Projecttracker[]): void {
    this.projects = projects;
  }

  addProject(project: Projecttracker): void {
    this.projects.push(project);
  }
}
