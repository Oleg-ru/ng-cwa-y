import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  protected count = signal(0);

  protected increment() {
    this.count.update(prev => prev + 1);
  }
  protected decrement() {
    this.count.set(this.count() - 1);
  }
  protected reset() {
    this.count.set(0);
  }
}
