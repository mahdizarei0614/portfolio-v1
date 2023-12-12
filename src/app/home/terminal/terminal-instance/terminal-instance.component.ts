import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  inject,
  Inject,
  Input,
  Output,
  PLATFORM_ID, ViewChild
} from '@angular/core';
import { isPlatformBrowser, NgStyle } from '@angular/common';
import { ResizableModule } from 'angular-resizable-element';
import { CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-terminal-instance',
  standalone: true,
  imports: [ResizableModule, DragDropModule, NgStyle],
  templateUrl: './terminal-instance.component.html',
  styleUrl: './terminal-instance.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TerminalInstanceComponent implements AfterViewInit {
  private _cdr = inject(ChangeDetectorRef);
  TerminalMessageType = TerminalMessageType;
  @Output() closeTerminal = new EventEmitter();
  @Output() activeTerminal = new EventEmitter();
  commands: CommandModel[] = [
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
          text: 'mz bio\t\t\t\tBiography'
        },
        {
          text: 'mz xp\t\t\t\tExperiences'
        },
        {
          text: 'mz skills\t\t\tSkills'
        },
        {
          text: 'mz edu\t\t\t\tEducations'
        },
        {
          text: 'mz links\t\t\t\tLinks'
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
    },
    {
      text: 'mz xp',
      response: [
        {
          text: 'OMPFinex (Front-end Team Lead) (02/2023 - Present)',
          option: true,
          peerCommand: 'mz xp ompfinex'
        },
        {
          text: 'Negah Bank (Senior Web Developer) (12/2022 - 02/2023)',
          option: true,
          peerCommand: 'mz xp negah-bank'
        },
        {
          text: 'Dotin (Mid-level Angular Developer) (08/2020 - 12/2022)',
          option: true,
          peerCommand: 'mz xp dotin'
        },
        {
          text: 'YOLO Team (Junior Full-stack Developer) (06/2021 - 02/2022)',
          option: true,
          peerCommand: 'mz xp yolo-team'
        },
        {
          text: 'Promte (Junior Front-end Developer) (07/2019 - 04/2020)',
          option: true,
          peerCommand: 'mz xp promte'
        }
      ]
    },
    {
      text: 'mz xp ompfinex',
      response: [
        {text: ''},
        ...[
          'Front-end Tech lead',
          '<a class="underline" target="_blank" href="https://ompfinex.com/">OMPfinex</a> &#8226; Gandi, Tehran, Iran',
          '02/2023 - Present'
        ].map(i => ({
          text: i,
          classes: 'text-yellow-300'
        })),
        {text: ''},
        ...['&#8226; Headed the <a class="underline" target="_blank" href="https://app.ompfinex.com/">platform</a>, <a class="underline" target="_blank" href="https://ompfinex.com/">landing</a>, and admin panel projects client-side to build a good and reliable exchange platform over 9 months of management.',
          '&#8226; Identified the flows in the code structure, planned a change to Domain Driven Design (DDD) pattern, and oversaw the progress through 6 months of hard work.',
          '&#8226; Evaluated the company resources, hired 3 new members, formed the team structure, and mentored individuals through the challenges over the last 6 months.',
          '&#8226; Introduced a UI kit library of 20+ components and utilities on top of Ant Design, and deployed on the company\'s private npm registry in 2 months.',
          '&#8226; Managed the migration of 3 projects to the latest version of Angular and restructured the control flow to the Angular 17 standards.'
        ].map(i => ({
          text: i,
          classes: 'text-blue-300',
          breakLines: 2
        }))]
    },
    {
      text: 'mz xp negah-bank',
      response: [
        {text: ''},
        ...[
          'Senior Web Developer',
          '<a class="underline" target="_blank" href="https://negah-bank.com/">Negah Bank</a> &#8226; Nelson Mandella, Tehran, Iran',
          '12/2022 - 02/2023'
        ].map(i => ({
          text: i,
          classes: 'text-yellow-300'
        })),
        {text: ''},
        ...[
          '&#8226; Directed the client-side of the newest enterprise project of the company, a chat-based person-to-person money transactions PWA, over 3 months.',
          '&#8226; Settled a good relationship between units by communicating with the server-side development team as the leading role of the client-side team to improve teamwork over 3 months of development.'
        ].map(i => ({
          text: i,
          classes: 'text-blue-300',
          breakLines: 2
        }))
      ]
    },
    {
      text: 'mz xp dotin',
      response: [
        {text: ''},
        ...[
          'Mid-level Angular Developer',
          '<a class="underline" target="_blank" href="https://dotin.ir">Dotin</a> &#8226; Nelson Mandella, Tehran, Iran',
          '08/2020 - 12/2022'
        ].map(i => ({
          text: i,
          classes: 'text-yellow-300'
        })),
        {text: ''},
        ...[
          '&#8226; Submitted 1300+ commits containing 140k+ lines of code into <a class="underline" target="_blank" href="https://web.wepod.com/">WePOD PWA</a>.',
          '&#8226; Completed 500+ tasks and spent 4.5k+ hours on the WePOD project within an agile team of 20+ (4 client-side development members) to develop and maintain applications written in Typescript & JavaScript.',
          '&#8226; Structured a clean, testable, and maintainable code base, analyzed requirements, and prioritized tasks, which increased the number of users from 2k+ to 750k+ in 2 years.',
          '&#8226; Expedited knowledge sharing and management by 80% across the team of 20+ developers by redesigning Jira workflow with two other colleagues in the first two months.',
          '&#8226; Refactored the code base, which reduced bug reports by 70% in the 1st month of development.',
          '&#8226; Held projects on the edge of technologies by migrating WePOD PWA and WePOD admin panel code bases to the latest LTS version of Angular every three months.',
          '&#8226; Promoted twice within 12 months due to strong performance and organizational impact - ahead of schedule by 6 months.'
        ].map(i => ({
          text: i,
          classes: 'text-blue-300',
          breakLines: 2
        }))]
    },
    {
      text: 'mz xp yolo-team',
      response: [
        {text: ''},
        ...[
          'Junior Full-stack Developer',
          'YOLO Team &#8226; Ozgol, Tehran, Iran',
          '06/2021 - 02/2022'
        ].map(i => ({
          text: i,
          classes: 'text-yellow-300'
        })),
        {text: ''},
        ...[
          '&#8226; Solved complicated mathematical problems, added 20k+ lines of code, performed refactoring and optimization,  and facilitated procedures by writing queries over MongoDB using mongoose as ORM in 7 months of development.',
          '&#8226; Coordinated in a team of 6 to Develop and maintain highly complicated game rules into a platform over six months with 200+ bug-less commits injected into production.'
        ].map(i => ({
          text: i,
          classes: 'text-blue-300',
          breakLines: 2
        }))]
    },
    {
      text: 'mz xp promte',
      response: [
        {text: ''},
        ...[
          'Junior Full-stack Developer',
          'Promte &#8226; Pardis Technology Park, Pardis, Iran',
          '07/2019 - 04/2020'
        ].map(i => ({
          text: i,
          classes: 'text-yellow-300'
        })),
        {text: ''},
        ...[
          '&#8226; Developed and merged 300+ commits into 10+ projects simultaneously in the first three months with an on-time deliverance rate of 100%.',
          '&#8226; Upgraded codes to the latest tech to develop and maintain 10+ websites for clients worldwide, including Elpida,  over seven months.',
          '&#8226; Dealt with complicated mathematical problems during developing a website builder as the company\'s main product for over seven months and had 100+ commits on the mentioned project.',
          '&#8226; Gained experience in the Ionic framework by constructing 3 PWAs in three months.',
          '&#8226; Designed and implemented more than 20 HTML pages in the Elpida project using PHP blades in two months.',
          '&#8226; Answered 200+ (acceptance rate of 33%) questions regarding Angular & Ionic in Stackoverflow since 2018.'
        ].map(i => ({
          text: i,
          classes: 'text-blue-300',
          breakLines: 2
        }))]
    },
    {
      text: 'mz skills',
      response: [
        {text: ''},
        ...[
          'Angular\t\t\t\t\t&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;',
          'TypeScript\t\t\t\t&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9723;',
          'RxJs\t\t\t\t\t&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9723;&#9723;',
          'Ionic Framework\t\t\t&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;',
          'Nx\t\t\t\t\t\t&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9723;&#9723;',
          'DDD pattern\t\t\t\t&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9723;',
          'JavaScript\t\t\t\t&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9723;&#9723;&#9723;',
          'Git\t\t\t\t\t\t&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9723;',
          'Sass\t\t\t\t\t&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;',
          'Less\t\t\t\t\t&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;',
          'Tailwind\t\t\t\t&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;',
          'Bootstrap\t\t\t\t&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;',
          'jQuery\t\t\t\t\t&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9723;&#9723;',
          'Node.js\t\t\t\t\t&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9724;&#9723;&#9723;&#9723;',
          'Express.js\t\t\t\t&#9724;&#9724;&#9724;&#9724;&#9724;&#9723;&#9723;&#9723;&#9723;&#9723;',
          'MongoDB\t\t\t\t\t&#9724;&#9724;&#9724;&#9724;&#9724;&#9723;&#9723;&#9723;&#9723;&#9723;'
        ].map(i => ({
          text: i,
          classes: 'text-blue-300',
          breakLines: 1
        })),
        {text: ''}]
    },
    {
      text: 'mz edu',
      response: [
        {text: ''},
        {
          text: '> Applied Mathematics\t\t(University of Tehran (2014-2016))'
        },
        {
          text: '* Not graduating due to following dreams as soon as possible.',
          breakLines: 2
        },
        {
          text: '> Mathematics\t\t\t\t(Shahid Sattari (NODET) (2010-2014))'
        }
      ].map(i => ({
        text: i.text,
        classes: 'text-blue-300',
        breakLines: i.breakLines ?? 1
      }))
    },
    {
      text: 'mz xp',
      response: [
        {
          text: 'OMPFinex (Front-end Team Lead) (02/2023 - Present)',
          option: true,
          peerCommand: 'mz xp ompfinex'
        },
        {
          text: 'Negah Bank (Senior Web Developer) (12/2022 - 02/2023)',
          option: true,
          peerCommand: 'mz xp negah-bank'
        },
        {
          text: 'Dotin (Mid-level Angular Developer) (08/2020 - 12/2022)',
          option: true,
          peerCommand: 'mz xp dotin'
        },
        {
          text: 'YOLO Team (Junior Full-stack Developer) (06/2021 - 02/2022)',
          option: true,
          peerCommand: 'mz xp yolo-team'
        },
        {
          text: 'Promte (Junior Front-end Developer) (07/2019 - 04/2020)',
          option: true,
          peerCommand: 'mz xp promte'
        }
      ]
    }
  ].map((i: CommandModel) => {
    i.response = i.response.map((j) => {
      j.classes = j.classes ?? 'text-white';
      j.breakLines = j.breakLines ?? 1;
      return j as CommandResponseModel;
    });
    return i;
  });
  enteringCommand = '';
  @Output() fullTerminal = new EventEmitter();
  @Output() maximizeTerminal = new EventEmitter();
  @Output() minimizeTerminal = new EventEmitter();
  platformId!: object;
  recentCommandIndex = 0;
  selectingCommand = false;
  @Input() terminal!: Terminal;
  @ViewChild('Terminal') terminalElement!: ElementRef<HTMLDivElement>;

  _recentCommands: string[] = [];

  get recentCommands(): string[] {
    return [this.enteringCommand, ...[...this._recentCommands].reverse()];
  }

  @HostBinding('class') get className() {
    return 'block relative';
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
    if (this.selectingCommand) {
      this.selectingCommand = false;
      const lastCommandIndex = this.terminal.commands.length - 1;
      const lastCommand = this.terminal.commands[lastCommandIndex];
      if (lastCommand.type === TerminalMessageType.Select) {
        this.enteringCommand = lastCommand.options[lastCommand.selectedIndex].peerCommand;
      }
      this.terminal.commands.pop();
    } else {
      if (document.getElementById('command')!.innerHTML !== this.enteringCommand) {
        this.enteringCommand = document.getElementById('command')!.innerHTML;
      }
    }
    this._recentCommands.push(this.enteringCommand);
    this.terminal.commands.push({
      type: TerminalMessageType.Input,
      id: '' + Math.random(),
      text: '' + this.enteringCommand
    });
    const command = this.commands.find(c => c.text === this.enteringCommand);
    if (command?.text) {
      if (command.response[0]?.option) {
        this.selectingCommand = true;
        this.terminal.commands.push({
          type: TerminalMessageType.Select,
          id: '' + Math.random(),
          options: command.response.map(i => ({
            text: i.text,
            peerCommand: i.peerCommand ?? ''
          })),
          selectedIndex: 0
        });
      } else {
        this.terminal.commands.push({
          type: TerminalMessageType.Response,
          id: '' + Math.random(),
          html: command.response.map(i => `<span${i.classes ? ' class="' + i.classes + '"' : ''}>${i.text}</span>${Array(i.breakLines ?? 1).fill(``).map(() => `<br/>`).join('')}`).join('')
        });
      }
    } else {
      this.terminal.commands.push({
        type: TerminalMessageType.Error,
        id: '' + Math.random(),
        text: '' + this.enteringCommand
      });
    }
    setTimeout(() => {
      document.getElementById('command')!.innerHTML = '';
      this.enteringCommand = '';
    });
  }

  @HostListener('document:keydown', ['$event'])
  handleArrowDown(event: KeyboardEvent) {
    const lastCommandIndex = this.terminal.commands.length - 1;
    const lastCommand = this.terminal.commands[lastCommandIndex];
    if (event.key === 'ArrowDown') {
      if (lastCommand.type === TerminalMessageType.Select) {
        if (lastCommand.options.length > lastCommand.selectedIndex + 1) lastCommand.selectedIndex++;
      }
    }
    if (event.key === 'ArrowUp') {
      if (lastCommand.type === TerminalMessageType.Select) {
        if (lastCommand.selectedIndex > 0) lastCommand.selectedIndex--;
      }
    }
  }

  input(event: Event) {
    // @ts-expect-error because I say so
    const text = event.target.outerText;
    if (text)
      this.enteringCommand = text;
  }

  nextCommand() {
    if (!this.selectingCommand) {
      if (this.recentCommandIndex === 0) {
        return;
      }
      this.recentCommandIndex -= 1;
      document.getElementById('command')!.innerHTML = this.recentCommands[this.recentCommandIndex];
    }
  }

  onResizeEnd() {
      const {left, top, width, height} = this.terminalElement.nativeElement.getBoundingClientRect();
      console.log(this.terminalElement.nativeElement.getBoundingClientRect())
      this.terminal.x = left;
      this.terminal.y = top;
      this.terminal.width = width ?? this.terminal.width;
      this.terminal.height = height ?? this.terminal.height;
      this._cdr.detectChanges();
  }

  drag(event: CdkDragEnd) {
    event.source.element.nativeElement
    const {left, top, width, height} = event.source.element.nativeElement.getBoundingClientRect();
    this.terminal.x = left;
    this.terminal.y = top;
    this.terminal.width = width ?? this.terminal.width;
    this.terminal.height = height ?? this.terminal.height;
    this._cdr.markForCheck();
  }

  pervCommand() {
    if (!this.selectingCommand) {
      if (this.recentCommandIndex === this.recentCommands.length - 1) {
        return;
      }
      this.recentCommandIndex += 1;
      document.getElementById('command')!.innerHTML = this.recentCommands[this.recentCommandIndex];
    }
  }
}

export interface Terminal {
  commands: TerminalMessage[];
  full: boolean;
  height: number;
  id: number;
  minimized: boolean;
  active: boolean;
  width: number;
  x: number;
  y: number;
}

enum TerminalMessageType {
  Error = 'Error',
  Input = 'Input',
  Response = 'Response',
  Select = 'Select',
}

interface TerminalError extends TerminalMessageBase {
  text: string;
  type: TerminalMessageType.Error;
}

interface TerminalSelect extends TerminalMessageBase {
  options: TerminalSelectOption[];
  selectedIndex: number;
  type: TerminalMessageType.Select;
}

interface TerminalSelectOption {
  peerCommand: string;
  text: string;
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

interface CommandModel {
  response: CommandResponseModel[]
  text: string,
}

interface CommandResponseModel {
  breakLines?: number,
  classes?: string
  option?: boolean
  peerCommand?: string,
  text: string,
}

type TerminalMessage = TerminalError | TerminalInput | TerminalResponse | TerminalSelect;
