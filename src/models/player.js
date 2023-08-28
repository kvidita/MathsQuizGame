class Player {
  #name;
  #password;
  #matchPlayed;
  #score;
  #currentQuestion;

  constructor(name, password) {
    this.#name = name;
    this.#password = password;
    this.#matchPlayed = 0;
    this.#score = 0;
    this.#currentQuestion = {};
  }

  get name() {
    return this.#name;
  }

  get password() {
    return this.#password;
  }

  currentStats() {
    return { matchPlayed: this.#matchPlayed, score: this.#score };
  }

  set questionEntity(question) {
    this.#currentQuestion = question; //format {operand1, operand2, operator}
  }

  addScore() {
    this.#matchPlayed += 1;
    this.#score += 10;
  }

  currentQuestionAnswer() {
    let answer = 0;
    const { operand1, operand2, operator } = this.#currentQuestion;
    switch (operator) {
      case "+":
        answer = operand1 + operand2;
        break;
      case "-":
        answer = operand1 - operand2;
        break;
      case "/":
        answer = operand1 / operand2;
        break;
      default:
        answer = operand1 * operand2;
    }
    return answer;
  }
}

module.exports = Player;
