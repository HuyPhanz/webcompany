import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';

export const ProductRoutes: Routes = [
  {
    path: '',
    data: { breadcrumb: null },
    component: ProductListComponent
  },
  {
    path: 'add',
    data: { breadcrumb: 'Add' },
    component: ProductFormComponent
  }
];
