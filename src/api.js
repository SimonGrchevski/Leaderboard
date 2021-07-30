export default class Api {
  constructor() {
    this.baseURL = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";
    this.id = "D5yoWRMJdPAB5rVNrH0X";
  }

  postScore = async(user,score) => {
    const newScore = JSON.stringify({"user": user, "score": score});
    const res = await fetch(`${this.baseURL}${this.id}/scores/`, {
      method: "POST",
      body: newScore,
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  }

  getScores = async() => {
    const res = await fetch(`${this.baseURL}${this.id}/scores/`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    const li = await res.json();
    return li;
  }
}