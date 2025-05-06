import { LoginPageComponent } from './core/components/login-page/login-page.component';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { Routes } from '@angular/router';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { EmployeeFormComponent } from './features/employee/employee-form/employee-form.component';
import { ProductFormComponent } from './features/products/product-form/product-form.component';
import { NewsFormComponent } from './features/news/news-form/news-form.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { NewsListComponent } from './features/news/news-list/news-list.component';
import { HomePageComponent } from './features/landing-page/home-page/home-page.component';
import { AboutPageComponent } from './features/landing-page/about-page/about-page.component';
import { ServicePageComponent } from './features/landing-page/service-page/service-page.component';
import { ContactPageComponent } from './features/landing-page/contact-page/contact-page.component';
import { NewsPageComponent } from './features/landing-page/news-page/news-page.component';
import { NewsDetailComponent } from './features/landing-page/news-detail/news-detail.component';
import { ProjectPageComponent } from './features/landing-page/project-page/project-page.component';
import { ProjectListComponent } from './features/projects/project-list/project-list.component';
import { EmployeeListComponent } from './features/employee/employee-list/employee-list.component';
import { ProjectComponent } from './features/projects/project/project.component';
import { BannerFormComponent } from './features/banner_home/banner-form/banner-form.component';
import { BannerComponent } from './features/banner/banner.component';

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
      // banner
      {
        path: 'banner',
        component: BannerFormComponent
      },
      // company-info
      {
        path: 'company',
        children: CompanyRoutes,
        data: { breadcrumb: 'Company' }
      },
      // employee
      {
        path: 'employee',
        component: EmployeeFormComponent
      },
      {
        path: 'member',
        component: MemberComponent
      },
      {
        path: 'employee-list',
        component: EmployeeListComponent
      },
      // product
      {
        path: 'products',
        component: ProductFormComponent
      },

      {
        path: 'product-list',
        component: ProductListComponent
      },
      // news
      {
        path: 'news',
        component: NewsFormComponent
      },
      {
        path: 'new-list',
        component: NewsListComponent
      },
      // project
      {
        path: 'project',
        component: ProjectComponent
      },
      {
        path: 'project-list',
        component: ProjectListComponent
      }
    ]
  },
  {
    path: 'auth',
    component: LoginPageComponent
  },
  {
    path: 'banner',
    component: BannerComponent
  },
  { path: 'notFound', component: NotFoundPageComponent }
];
