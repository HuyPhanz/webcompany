import { Routes } from '@angular/router';
import { CompanyServiceListComponent } from './company-service-list/company-service-list.component';
import { CompanyServiceFormComponent } from './company-service-form/company-service-form.component';

export const CompanyServiceRoutes: Routes = [
  {
    path: '',
    component: CompanyServiceListComponent,
    data: { breadcrumb: null }
  },
  {
    path: 'add',
    component: CompanyServiceFormComponent,
    data: { breadcrumb: null }
  },
];
