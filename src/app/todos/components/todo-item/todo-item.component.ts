import { Component, ElementRef, Input, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';

import { Todo } from '../../models/todo.model';
import * as actions from '../../todo.actions';



@Component({
  selector: 'todos-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo = {} as Todo;
  @ViewChild('inputFisico') txtInputFisico?: ElementRef;

  chkCompleted?: FormControl;
  txtInput?:     FormControl;

  editing: boolean = false;

  constructor( private store: Store<AppState> ){

  }

  ngOnInit(): void {

    this.chkCompleted = new FormControl(  this.todo.completed );
    this.txtInput = new FormControl( this.todo.text, Validators.required );

    this.chkCompleted.valueChanges.subscribe( value => {
      console.log(value);

      this.store.dispatch( actions.toggleTodoCompletion({ id: this.todo.id }) );
    })
  }

  deleteTodo():void {
    this.store.dispatch(
      actions.deleteTodo({
        id: this.todo.id
      }
      )
    )
  }

  editTodo(): void {

    this.editing = true;
    this.txtInput?.setValue( this.todo.text );

    setTimeout(() => {
      this.txtInputFisico?.nativeElement.select();
    }, 500);

  }

  endEditTodo(): void {
    this.editing = false;

    if (this.txtInput?.invalid) return;
    if (this.txtInput?.value === this.todo.text) return;

    this.store.dispatch(
      actions.editTodo({
        text: this.txtInput?.value,
        id: this.todo.id
      })
    );
  }

}
