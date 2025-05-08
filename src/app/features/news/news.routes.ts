import { Routes } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsFormComponent } from './news-form/news-form.component';

export const NewsRoutes: Routes = [
  {
    path: '',
    data: { breadcrumb: null },
    component: NewsListComponent
  },
  {
    path: 'add',
    data: { breadcrumb: 'Add' },
    component: NewsFormComponent
  }
];
