import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoId:number;
  todo: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute
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
    this.todo = new Todo(1, '', false, new Date());
    this.todoService.retrieveTodo('balaji',this.todoId).subscribe(
      data => this.todo = data
    );
  }

}
