class Players {
  #players;
  #playerCount;

  constructor() {
    this.#playerCount = 0;
    this.#players = {};
  }

  addPlayer(player) {
    this.#playerCount += 1;
    this.#players[this.#playerCount] = player;
  }

  addScore(playerId, score) {
    this.#players[playerId].addScore(score);
  }

  playerDetails(playerId) {
    return this.#players[playerId].currentStats();
  }
}

module.exports = Players;