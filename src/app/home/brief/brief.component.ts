import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID } from '@angular/core';
import { ClockComponent } from '../clock/clock.component';
import { isPlatformBrowser, NgClass, NgOptimizedImage, NgStyle } from '@angular/common';
import { FoldedPageComponent } from '../folded-page/folded-page.component';
import { TerminalComponent } from '../terminal/terminal.component';

@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.scss'],
  standalone: true,
  imports: [ClockComponent, NgOptimizedImage, NgClass, NgStyle, FoldedPageComponent, TerminalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BriefComponent {
  public myName = [...'Mahdi'.split(''), '&nbsp;', ...'Zarei'.split('')].map((i) => ({
    letter: i,
    color: 'unset',
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

  openTerminal() {
    this.openedTerminal = true;
  }
}
