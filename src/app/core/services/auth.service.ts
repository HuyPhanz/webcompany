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
  private userNameKey = 'user_name'; // save user login


  httpClient = inject(HttpClient);
  router = inject(Router);

  private token = signal<string | null>(localStorage.getItem(this.tokenKey));
  role = signal<string | null>(localStorage.getItem(this.roleKey));
  // lưu tên người dùng
  private userName = signal<string | null>(localStorage.getItem(this.userNameKey));
  isAuthenticated = computed(() => !!this.token());

  // get User
  getUserName(): string {
    return this.userName() || 'Admin';
  }
  // login
  login(userData: any): void {
    this.httpClient.post<LoginRes>(this.apiUrl + '/auth/login', userData).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem(this.tokenKey, res.token);
        localStorage.setItem(this.roleKey, res.role);
        localStorage.setItem(this.userNameKey, res.username);
        this.token.set(res.token);
        this.router.navigate(['/app']);

        this.userName.set(res.username);
      }
    });
  }
  // logout
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.roleKey);
    this.token.set(null);
    this.role.set(null);
    this.router.navigate(['/auth']);

    localStorage.removeItem(this.userNameKey); // 👈 xoá tên
    this.userName.set(null); // 👈 clear tên
  }
}
