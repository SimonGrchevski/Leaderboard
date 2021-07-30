import Leaderboard from './leaderboard.js';

export default class Dom {
  constructor() {
    this.submitBtn = document.querySelector('.submit-btn');
    this.refreshBtn = document.querySelector('.refresh-btn');
    this.nameInp = document.querySelector('#name');
    this.scoreInp = document.querySelector('#score');
    this.scores = document.querySelector('.scores-ul');
    this.leaderboard = new Leaderboard();
  }

  getSubBtn() {
    return this.submitBtn;
  }

  getRefBtn() {
    return this.refreshBtn;
  }

  async addScore() {
    await this.leaderboard.addScore(this.nameInp.value, this.scoreInp.value);
    await this.refresh();
  }

  static createSpans(values) {
    const spans = [];
    values.forEach((val, i) => {
      const elem = document.createElement('span');
      elem.innerHTML = val;
      if (!i) elem.innerHTML += ': '; // the first elem
      spans.push(elem);
    });
    return spans;
  }

  static createLiAndAppend(elem) {
    const parent = document.createElement('li');
    parent.append(...elem);
    return parent;
  }

  static createScore(newName, newScore) {
    return Dom
      .createLiAndAppend(
        Dom.createSpans([newName, newScore]),
      );
  }

  async refresh() {
    this.scores.innerHTML = '';
    console.log(this.leaderboard.board);
    this.leaderboard.board.forEach((s) => {
      this.scores.append(Dom.createScore(s.user, s.score));
    });
  }

  clear() {
    this.leaderboard.erase();
    this.refresh();
  }

  async printScores() {
    await this.leaderboard.refresh();
    await this.refresh();
  }
}