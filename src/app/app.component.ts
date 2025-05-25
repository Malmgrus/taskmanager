import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProjectsideComponent } from './projectside/projectside.component';
import { ProjecttaskComponent } from './projecttask/projecttask.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    ProjectsideComponent,
    ProjecttaskComponent,
    RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskmanager';
}