import Dom from './dom.js';
export default class Events {

  addEvents(dom) {
    dom.getSubBtn().addEventListener('click', () => dom.addScore());
    dom.getRefBtn().addEventListener('click', () => dom.clear());
  }
}