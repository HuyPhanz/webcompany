import { Routes } from '@angular/router';
import { CompanyInfoComponent } from './company_info/company-info/company-info.component';
import { CustomerContactListComponent } from './customer_contact/customer-contact-list/customer-contact-list.component';
import { CustomerContactComponent } from './customer_contact/customer-contact/customer-contact.component';

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
    data: { breadcrumb: 'Customers' },
    children: [
      {
        path: '',
        component: CustomerContactListComponent,
        data: { breadcrumb: null }
      },
      {
        path: 'add',
        component: CustomerContactComponent,
        data: { breadcrumb: 'Add' }
      }
    ]
  }
];
