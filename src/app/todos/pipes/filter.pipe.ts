import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';
import { ValidFilters } from '../../filter/filter.actions';

@Pipe({
  name: 'todoFilter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: ValidFilters): Todo[] {
    switch( filter ){
      case 'complete':
        return todos.filter( todo => todo.completed );
      case 'pendings':
        return todos.filter( todo => !todo.completed );
      default:
        return todos;
    }
  }

}
