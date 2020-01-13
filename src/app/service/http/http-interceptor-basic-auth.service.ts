import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor() { }

  intercept(request:HttpRequest<any>, next: HttpHandler){
    let userName = 'balaji';
    let password = 'balaji';
    let authHeaderString = 'Basic ' + window.btoa(userName+':'+password);
    request = request.clone({
      setHeaders: {
        Authorization: authHeaderString
      }
    });
    return next.handle(request);
  }
}
