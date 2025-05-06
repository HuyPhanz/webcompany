import { Routes } from '@angular/router';
import { CompanyInfoComponent } from './company_info/company-info/company-info.component';
import { CustomerContactListComponent } from './customer_contact/customer-contact-list/customer-contact-list.component';

export const CompanyRoutes: Routes = [
  {
    path: '',
    redirectTo: 'info',
    pathMatch: 'full'
  },
  {
    path: 'info',
    component: CompanyInfoComponent,
    data: { breadcrumb: 'Info' }
  },
  {
    path: 'customer',
    data: { breadcrumb: 'Customer' },
    children: [
      {
        path: '',
        component: CustomerContactListComponent
      }
    ]
  }
];
