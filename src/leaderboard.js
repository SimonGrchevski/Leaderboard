import Score from "./score";

export default class Leaderboard {
  constructor() {
    this.board = [];
  }

  get() {
    return this.board;
  }
  addScore(name, score) {
    this.board.push(new Score(name,+score));
  }
}