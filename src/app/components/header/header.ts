import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected title = signal('Header my App');
  protected links = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: 'todos',
      name: 'Todos',
    },
  ];
}
