import { Routes } from '@angular/router';
import { ProjecttaskComponent} from './projecttask/projecttask.component';
import { ProjectsideComponent } from './projectside/projectside.component';

export const routes: Routes = [
        { path: "", component: ProjectsideComponent },
        { path: "project/:id", component: ProjecttaskComponent}
];