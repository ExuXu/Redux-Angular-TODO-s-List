import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import * as actions from '../../todo.actions';

@Component({
  selector: 'todos-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent {
  txtInput: FormControl;

  constructor( private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required)
  }

  addTodo(): void {

    if ( this.txtInput.invalid ) return;

    this.store.dispatch( actions.addTodo({ text: this.txtInput.value }) );
    this.txtInput.reset();
  }
}
