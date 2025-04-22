import { LoginPageComponent } from './core/components/login-page/login-page.component';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { Routes } from '@angular/router';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { EmployeeFormComponent } from './features/employee/employee-form/employee-form.component';
import { CompanyInfoComponent } from './features/company/company-info/company-info.component';
import { DetailCompanyComponent } from './features/company/detail-company/detail-company.component';
import { CompanyMemberComponent } from './features/company/company-member/company-member.component';
import { CompanyHistoryComponent } from './features/company/company-history/company-history.component';
import { ProductFormComponent } from './features/product/product-form/product-form.component';
import { NewsFormComponent } from './features/news/news-form/news-form.component';
import { CustomerContactComponent } from './features/company/customer-contact/customer-contact.component';
import { MediaFileComponent } from './features/company/media-file/media-file.component';
import { EmployeeListComponent } from './features/employee/employee-list/employee-list.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { NewsListComponent } from './features/news/news-list/news-list.component';
import { HomePageComponent } from './features/landing-page/home-page/home-page.component';
import { AboutPageComponent } from './features/landing-page/about-page/about-page.component';
import { ServicePageComponent } from './features/landing-page/service-page/service-page.component';
import { ProjectPageComponent } from './features/landing-page/project-page/project-page.component';
import { ContactPageComponent } from './features/landing-page/contact-page/contact-page.component';
import { BannerComponent } from './features/banner/banner.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'about',
        component: AboutPageComponent
      },
      {
        path: 'service-page',
        component: ServicePageComponent
      },
      {
        path: 'project-page',
        component: ProjectPageComponent
      },
      {
        path: 'contact-page',
        component: ContactPageComponent
      }
    ]
  }, // ✅ Landing Page
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'banner',
        component: BannerComponent
      },
      {
        path: 'company',
        component: CompanyInfoComponent
      },
      {
        path: 'employee',
        component: EmployeeFormComponent
      },
      {
        path: 'company-detail',
        component: DetailCompanyComponent
      },
      {
        path: 'company-member',
        component: CompanyMemberComponent
      },
      {
        path: 'company-history',
        component: CompanyHistoryComponent
      },
      {
        path: 'products',
        component: ProductFormComponent
      },
      {
        path: 'news',
        component: NewsFormComponent
      },
      {
        path: 'customer-contact',
        component: CustomerContactComponent
      },
      {
        path: 'employee-list',
        component: EmployeeListComponent
      },
      {
        path: 'product-list',
        component: ProductListComponent
      },
      {
        path: 'new-list',
        component: NewsListComponent
      },
      {
        path: 'media-file',
        component: MediaFileComponent
      }
    ]
  },
  {
    path: 'auth',
    component: LoginPageComponent
  },

  { path: 'notFound', component: NotFoundPageComponent }
];
