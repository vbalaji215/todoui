import { Injectable } from '@angular/core';
import {HelloWorldBean} from './welcome-data.service';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) { }

  retrieveAllTodos(userName) {
    console.log('Execute Hello World Service');
    return this.httpClient.get<Todo[]>(`http://localhost:8080/users/${userName}/todos`);
  }
}
