import {Component, Input} from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-s4-education',
    templateUrl: './s4-education.component.html',
    styleUrls: ['./s4-education.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class S4EducationComponent {
  @Input() activated = false;
}
