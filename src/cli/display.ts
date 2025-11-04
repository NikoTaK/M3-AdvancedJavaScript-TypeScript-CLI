import chalk from 'chalk';
import { GameBoard } from '../game/models/GameBoard.js';

export class Display {
  public static clearScreen(): void {
    console.clear();
  }

  public static showWelcomeMessage(): void {
    console.log(chalk.blue.bold('🎮 Tic-Tac-Toe Game 🎮'));
    console.log(chalk.gray('Use numbers 1-9 to make your move (like a phone keypad)'));
    console.log(chalk.gray(' 1 | 2 | 3 '));
    console.log(chalk.gray('-----------'));
    console.log(chalk.gray(' 4 | 5 | 6 '));
    console.log(chalk.gray('-----------'));
    console.log(chalk.gray(' 7 | 8 | 9 '));
    console.log('');
  }

  public static showBoard(gameBoard: GameBoard): void {
    const board = gameBoard.getBoard();
    const displayBoard = board.map((cell: string | null, index: number): string => {
      if (cell === 'X') return chalk.red('X');
      if (cell === 'O') return chalk.blue('O');
      return chalk.gray((index + 1).toString());
    });

    console.log(` ${displayBoard[0]} | ${displayBoard[1]} | ${displayBoard[2]} `);
    console.log('-----------');
    console.log(` ${displayBoard[3]} | ${displayBoard[4]} | ${displayBoard[5]} `);
    console.log('-----------');
    console.log(` ${displayBoard[6]} | ${displayBoard[7]} | ${displayBoard[8]} `);
    console.log('');
  }

  public static showCurrentPlayer(currentPlayer: string): void {
    console.log(`Current player: ${currentPlayer === 'X' ? chalk.red('X') : chalk.blue('O')}`);
  }

  public static showGameOver(winner: string | null): void {
    if (winner === 'Draw') {
      console.log(chalk.yellow.bold('\nGame Over! It\'s a draw!\n'));
    } else {
      console.log(chalk.green.bold(`\nGame Over! ${winner} wins!\n`));
    }
  }

  public static showError(message: string): void {
    console.log(chalk.red(`\nError: ${message}\n`));
  }

  public static async promptForMove(): Promise<number> {
    const readline = (await import('node:readline/promises')).createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    try {
      const answer = await readline.question('Enter your move (1-9): ');
      const position = parseInt(answer.trim(), 10) - 1; // Convert to 0-based index
      
      if (isNaN(position) || position < 0 || position > 8) {
        throw new Error('Please enter a number between 1 and 9');
      }
      
      return position;
    } finally {
      readline.close();
    }
  }

  public static async promptPlayAgain(): Promise<boolean> {
    const readline = (await import('node:readline/promises')).createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    try {
      const answer = await readline.question('Play again? (y/n): ');
      return answer.trim().toLowerCase() === 'y';
    } finally {
      readline.close();
    }
  }
}
