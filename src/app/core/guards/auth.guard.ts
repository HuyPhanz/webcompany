import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable()
export class AuthGuard implements CanActivate {
  private authService = inject(AuthService);
  private router = inject(Router);
  toastService = inject(NzNotificationService);

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
    if (this.authService.role() === 'ADMIN') {
      return true;
    } else {
      this.toastService.error('Forbidden', "You don't have permission to access this page!");
    }
    return false;
  }
}
