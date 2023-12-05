import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  inject,
  Inject,
  Input,
  Output,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser, NgStyle } from '@angular/common';
import { ResizableModule, ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-terminal-instance',
  standalone: true,
  imports: [ResizableModule, NgStyle],
  templateUrl: './terminal-instance.component.html',
  styleUrl: './terminal-instance.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TerminalInstanceComponent implements AfterViewInit {
  private _cdr = inject(ChangeDetectorRef);
  TerminalMessageType = TerminalMessageType;
  @Output() closeTerminal = new EventEmitter();
  commands: {
    text: string,
    response: {
      text: string,
      breakLines?: number,
      classes?: string
    }[]
  }[] = [
    {
      text: 'mz help',
      response: [
        {
          text: 'mz < command >',
          breakLines: 2
        },
        {
          text: 'Commands:',
          classes: 'text-blue-500'
        },
        {
          text: 'mz bio My Biography'
        }
      ]
    },
    {
      text: 'mz bio',
      response: [
        {
          text: 'Progressive Senior Web Engineer with 5+ years of experience designing, enhancing, and maintaining 15+ websites, primarily progressive web applications, mainly using Angular and Ionic at Dotin Corporation, one of the top 3 companies in the banking industry of Iran, Karafarin\'s Negah Bank, OMPFinex cryptocurrency exchange, and a startup in London named Elpida. Proficient in applying the Domain-Driven Design pattern (DDD) and implementing server-side rendering (SSR), incremental server-side rendering (ISR), and static site generation (SSG) techniques.',
          classes: 'text-blue-300'
        }
      ]
    }
  ].map(i => {
    i.response = i.response.map(j => {
      j.classes = j.classes ?? 'text-white'
      return j;
    });
    return i;
  });
  _recentCommands: string[] = []
  enteringCommand = '';
  @Output() fullTerminal = new EventEmitter();
  @Output() maximizeTerminal = new EventEmitter();
  @Output() minimizeTerminal = new EventEmitter();
  platformId!: object;
  @Input() terminal!: Terminal;
  recentCommandIndex = -1

  get recentCommands(): string[] {
    return this._recentCommands.reverse();
  }

  @HostBinding('class') get className() {
    return 'block';
  }

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    if (isPlatformBrowser(platformId)) {
      this.platformId = platformId;
    }
  }

  public ngAfterViewInit() {
    if (this.platformId) {
      setTimeout(() => {
        this._cdr.markForCheck();
      }, 2000);
    }
  }

  command() {
    this._recentCommands.push(this.enteringCommand);
    this.terminal.commands.push({
      type: TerminalMessageType.Input,
      id: '' + Math.random(),
      text: '' + this.enteringCommand
    });
    const command = this.commands.find(c => c.text === this.enteringCommand);
    if (command?.text) {
      this.terminal.commands.push({
        type: TerminalMessageType.Response,
        id: '' + Math.random(),
        html: command.response.map(i => `<span${i.classes ? ' class="' + i.classes + '"' : ''}>${i.text}</span>${Array(i.breakLines ?? 1).fill(``).map(() => `<br/>`).join('')}`).join('')
      });
    } else {
      this.terminal.commands.push({
        type: TerminalMessageType.Error,
        id: '' + Math.random(),
        text: '' + this.enteringCommand
      });
    }
    this.enteringCommand = '';
    setTimeout(() => {
      document.getElementById('command')!.innerHTML = '';
    });
  }

  input(event: Event) {
    // @ts-expect-error because I say so
    const char = event.data;
    if (char)
      this.enteringCommand += char;
  }

  onResizeEnd(event: ResizeEvent) {
    this.terminal.width = event.rectangle.width ?? this.terminal.width;
    this.terminal.height = event.rectangle.height ?? this.terminal.height;
    if (event.edges.top && typeof event.edges.top === 'number') {
      this.terminal.y += event.edges.top;
    }
    if (event.edges.left && typeof event.edges.left === 'number') {
      this.terminal.x += event.edges.left;
    }
    this._cdr.markForCheck();
  }

  pervCommand() {
    // if (recentCommandIndex === this._recentCommands.length - 1) {return}
    this.recentCommandIndex += 1;
  }
  nextCommand() {
    // if (recentCommandIndex === -1) {return}
    this.recentCommandIndex -= 1;
  }
}

export interface Terminal {
  commands: TerminalMessage[];
  full: boolean;
  height: number;
  id: number;
  minimized: boolean;
  width: number;
  x: number;
  y: number;
}

enum TerminalMessageType {
  Error = 'Error',
  Input = 'Input',
  Response = 'Response',
}

interface TerminalError extends TerminalMessageBase {
  text: string;
  type: TerminalMessageType.Error;
}

interface TerminalInput extends TerminalMessageBase {
  text: string;
  type: TerminalMessageType.Input;
}

interface TerminalResponse extends TerminalMessageBase {
  html: string;
  type: TerminalMessageType.Response;
}

interface TerminalMessageBase {
  id: string;
}

type TerminalMessage = TerminalError | TerminalInput | TerminalResponse;
