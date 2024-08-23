import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './filter.actions'

import { ValidFilters } from './filter.actions';

export const initialState = 'all' as ValidFilters;
const _filterReducer = createReducer(initialState,
  on( actions.setFilter, actions.setFilterAction )
);

export function filterReducer( state: ValidFilters =  initialState, action: Action ) {
  return _filterReducer( state, action );
}

