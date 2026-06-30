import { Component, inject, signal } from '@angular/core';
import { TodosService } from '../services/todos';
import { Todo } from '../model/todo';
import { catchError, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { TodoItem } from '../components/todo-item/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItem, FormsModule, FilterTodosPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos {
  private todoService = inject(TodosService);
  protected todoItems = toSignal(
    this.todoService.getTodosFromApi().pipe(
      catchError((err) => {
        console.error('Ошибка загрузки: ', err);
        return of([] as Todo[]);
      }),
    ),
    { initialValue: [] },
  );
  protected searchTerm = signal('');

  protected toggleCompleted(targetTodo: Todo) {
    this.todoItems().map((todo) =>
      todo.id === targetTodo.id ? { ...todo, completed: !todo.completed } : todo,
    );
  }

  ngOnInit() {}
}
