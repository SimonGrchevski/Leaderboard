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
  }

  async get() {
    return this.board;
  }

  async addScore(name, score) {
    console.log(name);
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