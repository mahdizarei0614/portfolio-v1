import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-s4-education',
  templateUrl: './s4-education.component.html',
  styleUrls: ['./s4-education.component.scss']
})
export class S4EducationComponent {
  @Input() activated = false;
}
