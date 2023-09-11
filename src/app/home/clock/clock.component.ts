import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  @Input() size = 0
  @Input() hourIdentifier: 'full' | 'partial' | 'off' = 'off';
  time: {
    seconds: string,
    minutes: string,
    hours: string
  } = {
    seconds: '90deg',
    minutes: '90deg',
    hours: '90deg'
  }

  ngOnInit() {
    setInterval(() => this.update(), 10);
  }

  update() {
    const elapsed = ((new Date().getTime()) -
      ((new Date().getTimezoneOffset()) * 60 * 1000) -
      (new Date('1970-01-01').getTime()))
      % 86400000;
    this.time.seconds = this.getSecond(elapsed)
    this.time.minutes = this.getMinute(elapsed)
    this.time.hours = this.getHour(elapsed)
  }

  getSecond(milliseconds: number) {
    return ((milliseconds / 1000) % 60) * 6 + 90 + 'deg';
  }

  getMinute(milliseconds: number) {
    return ((milliseconds / 1000 / 60) % 60) * 6 + 90 + 'deg';
  }

  getHour(milliseconds: number) {
    return ((milliseconds / 1000 / 60 / 60) % 12) * 30 + 90 + 'deg';
  }

  protected readonly Array = Array;
}
