import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
  standalone: true,
  imports: [NgStyle, NgClass]
})
export class ClockComponent {
  protected readonly Array = Array;
  @Input() hourIdentifier: 'full' | 'partial' | 'off' = 'off';
  @Input() size = 0;
  time: {
    seconds: string,
    minutes: string,
    hours: string
  } = {
    seconds: '90deg',
    minutes: '90deg',
    hours: '90deg'
  };

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    if (isPlatformBrowser(platformId)) {
      setInterval(() => this.update(), 10);
    }
  }

  getHour(milliseconds: number) {
    return ((milliseconds / 1000 / 60 / 60) % 12) * 30 + 90 + 'deg';
  }

  getMinute(milliseconds: number) {
    return ((milliseconds / 1000 / 60) % 60) * 6 + 90 + 'deg';
  }

  getSecond(milliseconds: number) {
    return ((milliseconds / 1000) % 60) * 6 + 90 + 'deg';
  }

  update() {
    const elapsed = ((new Date().getTime()) -
        ((new Date().getTimezoneOffset()) * 60 * 1000) -
        (new Date('1970-01-01').getTime()))
      % 86400000;
    this.time.seconds = this.getSecond(elapsed);
    this.time.minutes = this.getMinute(elapsed);
    this.time.hours = this.getHour(elapsed);
  }
}
