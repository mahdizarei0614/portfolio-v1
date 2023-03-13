import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}

export function getWindow() {
  if (typeof window !== "undefined") {
    return window as Window;
  }
  return null;
}
