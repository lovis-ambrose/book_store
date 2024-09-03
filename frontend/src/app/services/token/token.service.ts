import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  set token(token: string) {
    if (this.isBrowser()) {
      localStorage.setItem('token', token);
    }
  }

  get token(): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem('token') as string;
    }
    return null;
  }

  isTokenValid(): boolean {
    const token = this.token;
    if (!token) {
      return false;
    }
    const jwtHelper = new JwtHelperService();
    const isTokenExpired = jwtHelper.isTokenExpired(token);
    if (isTokenExpired && this.isBrowser()) {
      localStorage.clear();
      return false;
    }
    return true;
  }

  isTokenNotValid(): boolean {
    return !this.isTokenValid();
  }

  get userRoles(): string[] {
    const token = this.token;
    if (token) {
      const jwtHelper = new JwtHelperService();
      const decodedToken = jwtHelper.decodeToken(token);
      return decodedToken.authorities;
    }
    return [];
  }

  // Check if we're running in the browser
  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
