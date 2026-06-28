import { Component, inject, signal } from '@angular/core';
import { TodosService } from '../services/todos';
import { Todo } from '../model/todo';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos {
  private todoService = inject(TodosService);
  protected todoItems = signal<Array<Todo>>([]);

  ngOnInit() {
    this.todoService.getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
    .subscribe((todos) => {
      this.todoItems.set(todos);
    })

  }
}
