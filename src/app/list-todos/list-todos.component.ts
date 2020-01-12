import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  // todos = [
  //   new Todo(1, 'Learn To Dance', false, new Date()),
  //   new Todo(2, 'Expert in Spring', false,new Date()),
  //   new Todo(3, 'Visit India', false, new Date())
  // ];
  todos: Todo[];

  successMessage = '';

  constructor(
    private totoDataService: TodoDataService,
    private router: Router
    ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  deleteTodo(id){
    console.log(`About to delete the todo ${id}`);
    this.totoDataService.deleteTodo('balaji',id).subscribe(
      response => {
        console.log(response);
        this.successMessage = `Delete of ${id} Successful`;
        this.refreshTodos();
      }
    );
  }

  refreshTodos(){
    this.totoDataService.retrieveAllTodos('balaji').subscribe(
      response => {
        this.todos = response
      });
  }

  updateTodo(id){
    console.log(`About to update the todo ${id}`);
    this.router.navigate(['todos',id])
  }
}
