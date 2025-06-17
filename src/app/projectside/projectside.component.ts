import { Component} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Projecttracker } from '../projecttracker';
import { ProjectServiceService } from '../projectService.service';
import { HttpclientService } from '../httpclient.service';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormArray } from '@angular/forms';


@Component({
  selector: 'projectside',
  providers: [
//    FormGroup
  ],
  imports: [    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule],
  templateUrl: './projectside.component.html',
  styleUrl: './projectside.component.css'
})

export class ProjectsideComponent {
  data: any;
  count: number = 0;
  defaultName = "project";
  project: Projecttracker[] = [];
  filteredPro: any[] = [];
  projectForm: FormGroup;

    constructor(private router: Router, private ProjectServiceService: ProjectServiceService, private HttpclientService: HttpclientService,
    private formBuilder: FormBuilder) {
      this.projectForm = this.formBuilder.group({
        projects: this.formBuilder.array([])
      })
  }

  ngOnInit() {
    this.project = this.ProjectServiceService.getProjects();
    this.filteredPro = this.project;
    this.project.forEach(p => this.addProjectForm(p.proName, p.description));
  }

  addProjectForm(name: string, desc: string) {
    const newGroup = this.formBuilder.group({
        proNameForm: [name || '', Validators.required],
        proDescForm: [desc || '', Validators.required]
      })
      this.projectsFormArray.push(newGroup);
  }

  get projectsFormArray(): FormArray {
    return this.projectForm.get('projects') as FormArray;
  }

  addProject() {
    this.HttpclientService.getData().subscribe(data => {
      this.data = data;

      const newProject = {
        id: this.count,
        proName: 'project',
        description: this.data.todo,
        tasks: []
      }

      this.count++;
      this.project.push({id: this.count, proName: "project", description: this.data.todo, tasks: []});
      
      this.ProjectServiceService.setProjects(this.project);
      this.addProjectForm(newProject.proName, newProject.description)
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
    if (id > -1 && id < this.project.length) {
      this.projectsFormArray.removeAt(id);
      this.project.splice(id, 1);
      this.filteredPro = [...this.project];
    }
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