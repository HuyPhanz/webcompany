import { LoginPageComponent } from './core/components/login-page/login-page.component';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { Routes } from '@angular/router';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { HomePageComponent } from './features/landing-page/home-page/home-page.component';
import { AboutPageComponent } from './features/landing-page/about-page/about-page.component';
import { ServicePageComponent } from './features/landing-page/service-page/service-page.component';
import { ContactPageComponent } from './features/landing-page/contact-page/contact-page.component';
import { NewsPageComponent } from './features/landing-page/news-page/news-page.component';
import { NewsDetailComponent } from './features/landing-page/news-detail/news-detail.component';
import { ProjectPageComponent } from './features/landing-page/project-page/project-page.component';
import { CompanyRoutes } from './features/company/company.routes';
import { EmployeeRoutes } from './features/employee/employee.routes';
import { ProductRoutes } from './features/products/products.routes';
import { NewsRoutes } from './features/news/news.routes';
import { ProjectRoutes } from './features/projects/projects.routes';
import { BannerRoutes } from './features/banner_home/banner.routes';

export const routes: Routes = [
  {
    // ✅ Landing Page
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
      },
      {
        path: 'news-page',
        component: NewsPageComponent
      },
      {
        path: 'news-detail',
        component: NewsDetailComponent
      }
    ]
  },
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      // company-info
      {
        path: 'company',
        children: CompanyRoutes,
        data: { breadcrumb: 'Company' }
      },
      // employee
      {
        path: 'employee',
        children: EmployeeRoutes,
        data: { breadcrumb: 'Employee' }
      },
      // product
      {
        path: 'products',
        children: ProductRoutes,
        data: { breadcrumb: 'Products' }
      },
      // news
      {
        path: 'news',
        children: NewsRoutes,
        data: { breadcrumb: 'News' }
      },
      // project
      {
        path: 'project',
        children: ProjectRoutes,
        data: { breadcrumb: 'Projects' }
      },
      // banner
      {
        path: 'banner',
        children: BannerRoutes,
        data: { breadcrumb: 'Banner' }
      }
    ]
  },
  {
    path: 'auth',
    component: LoginPageComponent
  },
  { path: 'notFound', component: NotFoundPageComponent }
];
