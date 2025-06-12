import { Component } from '@angular/core';
import { CellComponent } from '../cell/cell.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board-game',
  imports: [CellComponent, CommonModule],
  templateUrl: './board-game.component.html',
  styleUrl: './board-game.component.scss',
  standalone: true
})
export class BoardGameComponent {
  currentPlayer: string = 'X';
  gameOver: boolean = false;
  winner: string | null = null;

  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  handleCellClick(row: number, col: number) {
    if (this.gameOver || this.board[row][col] !== '') {
      return;
    }
    
    this.board[row][col] = this.currentPlayer;
    
    if (this.checkWinner()) {
      this.gameOver = true;
      this.winner = this.currentPlayer;
      return;
    }
    
    if (this.checkDraw()) {
      this.gameOver = true;
      return;
    }
    
    this.togglePlayer();
    
    console.log(`Player ${this.currentPlayer}'s turn`);
  }

  togglePlayer() {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  checkWinner(): boolean {
    for (let i = 0; i < 3; i++) {
      if (
        this.board[i][0] !== '' &&
        this.board[i][0] === this.board[i][1] &&
        this.board[i][1] === this.board[i][2]
      ) {
        return true;
      }
    }

    for (let i = 0; i < 3; i++) {
      if (
        this.board[0][i] !== '' &&
        this.board[0][i] === this.board[1][i] &&
        this.board[1][i] === this.board[2][i]
      ) {
        return true;
      }
    }

    if (
      this.board[0][0] !== '' &&
      this.board[0][0] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2]
    ) {
      return true;
    }

    if (
      this.board[0][2] !== '' &&
      this.board[0][2] === this.board[1][1] &&
      this.board[1][1] === this.board[2][0]
    ) {
      return true;
    }

    return false;
  }

  checkDraw(): boolean {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j] === '') {
          return false;
        }
      }
    }
    return true;
  }

  resetGame() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.currentPlayer = 'X';
    this.gameOver = false;
    this.winner = null;
  }
}