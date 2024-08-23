import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import { ValidFilters } from '../../../filter/filter.actions';

@Component({
  selector: 'todos-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  actualFilter = '' as ValidFilters;

  constructor( private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe( ({ todos, filter })  => {
      this.todos        = todos;
      this.actualFilter = filter;
    })
  }
}
