import {Component} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':leave',
          [
            style({opacity: 1}),
            animate('.3s ease-out',
              style({opacity: 0}))
          ]
        )
      ]
    )
  ]
})
export class BriefComponent {
  loaded = false;
  rainbow: number[] = [];
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

  getCode() {
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += this.getOneChar();
    }
    return code;
  }

  getOneChar() {
    const letters = ['4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd'];
    return letters[Math.floor(Math.random() * 10)]
  }
}
