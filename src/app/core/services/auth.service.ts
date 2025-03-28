import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'auth_token';

  private token = signal<string | null>(localStorage.getItem(this.tokenKey));

  isAuthenticated = computed(() => !!this.token());

  login(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.token.set(token);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.token.set(null);
  }
}
