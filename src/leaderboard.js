import Api from './api.js';
import Score from './score.js';

export default class Leaderboard {
  board;

  constructor() {
    this.init();
    this.api = new Api();
  }

  init() {
    this.board = [];
  }

  async updateBoard(board) {
    this.board = board;
    this.board = this.board.sort((a, b) => b.score-a.score);
  }

  async get() {
    return this.board;
  }

  async addScore(name, score) {
    await this.api.postScore(name,score);
    await this.refresh();
  }

  async refresh() {
    const li = await this.api.getScores();
    await this.updateBoard(li.result);
  }

  erase() {
    this.init();
  }
}