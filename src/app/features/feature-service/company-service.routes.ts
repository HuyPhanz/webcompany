import { Routes } from '@angular/router';
import { FeatureServieListComponent } from './feature-servie-list/feature-servie-list.component';
import { FeatureServiceFormComponent } from './feature-service-form/feature-service-form.component';

export const FeatureServiceRoutes: Routes = [
  {
    path: '',
    component: FeatureServieListComponent,
    data: { breadcrumb: null }
  },
  {
    path: 'add',
    component: FeatureServiceFormComponent,
    data: { breadcrumb: null }
  },
];
