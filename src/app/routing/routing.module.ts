import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjecttaskComponent } from '../projecttask/projecttask.component';
import { ProjectsideComponent } from '../projectside/projectside.component';

const routes: Routes = [
  { path: "", component: ProjectsideComponent },
  { path: "project", component: ProjecttaskComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})

export class RoutingModule {

}
