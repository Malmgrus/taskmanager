import { Injectable, signal } from '@angular/core';
import { Projecttracker } from './projecttracker';
import { tasktracker } from './projecttracker';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  private projects: Projecttracker[] = [];
  private tasks: tasktracker[] = [];

  constructor() { }

  getProjects(): Projecttracker[] {
    return this.projects;
  }

  getTasks(): tasktracker[] {
    return this.tasks;
  }

  setProjects(projects: Projecttracker[]): void {
    this.projects = projects;
  }

  addProject(project: Projecttracker): void {
    this.projects.push(project);
  }
}