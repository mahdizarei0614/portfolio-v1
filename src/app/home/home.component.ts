import {Component, OnInit} from '@angular/core';
import {getWindow} from "../app.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
    }]
  public scrolled = false;

  ngOnInit() {
    getWindow()?.addEventListener('scroll', () => {
      this.scrolled = (getWindow()?.document?.scrollingElement?.scrollTop as number) > 0;
    });
  }
}
