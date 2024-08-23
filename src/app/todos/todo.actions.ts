import { createAction, props, State } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { AppState } from '../app.reducer';

// Definición de las acciones
export const addTodo = createAction(
  '[TODO] Add todo',
  props<{
    text: string
  }>()
);

export const deleteTodo = createAction(
  '[TODO] Delete todo',
  props<{
    id: number
  }>()
);

export const cleanCompleteTodos = createAction(
  '[TODO] Clean Complete Todos',
);

export const editTodo = createAction(
  '[TODO] Edit todo',
  props<{
    id: number,
    text: string
  }>()
);

export const toggleTodoCompletion = createAction(
  '[TODO] Toggle Todo',
  props<{
    id: number
  }>()
);

export const toggleAllTodos = createAction(
  '[TODO] All Toggle Todos',
  props<{
    toggleValue: boolean
  }>()
);

// Funciones de manejo de las acciones
export const addTodoAction = (state: Todo[], { text }: { text: string }): Todo[] => {
  return [
    ...state,
    new Todo( text )
  ];
}

export const deleteTodoAction = (state: Todo[], { id }: { id: number }): Todo[] =>
  state.filter( todo => todo.id !== id )

export const cleanCompleteTodosAction = (state: Todo[]): Todo[] =>
  state.filter( todo => !todo.completed )

export const editTodoAction = (state: Todo[], { text, id }: { text: string, id: number }): Todo[] => {
  return state.map( todo => {
    if (todo.id !== id) return todo;
    return {
      ...todo,
      text: text
    }
  });
}

export const toggleTodoCompletionAction = (state: Todo[], { id }: { id: number }): Todo[] => {
  return state.map( todo => {
    if (todo.id !== id) return todo;
    return {
      ...todo,
      completed: !todo.completed
    }
  });
}

export const toggleAllTodosAction = (state: Todo[], { toggleValue }: { toggleValue: boolean }): Todo[] => {
  return state.map( todo => {
    if ( todo.completed === toggleValue) return todo;
    return {
      ...todo,
      completed: !todo.completed
    }
  });
}
