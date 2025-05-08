import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

export const EmployeeRoutes: Routes = [
  {
    path: '',
    data: { breadcrumb: null },
    component: EmployeeListComponent
  },
  {
    path: 'add',
    data: { breadcrumb: 'Add' },
    component: EmployeeFormComponent
  }
];
