import Dom from './dom.js';
import Events from './events.js';
export default class Iface {

  constructor() {
    this.dom = new Dom();
    this.events = new Events();
  }

  init() {
    this.events.addEvents(this.dom);
  }
}