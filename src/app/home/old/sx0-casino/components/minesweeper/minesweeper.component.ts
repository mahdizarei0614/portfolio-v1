import { AfterViewInit, Component } from '@angular/core';
import { getWindow } from '../../../../app.component';

@Component({
  selector: 'app-minesweeper',
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.scss'],
  standalone: true
})
export class MinesweeperComponent implements AfterViewInit {
  field: any = [];
  gameOver = false;
  totalBombs = 10;

  ngAfterViewInit() {
    setTimeout(() => {
      this.startGame();
      document.getElementById('close')?.addEventListener('click', () => {
        document.getElementById('info')?.remove();
      });
    }, 1000);
  }

  auxClickFunction = (e: Event) => {
    e.preventDefault();
    this.flag(e);
  };

  clickFunction = (e: Event) => {
    this.reveal(e);
  };

  defuseCell(row: number, cell: number) {
    const element = document.getElementById(`cell-${row}-${cell}`) as HTMLElement;
    const numOfBombs = this.field[row][cell].numOfBombsAround;
    this.field[row][cell].revealed = true;
    element.innerHTML = numOfBombs;
    if (numOfBombs === 0) {
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (!(x === 0 && y === 0)) {
            if (this.field[row + x] && this.field[row + x][cell + y] && !this.field[row + x][cell + y].bomb && !this.field[row + x][cell + y].revealed) {
              this.defuseCell(row + x, cell + y);
            }
          }
        }
      }
    }
  }

  flag(el: Event) {
    if (this.gameOver) {
      this.startGame();
      return;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const id = el.srcElement?.id ? el.srcElement.id : el.srcElement?.parentElement?.id;
    let [, row, cell] = id.split('-');
    row = parseInt(row, 10);
    cell = parseInt(cell, 10);
    if (this.field[row][cell].revealed) {
      return;
    }
    if (!this.field[row][cell].flag) {
      this.field[row][cell].flag = true;
      (document.getElementById(`cell-${row}-${cell}`) as HTMLElement).innerHTML = '<img class="bomb" src="assets/images/flag.svg" alt="F" />';
    } else {
      this.field[row][cell].flag = false;
      (document.getElementById(`cell-${row}-${cell}`) as HTMLElement).innerHTML = '';
    }
  }

  gameOverEmit() {
    this.gameOver = true;
    for (let i = 0; i < this.field.length; i++) {
      for (let j = 0; j < this.field[0].length; j++) {
        if (!this.field[i][j].bomb) {
          const cell = (document.getElementById(`cell-${i}-${j}`) as HTMLElement);
          cell.innerHTML = this.field[i][j].numOfBombsAround;
        } else {
          if (!this.field[i][j].flag) {
            (document.getElementById(`cell-${i}-${j}`) as HTMLElement).innerHTML = '<img class="bomb" src="assets/images/bomb.svg" alt="B" />';
          }
        }
      }
    }
  }

  render() {
    this.field = [];
    this.gameOver = false;
    let html = '';
    for (let i = 0; i < 10; i++) {
      this.field.push([]);
      html += '<div class="row" id="row-' + i + '">';
      for (let j = 0; j < 10; j++) {
        this.field[i].push({
          bomb: false,
          numOfBombsAround: 0,
          revealed: false,
          flag: false
        });
        html += '<div class="cell" id="cell-' + i + '-' + j + '"></div>';
      }
      html += '</div>';
    }
    if (getWindow()) {
      document.getElementById('container')!.innerHTML = html;
    }
  }

  reveal(el: any) {
    if (this.gameOver) {
      this.startGame();
      return;
    }
    let id;
    if (el.srcElement.id) {
      id = el.srcElement.id;
    } else {
      id = el.srcElement.parentElement.id;
    }
    let [, row, cell] = id.split('-');
    row = parseInt(row, 10);
    cell = parseInt(cell, 10);
    if (this.field[row][cell].flag) {
      return;
    }
    if (this.field[row][cell].bomb) {
      this.gameOverEmit();
    } else {
      this.defuseCell(row, cell);
    }
  }

  revealSomeCells() {
    for (let i = 0; i < 1; i++) {
      const randomRow = Math.floor(Math.random() * this.field.length);
      const randomCell = Math.floor(Math.random() * this.field[randomRow].length);
      if (!this.field[randomRow][randomCell].bomb && this.field[randomRow][randomCell].numOfBombsAround === 0 && !this.field[randomRow][randomCell].revealed) {
        this.defuseCell(randomRow, randomCell);
      } else {
        i--;
      }
    }
  }

  setBombs() {
    for (let i = 0; i < this.totalBombs; i++) {
      const randomRow = Math.floor(Math.random() * this.field.length);
      const randomCell = Math.floor(Math.random() * this.field[randomRow].length);
      if (this.field[randomRow][randomCell].bomb) {
        i--;
      } else {
        this.field[randomRow][randomCell].bomb = true;
      }
    }
    for (let i = 0; i < this.field.length; i++) {
      for (let j = 0; j < this.field[0].length; j++) {
        if (!this.field[i][j].bomb) {
          for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
              if (!(x === 0 && y === 0)) {
                if (this.field[i + x] && this.field[i + x][j + y] && this.field[i + x][j + y].bomb) {
                  this.field[i][j].numOfBombsAround++;
                }
              }
            }
          }
          const cell: HTMLElement = document.getElementById(`cell-${i}-${j}`) as HTMLElement;
          switch (this.field[i][j].numOfBombsAround) {
            case 0:
              cell.style.color = '#e0e0e0';
              break;
            case 1:
              cell.style.color = '#00f';
              break;
            case 2:
              cell.style.color = '#0f0';
              break;
            case 3:
              cell.style.color = '#cc0';
              break;
            case 4:
              cell.style.color = '#f80';
              break;
            case 5:
              cell.style.color = '#f00';
              break;
            case 6:
              cell.style.color = '#800';
              break;
            case 7:
              cell.style.color = '#f0f';
              break;
            case 8:
              cell.style.color = '#404';
              break;
          }
        }
      }
    }
  }

  setListeners() {
    const elements = document.getElementsByClassName('cell');
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('contextmenu', event => event.preventDefault());
      elements[i].addEventListener('click', this.clickFunction, false);
      elements[i].addEventListener('auxclick', this.auxClickFunction, false);
    }
  }

  startGame() {
    this.render();
    this.setBombs();
    this.setListeners();
    // this.revealSomeCells();
  }
}
