import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo';
import { HighlightCompletedTodo } from '../../directives/highlight-completed-todo';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodo, UpperCasePipe],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  public readonly todo = input.required<Todo>();
  public todoToggle = output<Todo>();

  todoClicked() {
    this.todoToggle.emit(this.todo());
  }
}
