import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private http = inject(HttpClient);

  public getTodosFromApi() {
    const URL = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(URL);
  }
}
