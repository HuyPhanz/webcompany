import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginRes } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'auth_token';
  private roleKey = 'user_role';
  private apiUrl = environment.API_URL;

  httpClient = inject(HttpClient);
  router = inject(Router);

  private token = signal<string | null>(localStorage.getItem(this.tokenKey));
  role = signal<string | null>(localStorage.getItem(this.roleKey));

  isAuthenticated = computed(() => !!this.token());

  login(userData: any): void {
    this.httpClient.post<LoginRes>(this.apiUrl + '/auth/login', userData).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem(this.tokenKey, res.token);
        localStorage.setItem(this.roleKey, res.role);
        this.token.set(res.token);
        this.router.navigate(['/']);
      }
    });
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.roleKey);
    this.token.set(null);
    this.role.set(null);
  }
}
