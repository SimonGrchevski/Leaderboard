import Dom from './dom.js';
import Events from './events.js';

export default class Iface {
  constructor() {
    this.dom = new Dom();
  }

  init() {
    Events.addEvents(this.dom);
  }
}