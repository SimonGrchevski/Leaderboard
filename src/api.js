export default class Api {
  constructor() {
    this.baseURL = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";
    this.id = "w6MNRRcK4ghOIazO8GS8";
  }

  postScore = async() => {
    fetch(`${this.baseURL}${this.id}/scores/`, {
      method: "POST",
      body: JSON.stringify({
        "user": "Simon",
        "score": 100
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then((res) => res.json()).then((res) => console.log(res));

  }
}