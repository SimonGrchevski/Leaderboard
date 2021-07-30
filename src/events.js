export default class Events {
  static addEvents(dom) {
    dom.getSubBtn().addEventListener('click', () => dom.addScore());
    dom.getRefBtn().addEventListener('click', () => dom.printScores());
  }
}