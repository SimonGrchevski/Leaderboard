import Leaderboard from "./leaderboard";
export default  class Dom {
  constructor() {
    this.submitBtn = document.querySelector('.submit-btn');
    this.refreshBtn = document.querySelector('.refresh-btn');
    this.nameInp  = document.querySelector('#name');
    this.scoreInp = document.querySelector('#score');
    this.scores = document.querySelector('.scores-ul');
    this.leaderboard = new Leaderboard();
  }

  
  getSubmitBtn() {
    return this.submitBtn;
  }

  addScore() {
    this.leaderboard.addScore(this.nameInp.value,this.scoreInp.value);
    this.refresh();
  }

  createSpans(values) {
    const spans = [];
    values.forEach((val,i) => { 
      const elem = document.createElement('span');
      if(!i) // if first elem
        elem.innerHTML = `${val}: `;
      else 
        elem.innerHTML = val;

      spans.push(elem);
    });

    return spans;
  }

  createLi() {
    return document.createElement('li');
  }

  createScore(n,sc) {
    // there is easier way
    const [name, score] = this.createSpans([n,sc]);
    const li = document.createElement('li');
    this.createLi().append(name, score);
    return li;
  }

  refresh() {
    this.scores.innerHTML = '';
    this.leaderboard.get().forEach(s  => {
      this.scores.append( this.createScore(s.name,s.score));
    });
  }

}