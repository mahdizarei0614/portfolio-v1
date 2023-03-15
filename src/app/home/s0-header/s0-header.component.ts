import {Component, OnInit} from '@angular/core';
import {getWindow} from "../../app.component";

@Component({
  selector: 'app-s0-header',
  templateUrl: './s0-header.component.html',
  styleUrls: ['./s0-header.component.scss']
})
export class S0HeaderComponent implements OnInit {
  menuItems = [
    {
      key: 'biography',
      label: 'Biography'
    },
    {
      key: 'experience',
      label: 'Experience'
    },
    {
      key: 'Education',
      label: 'Education'
    },
    {
      key: 'Skills',
      label: 'Skills'
    },
    {
      key: 'Languages',
      label: 'Languages'
    },
  ];
  public scrolled = false;

  ngOnInit() {
    getWindow()?.addEventListener('scroll', () => {
      this.scrolled = (getWindow()?.document?.scrollingElement?.scrollTop as number) > 0;
    });
  }

  public scroll(elementId: string) {
    getWindow()?.document.getElementById(elementId)?.scrollIntoView();
  }
}
