import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-s2-biography',
  templateUrl: './s2-biography.component.html',
  styleUrls: ['./s2-biography.component.scss'],
  standalone: true,
  imports: [NgClass]
})
export class S2BiographyComponent {
  @Input() activated = false;
}
