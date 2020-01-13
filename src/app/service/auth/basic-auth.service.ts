import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

export class AuthenticationBean {
  constructor(public loginMessage: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private httpClient: HttpClient) { }

  executeBasicAuthService(userName, password) {
    const authHeaderString = 'Basic ' + window.btoa(userName + ':' + password);
    const authHeaders = new HttpHeaders(
      {
        Authorization: authHeaderString
      }
    );
    console.log('Execute login Controller');
    return this.httpClient.get<AuthenticationBean>(`http://localhost:8080/basic-auth`, {
      headers: authHeaders
    }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', userName);
          return data;
        }
      )
    );
  }


  authenticate(username, password) {
    if (username === 'balaji' && password === 'balaji') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user == null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
