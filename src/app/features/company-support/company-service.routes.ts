import { Routes } from '@angular/router';
import { CompanySupportListComponent } from './company-support-list/company-support-list.component';
import { CompanySupportFormComponent } from './company-support-form/company-support-form.component';

export const CompanySupportRoutes: Routes = [
  {
    path: '',
    component: CompanySupportListComponent,
    data: { breadcrumb: null }
  },
  {
    path: 'add',
    component: CompanySupportFormComponent,
    data: { breadcrumb: null }
  },
];
