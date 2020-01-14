import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';
import {API_URL} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) { }

  retrieveAllTodos(userName) {
    console.log('Execute Todo Service, to retrieve all todos');
    return this.httpClient.get<Todo[]>(`${API_URL}/users/${userName}/todos`);
  }

  deleteTodo(userName, id){
    console.log(`Execute Todo Service, to delete todo ${id}`);
    return this.httpClient.delete<Todo>(`${API_URL}/users/${userName}/todos/${id}`);
  }

  retrieveTodo(userName, id){
    console.log(`Execute Todo Service, to get todo ${id}`);
    return this.httpClient.get<Todo>(`${API_URL}/users/${userName}/todos/${id}`);
  }

  updateTodo(userName,id,todo){
    return this.httpClient.put<Todo>(
      `${API_URL}/users/${userName}/todos/${id}`,
      todo);
  }

  createTodo(userName,todo){
    console.log(userName);
    return this.httpClient.post<Todo>(
      `${API_URL}/users/${userName}/todos`,
      todo);
  }
}
