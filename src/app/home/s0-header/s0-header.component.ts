import {Component, EventEmitter, HostListener, Output} from '@angular/core';
import {getWindow} from "../../app.component";

@Component({
    selector: 'app-s0-header',
    templateUrl: './s0-header.component.html',
    styleUrls: ['./s0-header.component.scss'],
    standalone: true
})
export class S0HeaderComponent {
  @HostListener('window:scroll', ['$event']) onScroll() {
    this.isScrolled();
  }
  @Output() slide = new EventEmitter();
  scrollTop = 0;
  scrollTopActivated = -1;
  menuItems = [
    {
      key: 'biography',
      label: 'Biography'
    },
    {
      key: 'experience',
      label: 'Experience'
    },
    // {
    //   key: 'education',
    //   label: 'Education'
    // },
    {
      key: 'skills',
      label: 'Skills'
    },
    {
      key: 'certifications',
      label: 'Certifications'
    },
    // {
    //   key: 'games',
    //   label: 'Mini Games'
    // },
    // {
    //   key: 'Languages',
    //   label: 'Languages'
    // },
  ];

  goTop() {
    getWindow()?.scrollTo({top: 0});
  }

  isScrolled() {
    this.scrollTop = (getWindow()?.document.getElementById('identifier')?.getBoundingClientRect().top as number);
    this.scrollTopActivated = Math.floor(-1 * this.scrollTop / getWindow()!.innerHeight);
  }

  public readonly getWindow = getWindow;
}
