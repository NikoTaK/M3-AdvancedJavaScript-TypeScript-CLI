import { Player } from './Player.js';

export type CellValue = Player | null;
export type BoardState = [CellValue, CellValue, CellValue, CellValue, CellValue, CellValue, CellValue, CellValue, CellValue];

export class GameBoard {
  private board: BoardState;
  private currentPlayer: Player;
  private winner: Player | 'Draw' | null;

  constructor() {
    this.board = Array(9).fill(null) as BoardState;
    this.currentPlayer = 'X';
    this.winner = null;
  }

  public makeMove(position: number): boolean {

    if (this.winner !== null || this.board[position] !== null) {
      return false;
    }


    this.board[position] = this.currentPlayer;


    if (this.checkWin()) {
      this.winner = this.currentPlayer;
    } else if (this.isBoardFull()) {
      this.winner = 'Draw';
    } else {
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }

    return true;
  }

  public getCurrentPlayer(): Player {
    return this.currentPlayer;
  }

  public getWinner(): Player | 'Draw' | null {
    return this.winner;
  }

  public getBoard(): BoardState {
    return [...this.board] as BoardState;
  }

  public isGameOver(): boolean {
    return this.winner !== null;
  }

  private checkWin(): boolean {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winPatterns.some(pattern => {
      const [a, b, c] = pattern;
      return (
        this.board[a] !== null &&
        this.board[a] === this.board[b] && 
        this.board[a] === this.board[c]
      );
    });
  }

  private isBoardFull(): boolean {
    return this.board.every(cell => cell !== null);
  }
}
