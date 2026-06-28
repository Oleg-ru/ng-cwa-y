import { Component, inject, signal } from '@angular/core';
import { TodosService } from '../services/todos';
import { Todo } from '../model/todo';

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
    console.log(this.todoService.todoItems);
    this.todoItems.set(this.todoService.todoItems);
  }
}
