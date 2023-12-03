import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter, HostBinding,
  inject,
  Inject,
  Input,
  Output,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ResizableModule, ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-terminal-instance',
  standalone: true,
  imports: [CommonModule, ResizableModule],
  templateUrl: './terminal-instance.component.html',
  styleUrl: './terminal-instance.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TerminalInstanceComponent implements AfterViewInit {
  @HostBinding('class') get className() { return 'block' }
  private _cdr = inject(ChangeDetectorRef);
  TerminalMessageType = TerminalMessageType;
  @Output() closeTerminal = new EventEmitter();
  commands = [
    {
      text: 'mz help',
      response: [
        'commands list:',
        'mz help (commands list)',
        'mz bio (my biography)'
      ]
    }
  ];
  enteringCommand = '';
  @Output() maximizeTerminal = new EventEmitter();
  @Output() minimizeTerminal = new EventEmitter();
  @Output() fullTerminal = new EventEmitter();
  platformId!: object;
  @Input() terminal!: Terminal;

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
        html: command.response.map(i => `<span class="text-white">${i}</span><br/>`).join('')
      });
    } else {
      this.terminal.commands.push({
        type: TerminalMessageType.Error,
        id: '' + Math.random()
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
}

export interface Terminal {
  commands: TerminalMessage[];
  id: number;
  minimized: boolean;
  full: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
}

enum TerminalMessageType {
  Error = 'Error',
  Input = 'Input',
  Response = 'Response',
}

interface TerminalError extends TerminalMessageBase {
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
