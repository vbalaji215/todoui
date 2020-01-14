import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL} from '../../app.constants';

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
    return this.httpClient.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
  }

  executeHelloWorldBeanServiceWithVariable(name) {
    // const authHeaderString = this.createAuthHeaders();
    // const authHeaders = new HttpHeaders(
    //   {
    //     Authorization: authHeaderString
    //   }
    // );
    console.log('Execute Hello World Service');
    return this.httpClient.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`);
  }

  // createAuthHeaders(){
  //   let userName = 'balaji';
  //   let password = 'balaji';
  //   let authHeaderString = 'Basic ' +window.btoa(userName+":"+password);
  //   return authHeaderString;
  //
  // }
}
