import { Action, Selector, State, StateContext } from '@ngxs/store';

export class AddTodoAction {
  static readonly type = 'addTodo';
  constructor(public todo: string) {}
}
export interface TodoStateModel {
  todos: string[];
}
@State<TodoStateModel>({
  name: 'main',
  defaults: { todos: ['task1', 'task2'] }
})
export class TodoState {
  @Selector()
  static todos(state: TodoStateModel): string[] {
    return state.todos;
  }

  @Action(AddTodoAction)
  addTodo(
    { getState, setState }: StateContext<TodoStateModel>,
    { todo }: AddTodoAction
  ) {
    const currentState = getState();
    const updatedTodos = [...currentState.todos, todo];
    setState({ todos: updatedTodos });
  }
}


// middleware
// async/await
