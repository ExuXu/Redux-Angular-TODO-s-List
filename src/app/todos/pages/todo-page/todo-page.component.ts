import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import * as actions from '../../todo.actions';

@Component({
  selector: 'todos-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent {

  private toggleValue: boolean = true;;

  constructor( private store: Store<AppState> ) {}
  toggleAllTodos(): void {
    this.store.dispatch(
      actions.toggleAllTodos({
        toggleValue: this.toggleValue
      })
    );

    this.toggleValue = !this.toggleValue;
  }
}
