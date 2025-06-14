import { Component} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Projecttracker } from '../projecttracker';
import { ProjectServiceService } from '../projectService.service';
import { HttpclientService } from '../httpclient.service';

@Component({
  selector: 'projectside',
  imports: [    CommonModule,
    FormsModule,
    RouterModule],
  templateUrl: './projectside.component.html',
  styleUrl: './projectside.component.css'
})

export class ProjectsideComponent {
  data: any;
  count: number = 0;
  default = "";
  project: Projecttracker[] = [];
  filteredPro: any[] = [];

    constructor(private router: Router, private ProjectServiceService: ProjectServiceService, private HttpclientService: HttpclientService) {
  }

  ngOnInit() {
    this.project = this.ProjectServiceService.getProjects();
    this.filteredPro = this.project
  }

  addProject() {
    this.HttpclientService.getData().subscribe(data => {
      this.data = data;

      this.count++;
      this.project.push({id: this.count, proName: "project", description: this.data.todo, tasks: []});
      
      this.ProjectServiceService.setProjects(this.project);
    })
  }

  addDescription(id: number, $event: Event) {
    const input = $event.target as HTMLInputElement;
    let taskDesc = input.value;
    const pro = this.project.find(t => t.id === id);
    if (pro) {
      pro.description = taskDesc;
    }
    
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
      this.filteredPro = [];
      this.filteredPro = [...this.project];
    } else {
      const filtered = this.project.filter(item =>
      item.proName.toLowerCase().includes(input.value.toLowerCase()))
      this.filteredPro = [...filtered];
    }
  }
};