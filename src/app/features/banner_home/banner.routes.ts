import { Routes } from '@angular/router';
import { BannerFormComponent } from './banner-form/banner-form.component';
import { BannerListComponent } from './banner-list/banner-list.component';

export const BannerRoutes: Routes = [
  {
    path: '',
    data: { breadcrumb: null },
    component:BannerListComponent
  },
  {
    path: 'add',
    data: { breadcrumb: 'Add' },
    component: BannerFormComponent
  }
];
