#!/usr/bin/env node

import { GameController } from './game/GameController.js';

async function main() {
  try {
    const game = new GameController();
    await game.start();
  } catch (error) {
    console.error('An unexpected error occurred:');
    console.error(error);
    process.exit(1);
  }
}

main();
