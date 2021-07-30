export default class Api {
  constructor() {
    this.baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    this.id = 'XUzURl6PXEEeWIzck7co';
    this.url = `${this.baseURL}${this.id}/scores/`;
    this.header = new Headers({ 'Content-type': 'application/json; charset=UTF-8' });
  }

  static createScore(user, score) {
    return JSON.stringify({ user, score });
  }

  postScore = async (user, score) => {
    await fetch(this.url, {
      method: 'POST',
      body: Api.createScore(user, score),
      headers: this.header,
    });
  }

  getScores = async () => {
    const res = await fetch(this.url, {
      method: 'GET',
      headers: this.header,
    });
    const li = await res.json();
    return li;
  }
}