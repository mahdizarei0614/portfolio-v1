import {AfterViewInit, Component} from '@angular/core';
import {getWindow} from "../../../../app.component";

@Component({
  selector: 'app-minesweeper',
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.scss']
})
export class MinesweeperComponent implements AfterViewInit {
  field: any = [];
  gameOver = false;
  totalBombs = 10;
  clickFunction = (e: any) => {
    this.reveal(e);
  }

  auxClickFunction = (e: any) => {
    e.preventDefault();
    this.flag(e);
  }


  ngAfterViewInit() {
    setTimeout(() => {
      this.startGame();
      document.getElementById('close')?.addEventListener('click', () => {
        document.getElementById('info')?.remove();
      })
    }, 1000)
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
          const cell: any = document.getElementById(`cell-${i}-${j}`);
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
    const elements = document.getElementsByClassName("cell");
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('contextmenu', event => event.preventDefault());
      elements[i].addEventListener('click', this.clickFunction, false);
      elements[i].addEventListener('auxclick', this.auxClickFunction, false);
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
    let [, row, cell] =  id.split('-');
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

  flag(el: any) {
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
    let [, row, cell] =  id.split('-');
    row = parseInt(row, 10);
    cell = parseInt(cell, 10);
    if (this.field[row][cell].revealed) {
      return;
    }
    if (!this.field[row][cell].flag) {
      this.field[row][cell].flag = true;
      document.getElementById(`cell-${row}-${cell}`)!.innerHTML = '<img class="bomb" src="assets/images/flag.svg" alt="F" />';
    } else {
      this.field[row][cell].flag = false;
      document.getElementById(`cell-${row}-${cell}`)!.innerHTML = '';
    }
  }

  defuseCell(row: any, cell: any) {
    const element: any = document.getElementById(`cell-${row}-${cell}`);
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

  gameOverEmit() {
    this.gameOver = true;
    for (let i = 0; i < this.field.length; i++) {
      for (let j = 0; j < this.field[0].length; j++) {
        if (!this.field[i][j].bomb) {
          const cell: any = document.getElementById(`cell-${i}-${j}`);
          cell.innerHTML = this.field[i][j].numOfBombsAround;
        } else {
          if (!this.field[i][j].flag) {
            document.getElementById(`cell-${i}-${j}`)!.innerHTML = '<img class="bomb" src="assets/images/bomb.svg" alt="B" />';
          }
        }
      }
    }
  }

  startGame() {
    this.render();
    this.setBombs();
    this.setListeners();
    // this.revealSomeCells();
  }
}
