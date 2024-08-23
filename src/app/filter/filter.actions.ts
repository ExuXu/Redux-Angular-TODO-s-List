import { createAction, props } from '@ngrx/store';

export type ValidFilters = 'all' | 'complete' | 'pendings';

export const setFilter = createAction (
  '[Filter] Set Filter',
  props<{ filter: ValidFilters }>()
)

export const setFilterAction =
  ( state: ValidFilters, { filter }:  { filter: ValidFilters } ): ValidFilters => filter;

