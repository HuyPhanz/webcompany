import { Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';
import { LoginPageComponent } from './core/components/login-page/login-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent }, // ✅ Landing Page
  {
    path: 'app',
    component: LayoutComponent,
    children: [{ path: 'dashboard', component: DashboardComponent }]
  },
  {
    path: 'auth',
    component: LoginPageComponent
  },
  { path: '**', component: NotFoundPageComponent }
];
