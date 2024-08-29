import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  set token(token: string | null) {
    if (typeof window !== 'undefined' && token) {
      localStorage.setItem('token', token);
    }
  }

  get token(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token') as string;
    }
    return null;
  }

  removeToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
  }
}
