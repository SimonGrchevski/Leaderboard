import Dom from './dom.js';
export default class Events {

  addEvents(dom) {
    dom.getSubmitBtn().addEventListener('click', () => dom.addScore());
  }
}