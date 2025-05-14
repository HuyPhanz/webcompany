import { Routes } from '@angular/router';
import { HomeIntroListComponent } from './home-intro-list/home-intro-list.component';
import { HomeIntoFormComponent } from './home-into-form/home-into-form.component';

export const HomeAboutUsRoutes: Routes = [
  {
    path: '',
    data: { breadcrumb: null },
    component: HomeIntroListComponent
  },
  {
    path: 'add',
    data: { breadcrumb: 'Add' },
    component: HomeIntoFormComponent
  }
];
