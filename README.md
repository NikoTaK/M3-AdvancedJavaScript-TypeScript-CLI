# Tic-Tac-Toe CLI Game

A simple command-line Tic-Tac-Toe game built with TypeScript and Node.js.

## 🎮 How to Play

1. **Start the game**:
   ```bash
   npm install
   npm start
   ```

2. **Game Controls**:
   - Use numbers 1-9 to place your mark (X goes first)
   - The board corresponds to a phone keypad layout:
     ```
      1 | 2 | 3
     -----------
      4 | 5 | 6
     -----------
      7 | 8 | 9
     ```
   - The first player uses 'X', the second player uses 'O'
   - First to get 3 in a row (horizontally, vertically, or diagonally) wins!

## 🏗️ Project Structure

```
src/
├── cli/
│   └── display.ts     # Handles all console output and input
├── game/
│   ├── models/       
│   │   ├── GameBoard.ts  # Game logic and state management
│   │   └── Player.ts     # Player type definitions
│   └── GameController.ts # Main game controller
└── index.ts          # Entry point
```

## 🛠️ Development

- **Install dependencies**:
  ```bash
  npm install
  ```

- **Run in development mode** (auto-reloads on changes):
  ```bash
  npm run dev
  ```

- **Build the project**:
  ```bash
  npm run build
  ```

## 🤖 Game Logic

The game is built with a clean separation of concerns:

1. **GameBoard (src/game/models/GameBoard.ts)**:
   - Manages the game state (3x3 grid)
   - Handles player turns
   - Checks for wins/draws
   - Validates moves

2. **Display (src/cli/display.ts)**:
   - Handles all console I/O
   - Displays the game board in a user-friendly way
   - Manages user input

3. **GameController (src/game/GameController.ts)**:
   - Orchestrates the game flow
   - Manages the game loop
   - Handles game state transitions
