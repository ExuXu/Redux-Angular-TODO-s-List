import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import { ValidFilters } from '../../../filter/filter.actions';

import * as actions from '../../../filter/filter.actions'
import { cleanCompleteTodos } from '../../todo.actions';

@Component({
  selector: 'todos-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css'
})
export class TodoFooterComponent implements OnInit {

  actualFilter: ValidFilters = '' as ValidFilters;
  filters: ValidFilters[] = ['complete', 'pendings', 'all'];

  pendings: number = 0;

  constructor (
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.select('filter')
      .subscribe( filter => this.actualFilter = filter);
    this.store
      .subscribe( state => {
        this.actualFilter = state.filter;
        this.pendings     = state.todos.filter( todo => !todo.completed ).length;
      });
  }

  changeFilter( filter: ValidFilters ): void {
    this.store.dispatch(
      actions.setFilter({ filter })
    );
  }

  cleanCompleteTodos(): void {
    this.store.dispatch(
      cleanCompleteTodos()
    );
  }
}
