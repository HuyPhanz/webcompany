import { Routes } from '@angular/router';
import { BannerFormComponent } from './banner-form/banner-form.component';

export const BannerRoutes: Routes = [
  {
    path: '',
    data: { breadcrumb: null },
    component: BannerFormComponent
  }
];
