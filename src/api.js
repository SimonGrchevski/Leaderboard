export default class Api {
  constructor() {
    this.baseURL = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";
    this.id = "D5yoWRMJdPAB5rVNrH0X";
    this.url = `${this.baseURL}${this.id}/scores/`;
    this.header = new Headers({"Content-type": "application/json; charset=UTF-8"});
  }

  createScore(user,score)
  {
    return JSON.stringify({ "user": user, "score": score });
  }
  postScore = async(user,score) => {
      await fetch(this.url, {
      method: "POST",
      body: this.createScore(user,score),
      headers: this.header
    });
  }

  getScores = async() => {
    const res = await fetch(this.url, {
      method: 'GET',
      headers: this.header
    })
    const li = await res.json();
    return li;
  }
}