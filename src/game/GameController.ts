import { GameBoard } from './models/GameBoard.js';
import { Display } from '../cli/display.js';
import chalk from 'chalk';

export class GameController {
  private gameBoard: GameBoard;

  constructor() {
    this.gameBoard = new GameBoard();
  }

  public async start(): Promise<void> {
    let playAgain = true;

    while (playAgain) {

      this.gameBoard = new GameBoard();
      
      while (!this.gameBoard.isGameOver()) {
        Display.clearScreen();
        Display.showWelcomeMessage();
        Display.showBoard(this.gameBoard);
        Display.showCurrentPlayer(this.gameBoard.getCurrentPlayer());

        try {
          const position = await Display.promptForMove();
          const moveSuccessful = this.gameBoard.makeMove(position);
          
          if (!moveSuccessful) {
            throw new Error('Invalid move. Please try again.');
          }
        } catch (error) {
          Display.showError(error instanceof Error ? error.message : 'An unknown error occurred');
          await this.waitForUser();
        }
      }

      Display.clearScreen();
      Display.showWelcomeMessage();
      Display.showBoard(this.gameBoard);
      Display.showGameOver(this.gameBoard.getWinner());

      playAgain = await Display.promptPlayAgain();
    }

    Display.clearScreen();
    console.log(chalk.green('Thanks for playing Tic-Tac-Toe! 👋\n'));
  }

  private waitForUser(): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });
  }
}
