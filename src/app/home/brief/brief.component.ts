import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ClockComponent } from '../clock/clock.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.scss'],
  standalone: true,
  imports: [ClockComponent, NgOptimizedImage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BriefComponent {
  public myName = [
    {
      letter: 'M',
      color: 'unset'
    },
    {
      letter: 'a',
      color: 'unset'
    },
    {
      letter: 'h',
      color: 'unset'
    },
    {
      letter: 'd',
      color: 'unset'
    },
    {
      letter: 'i',
      color: 'unset'
    },
    {
      letter: '&nbsp;',
      color: 'unset'
    },
    {
      letter: 'Z',
      color: 'unset'
    },
    {
      letter: 'a',
      color: 'unset'
    },
    {
      letter: 'r',
      color: 'unset'
    },
    {
      letter: 'e',
      color: 'unset'
    },
    {
      letter: 'i',
      color: 'unset'
    }
  ];
  rainbow: number[] = [];

  getCode() {
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += this.getOneChar();
    }
    return code;
  }

  getOneChar() {
    const letters = ['4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd'];
    return letters[Math.floor(Math.random() * 10)];
  }

  randColor(index: number, on = true) {
    if (on) {
      this.rainbow.push(0);
      this.myName[index].color = '#' + this.getCode();
    } else {
      this.rainbow.pop();
      setTimeout(() => {
        this.myName[index].color = 'unset';
      }, 300);
    }
  }
}
