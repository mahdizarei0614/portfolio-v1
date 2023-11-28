import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss'
})
export class TerminalComponent {
  _terminals$: BehaviorSubject<TerminalCell[]> = new BehaviorSubject<TerminalCell[]>([]);

  @Input() set addNewTerminal(newTerminal: boolean) {
    if (newTerminal) {
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
      return terminal.filter(t => !t || !t?.minimized);
    }));
  }

  get terminalsMinimized(): Observable<TerminalCell[]> {
    return this._terminals$.asObservable().pipe(map(terminal => {
      return terminal.filter(t => t && t?.minimized);
    }));
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
      minimized: false
    };
    console.log(terminals);
    this.setTerminals(terminals);
  }

  close(id: number): void {
    this.setTerminals(this._terminals$.getValue().map(i => {
      if (i?.id === id) return undefined;
      return i;
    }));
  }

  minimize(id: number): void {
    this.setTerminals(this._terminals$.getValue().map(i => {
      if (i?.id === id) {
        i.minimized = true;
      }
      return i;
    }));
  }
}

interface Terminal {
  id: number;
  x: number;
  y: number;
  minimized: boolean;
}

type TerminalCell = Terminal | undefined;
