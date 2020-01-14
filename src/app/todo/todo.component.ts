import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import {BasicAuthService} from '../service/auth/basic-auth.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoId: number;
  todo: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router,
    private basicAuthService: BasicAuthService
    ) { }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    /**
     * The subscribe in retrieve todo is an asynchronous call, so when the
     * todo page initially loads the todo object will be null, until the
     * API call returns. In order to avoid the null error in the console,
     * a dummy Todo object is created here. The user will see this default Todo
     * object displayed in the screen only if the API call is very slow to
     * respond, otherwise the user will never see this default Todo object
     * details
     */
    this.todo = new Todo(this.todoId, '', false, new Date());
    if (this.todoId != -1) {
      const userName = this.basicAuthService.getAuthenticatedUser();
      this.todoService.retrieveTodo(userName, this.todoId).subscribe(
        data => this.todo = data
      );
    }

  }

  saveTodo() {
    const userName = this.basicAuthService.getAuthenticatedUser();
    if (this.todoId != -1) {
      this.todoService.updateTodo(userName, this.todoId, this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      );
    } else {
      console.log('About to add todo');
      this.todoService.createTodo(userName, this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      );
    }
  }

}
