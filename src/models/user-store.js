const Players = require("./player");

class UserStore {
  #storagePath;
  #fileReader;
  #fileWriter;

  constructor(storagePath, fileReader, fileWriter) {
    this.#storagePath = storagePath;
    this.#fileReader = fileReader;
    this.#fileWriter = fileWriter;
  }

  restore(players) {
    const rawUsersData = this.#fileReader(this.#storagePath, "utf-8");
    const players = new Players();

    Object.entries(rawUsersData).forEach((playerData) => {
      const [playerId, player] = playerData;
      players.addPlayer(player.name, player.password);

      player.questionsAttempted.forEach(
        players.updatePlayerStats(playerId, response)
      );
    });
  }

  store(players) {}
}
