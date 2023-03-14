import {Component} from '@angular/core';

@Component({
  selector: 'app-s1-landing',
  templateUrl: './s1-landing.component.html',
  styleUrls: ['./s1-landing.component.scss']
})
export class S1LandingComponent {
  public myName = [
    {
      binary: '01001101',
      letter: 'M',
      hovered: false
    },
    {
      binary: '01000001',
      letter: 'A',
      hovered: false
    },
    {
      binary: '01001000',
      letter: 'H',
      hovered: false
    },
    {
      binary: '01000100',
      letter: 'D',
      hovered: false
    },
    {
      binary: '01001001',
      letter: 'I',
      hovered: false
    },
    {
      binary: '01011010',
      letter: 'Z',
      hovered: false
    },
    {
      binary: '01000001',
      letter: 'A',
      hovered: false
    },
    {
      binary: '01010010',
      letter: 'R',
      hovered: false
    },
    {
      binary: '01000101',
      letter: 'E',
      hovered: false
    },
    {
      binary: '01001001',
      letter: 'I',
      hovered: false
    }];
}
