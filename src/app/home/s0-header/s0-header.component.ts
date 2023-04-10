import {Component, EventEmitter, Output} from '@angular/core';
import {getWindow} from "../../app.component";

@Component({
  selector: 'app-s0-header',
  templateUrl: './s0-header.component.html',
  styleUrls: ['./s0-header.component.scss']
})
export class S0HeaderComponent {
  @Output() slide = new EventEmitter();
  menuItems = [
    {
      key: 'biography',
      label: 'Biography'
    },
    {
      key: 'experience',
      label: 'Experience'
    },
    {
      key: 'education',
      label: 'Education'
    },
    {
      key: 'skills',
      label: 'Skills'
    },
    {
      key: 'Languages',
      label: 'Languages'
    },
  ];

  public scroll(elementId: string) {
    getWindow()?.document.getElementById(elementId)?.scrollIntoView();
  }
}