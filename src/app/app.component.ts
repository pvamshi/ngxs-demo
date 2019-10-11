import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AddTodoAction, TodoState } from './todo.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Select(TodoState.todos)
  public todos: Observable<string[]>;

  private localTodo: string;

  constructor(private store: Store) {}

  updateLocalTodo(value: any) {
    this.localTodo = value;
  }

  addTodo() {
    this.store.dispatch(new AddTodoAction(this.localTodo));
  }
}
