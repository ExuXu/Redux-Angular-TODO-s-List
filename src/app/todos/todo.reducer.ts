import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Terminar el curso'),
];

const _todoReducer = createReducer(
  initialState,
  on(actions.addTodo, actions.addTodoAction ),
  on(actions.editTodo, actions.editTodoAction ),
  on(actions.deleteTodo, actions.deleteTodoAction ),
  on(actions.toggleAllTodos, actions.toggleAllTodosAction ),
  on(actions.cleanCompleteTodos, actions.cleanCompleteTodosAction ),
  on(actions.toggleTodoCompletion, actions.toggleTodoCompletionAction ),
);

export function todoReducer( state: Todo[] = initialState, action: Action ) {
  return _todoReducer( state, action);
}
