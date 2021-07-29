import Iface from './interface.js';
import './style.css';
import Api from './api.js';


const api = new Api();
const iface = new Iface();

iface.init();

//api.postScore();