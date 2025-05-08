import { Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';

export const ProjectRoutes: Routes = [
  {
    path: '',
    data: { breadcrumb: null },
    component: ProjectListComponent
  },
  {
    path: 'add',
    data: { breadcrumb: 'Add' },
    component: ProjectComponent
  }
];
