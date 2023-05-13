import {Component, OnInit} from '@angular/core';
import {getWindow} from "../app.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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

  ngOnInit() {
    (getWindow() as Window)?.addEventListener('wheel', (event) => {
      if (event.deltaY > 0) {
        this.slide('next')
      } else {
        this.slide('perv')
      }
    });
  }

  slide(key: string) {
    const foundIndex = this.slides.findIndex((s) => s.activated);
    switch (key) {
      case 'next': {
        const nextSlide = this.slides[foundIndex + 1];
        if (nextSlide) {
          this.slide(nextSlide.id)
        } else {
          this.slide(this.slides[foundIndex].id)
        }
        break;
      }
      case 'perv': {
        const nextSlide = this.slides[foundIndex - 1];
        if (nextSlide) {
          this.slide(nextSlide.id)
        } else {
          this.slide('landing')
        }
        break;
      }
      default: {
        this.slides.map((s) => s.activated = false);
        const nextSlide = this.slides.find((s) => s.id === key);
        if (nextSlide) {
          nextSlide.activated = true;
        }
      }
    }
  }

  isActivated(index: number) {
    return index <= this.slides.findIndex((s) => s.activated);
  }
}

declare type SlideModel = {
  id: string;
  activated: boolean;
}
