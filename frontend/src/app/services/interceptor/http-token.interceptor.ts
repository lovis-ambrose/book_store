import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";
import {TokenService} from "../token/token.service";

export const httpTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const token = tokenService.token;

  console.log('Retrieved token:', token);

  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log("Request with token: ", authReq);
    return next(authReq);
  }

  console.log('No token present, sending request without token.');
  return next(req);
};
