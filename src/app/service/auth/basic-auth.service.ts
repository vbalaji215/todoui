import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {API_URL, AUTHENTICATED_TOKEN, AUTHENTICATED_USER} from '../../app.constants';

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
    return this.httpClient.get<AuthenticationBean>(`${API_URL}/basic-auth`, {
      headers: authHeaders
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, userName);
          sessionStorage.setItem(AUTHENTICATED_TOKEN, authHeaderString);
          return data;
        }
      )
    );
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(AUTHENTICATED_TOKEN);
    }
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user == null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(AUTHENTICATED_TOKEN);
  }
}
