class Player {
  #name;
  #password;
  #matchPlayed;
  #totalScore;
  #questionsAttempted;

  constructor(name, password) {
    this.#name = name;
    this.#password = password;
    this.#matchPlayed = 0;
    this.#totalScore = 0;
    this.#questionsAttempted = [];
  }

  get name() {
    return this.#name;
  }

  get password() {
    return this.#password;
  }

  get currentStats() {
    return {
      name: this.#name,
      matchPlayed: this.#matchPlayed,
      score: this.#totalScore,
    };
  }

  get questionsAttempted() {
    return [...this.#questionsAttempted];
  }

  updateCurrentMatchResult(playerResponse) {
    const { question, answer, response } = playerResponse;
    const score = answer === response ? 10 : 0;

    this.#matchPlayed += 1;
    this.#questionsAttempted.push(playerResponse);
    this.#totalScore += score;
  }
}

module.exports = Player;
