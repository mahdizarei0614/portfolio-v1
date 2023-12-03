import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, map, Observable } from 'rxjs';
import {
  Terminal,
  TerminalInstanceComponent
} from './terminal-instance/terminal-instance.component';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, TerminalInstanceComponent],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss'
})
export class TerminalComponent implements OnInit {
  _terminals$: BehaviorSubject<TerminalCell[]> = new BehaviorSubject<TerminalCell[]>([]);
  @Output() terminate = new EventEmitter();
  @Input() set addNewTerminal(newTerminal: number) {
    if (newTerminal > 0) {
      this.add();
      this.newTerminalAdded.emit();
    }
  }

  @Output() newTerminalAdded = new EventEmitter<void>();

  get firstAvailableIndex(): number {
    const terminals = this._terminals$.getValue();
    const index = terminals.findIndex(i => i === undefined);
    return index === -1 ? terminals.length : index;
  }

  get firstLastAvailableTerminalId(): number {
    return (this._terminals$.getValue().map(t => t ? t.id : 0).sort((a, b) => a - b).pop() ?? -1) + 1;
  }

  get terminals(): Observable<TerminalCell[]> {
    return this._terminals$.asObservable().pipe(map(terminal => {
      return terminal.filter(t => t && !t?.minimized);
    }));
  }

  get terminalsMinimized(): Observable<TerminalCell[]> {
    return this._terminals$.asObservable().pipe(map(terminal => {
      return terminal.filter(t => t && t?.minimized);
    }));
  }

  public ngOnInit() {
    this.add();
  }

  private setTerminals(terminals: TerminalCell[]) {
    this._terminals$.next(terminals);
  }

  add(): void {
    const terminals = this._terminals$.getValue();
    const firstAvailableIndex = this.firstAvailableIndex;
    terminals[firstAvailableIndex] = {
      id: this.firstLastAvailableTerminalId,
      x: firstAvailableIndex * 32 + 100,
      y: firstAvailableIndex * 32 + 100,
      width: 500,
      height: 400,
      minimized: false,
      full: false,
      commands: []
    };
    this.setTerminals(terminals);
    this.newTerminalAdded.emit();
  }

  close(id: number): void {
    this.setTerminals(this._terminals$.getValue().map(i => {
      if (i?.id === id) return undefined;
      return i;
    }));
    if (!this._terminals$.getValue().filter(i => i !== undefined).length) {
      this.terminate.emit();
    }
  }

  minimize(id: number): void {
    this.setTerminals(this._terminals$.getValue().map(i => {
      if (i?.id === id) {
        i.minimized = true;
      }
      return i;
    }));
  }

  full(id: number): void {
    this.setTerminals(this._terminals$.getValue().map(i => {
      if (i?.id === id) {
        i.full = !i.full;
      }
      return i;
    }));
  }

  maximize(id: number): void {
    this.setTerminals(this._terminals$.getValue().map(i => {
      if (i?.id === id) {
        i.minimized = false;
      }
      return i;
    }));
  }
}

type TerminalCell = Terminal | undefined;
