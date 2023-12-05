import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  OnInit,
  PLATFORM_ID
} from '@angular/core';
import { ClockComponent } from '../clock/clock.component';
import { isPlatformBrowser, NgClass, NgOptimizedImage, NgStyle } from '@angular/common';
import { FoldedPageComponent } from '../folded-page/folded-page.component';
import { TerminalComponent } from '../terminal/terminal.component';
import { debounce, fromEvent, map, merge, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.scss'],
  standalone: true,
  imports: [ClockComponent, NgOptimizedImage, NgClass, NgStyle, FoldedPageComponent, TerminalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BriefComponent implements OnInit {
  public myName = [...'Mahdi'.split(''), '&nbsp;', ...'Zarei'.split('')].map((i) => ({
    letter: i,
    color: 'unset'
  }));
  newTerminal = 0;
  openedTerminal = false;
  platformId!: object;
  rainbow: number[] = [];

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    if (isPlatformBrowser(platformId)) {
      this.platformId = platformId;
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId))
      this.bindKeypressEvent().subscribe(($event: KeyboardEvent) => this.onKeyPress($event));
  }

  private bindKeypressEvent(): Observable<KeyboardEvent> {
    const eventsType$ = [
      fromEvent(window, 'keypress'),
      fromEvent(window, 'keydown')
    ];
    return merge(...eventsType$)
      .pipe(
        debounce(() => timer(10)),
        map(state => (state as KeyboardEvent))
      );
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
    return letters[Math.floor(Math.random() * 10)];
  }

  onKeyPress($event: KeyboardEvent) {
    if (($event.ctrlKey || $event.metaKey) && $event.altKey && $event.key === 'z') {
      if (!this.openedTerminal) {
        this.openedTerminal = true;
      } else {
        this.newTerminal = Math.random();
      }
    }
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
