import { Component} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Projecttracker } from '../projecttracker';
import { ProjectServiceService } from '../projectService.service';

@Component({
  selector: 'projectside',
  imports: [    CommonModule,
    FormsModule,
    RouterModule],
  templateUrl: './projectside.component.html',
  styleUrl: './projectside.component.css'
})

export class ProjectsideComponent {
  count: number = 0;
  default = "";
  project: Projecttracker[] = [];
  filteredPro: any[] = [];

    constructor(private router: Router, private ProjectServiceService: ProjectServiceService) {
  }
  ngOnInit() {
    this.project = this.ProjectServiceService.getProjects();
    this.filteredPro = this.project
  }

  addProject() {
    this.count++;
//    this.project = [{id: this.count, proName: "project", tasks: []}]
    this.project.push({id: this.count, proName: "project", tasks: []});
//      [{taskId: 0, taskName: "", description: "", priority: 3, status: 3, deadline: null}]});
    
    this.ProjectServiceService.setProjects(this.project);
  }

  removeProject(id: number) {
    const index = this.project.findIndex(i => i.id === id);
    if (index !== -1) {
      this.project.splice(index, 1);
    }
    console.log("id index ", index, "project ", this.project);
  }

  addName(id: number, $event: Event) {
    const input = $event.target as HTMLInputElement;
    let projectName = input.value;
    const project = this.project.find(p => p.id === id);
    if (project) {
      project.proName = projectName;
    }
  }

  searchPro($event: Event) {
    const input = $event.target as HTMLInputElement;
    let tempArr = [];
    for (let item of this.project) {
      tempArr.push(item.proName);
    }

    if (input.value === "") {
      this.filteredPro.splice(1)
      this.filteredPro = [...this.project];
    } else if (tempArr.includes(input.value)) {
      if (!this.filteredPro.includes(input.value)) {
        const project = this.project.filter(item => item.proName.includes(input.value))
        this.filteredPro = [...project];
      }
    }  
  }
};