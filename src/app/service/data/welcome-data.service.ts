import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
}
