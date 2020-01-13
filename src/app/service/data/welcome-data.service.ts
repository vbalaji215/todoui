import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class HelloWorldBean {
  constructor(public helloMessage: string) { }
}


@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  executeHelloWorldBeanService() {
    console.log('Execute Hello World Service');
    return this.httpClient.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  executeHelloWorldBeanServiceWithVariable(name) {
    let authHeaderString = this.createAuthHeaders();
    let authHeaders = new HttpHeaders(
      {
        Authorization: authHeaderString
      }
    );
    console.log('Execute Hello World Service');
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,{
      headers: authHeaders
    });
  }

  createAuthHeaders(){
    let userName = 'balaji';
    let password = 'balaji';
    let authHeaderString = 'Basic ' +window.btoa(userName+":"+password);
    return authHeaderString;

  }
}
