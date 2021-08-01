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

  resetInp() {
    this.nameInp.value = '';
    this.scoreInp.value = '';
  }

  async addScore() {
    await this.leaderboard.addScore(this.nameInp.value, this.scoreInp.value);
    await this.refresh();
    this.resetInp();
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

  animateFadeIn = () => {
    let opacity = 0;
    let id = 0;
    let scores = this.scores;
    scores.style.opacity = opacity;
    clearInterval(id);
    id = setInterval(frame,100);
    function frame() {
      if(opacity >= 1)
        clearInterval(id);
      else 
        opacity+=0.1;
        scores.style.opacity = opacity;
    }
  }


  async refresh() {
    this.scores.innerHTML = '';
    this.leaderboard.board.forEach((s) => {
      this.scores.append(Dom.createScore(s.user, s.score));
    });
    this.animateFadeIn();
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