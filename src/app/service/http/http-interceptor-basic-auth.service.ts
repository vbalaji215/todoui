import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import {BasicAuthService} from '../auth/basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthService: BasicAuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // const userName = 'balaji';
    // const password = 'balaji';
    // const authHeaderString = 'Basic ' + window.btoa(userName + ':' + password);
    const authHeaderString = this.basicAuthService.getAuthenticatedToken();
    const userName = this.basicAuthService.getAuthenticatedUser();
    if (authHeaderString && userName) {
      request = request.clone({
        setHeaders: {
          Authorization: authHeaderString
        }
      });
    }
    return next.handle(request);
  }
}
