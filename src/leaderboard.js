import Score from './score.js';

export default class Leaderboard {
  board;

  constructor() {
    this.init();
  }

  init() {
    this.board = [];
  }

  get() {
    return this.board;
  }

  addScore(name, score) {
    this.board.push(new Score(name, +score));
  }

  erase() {
    this.init();
  }
}