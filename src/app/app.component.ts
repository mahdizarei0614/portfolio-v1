import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import lottie from 'lottie-web';
import { defineElement } from '@lordicon/element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet]
})
export class AppComponent {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}

export function getWindow() {
  if (typeof window !== 'undefined') {
    return window as Window;
  }
  return null;
}
