import { Component } from '@angular/core';
import { BriefComponent } from './brief/brief.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [BriefComponent]
})
export class HomeComponent {
  brief = true;
}
