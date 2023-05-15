import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public slides: SlideModel[] = [
    {
      id: 'biography',
      activated: false
    },
    {
      id: 'experience',
      activated: false
    },
    // {
    //   id: 'education',
    //   activated: false
    // },
    {
      id: 'skills',
      activated: false
    },
    {
      id: 'certifications',
      activated: false
    }
  ];
}

declare type SlideModel = {
  id: string;
  activated: boolean;
}
