import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  private baseUrl =
    'https://24436ad4-38d5-47c5-aa02-856a9d725769-00-ltrmuzif9wst.kirk.replit.dev';

  constructor(private http: HttpClient) {}

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  login(credentials: { email: string; password: string }) {
    return this.http.post(`${this.baseUrl}/auth/login`, credentials);
  }

  register(userData: { userName: string; email: string; password: string }) {
    return this.http.post(`${this.baseUrl}/auth/register`, userData);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
