import { Component, inject } from '@angular/core';
import { TodosService } from '../services/todos';
import { Todo } from '../model/todo';
import { catchError, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos {
  private todoService = inject(TodosService);
  protected todoItems = toSignal(
    this.todoService
      .getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.error('Ошибка загрузки: ', err);
          return of([] as Todo[]);
        })
      ),
    {initialValue: []}
  )

  ngOnInit() {}
}
