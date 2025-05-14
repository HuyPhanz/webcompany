import { Routes } from '@angular/router';
import { PartnersListComponent } from './partners-list/partners-list.component';
import { PartnersFormComponent } from './partners-form/partners-form.component';

export const PartnersRoutes: Routes = [
  {
    path: '',
    component: PartnersListComponent,
    data: { breadcrumb: null }
  },
  {
    path: 'add',
    component: PartnersFormComponent,
    data: { breadcrumb: null }
  },
];
