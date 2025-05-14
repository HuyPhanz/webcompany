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
import { NewsRoutes } from './features/news/news.routes';
import { ProjectRoutes } from './features/projects/projects.routes';
import { BannerRoutes } from './features/banner_home/banner.routes';
import { ProjectDetailPageComponent } from './features/landing-page/project-detail-page/project-detail-page.component';
import { CompanyServiceRoutes } from './features/company-service/company-service.routes';
import { CompanySupportRoutes } from './features/company-support/company-service.routes';
import { HomeAboutUsRoutes } from './features/home-intro/employee.routes';
import { PartnersRoutes } from './features/partners/company-service.routes';
import { FeatureServiceRoutes } from './features/feature-service/company-service.routes';
import {
  CompanyExperiencesListComponent
} from './features/company-experiences/company-experiences-list/company-experiences-list.component';
// import { AuthGuard } from './core/guards/auth.guard';

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
      // project
      {
        path: 'project-page',
        component: ProjectPageComponent
      },
      {
        path: 'project-detail/:id',
        component: ProjectDetailPageComponent
      },
      {
        path: 'contact-page',
        component: ContactPageComponent
      },
      // news-page
      {
        path: 'news-page',
        component: NewsPageComponent,
      },
      {
        path: 'news-detail/:id',
        component: NewsDetailComponent
      }
    ]
  },
  {
    path: 'app',
    component: LayoutComponent,
    // canActivate: [AuthGuard],
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
        data: { breadcrumb: 'Banners' }
      },
      // company-service
      {
        path: 'company-service',
        children: CompanyServiceRoutes,
        data: { breadcrumb: 'CompanyService' }
      },
      // company-service
      {
        path: 'company-support',
        children: CompanySupportRoutes,
        data: { breadcrumb: 'CompanySupport' }
      },
      //home-intro
      {
        path: 'home-about-us',
        children: HomeAboutUsRoutes,
        data: { breadcrumb: 'Home About Us' }
      },
      //Partners
      {
        path: 'partners',
        children: PartnersRoutes,
        data: { breadcrumb: 'Partners' }
      },
      //Feature Service
      {
        path: 'feature-service',
        children: FeatureServiceRoutes,
        data: { breadcrumb: 'Partners' }
      },
      //
      {
        path: 'company-experience',
        component: CompanyExperiencesListComponent,
      }
    ]
  },
  {
    path: 'auth',
    component: LoginPageComponent
  },
  { path: 'notFound', component: NotFoundPageComponent }
];
