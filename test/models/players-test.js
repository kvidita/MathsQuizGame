const { describe, it } = require("node:test");
const assert = require("assert");
const Players = require("../../src/models/players");
const Player = require("../../src/models/player");

describe("Players", () => {
  describe("addPlayer", () => {
    it("should add a player to players", () => {
      const name = "vidita";
      const password = "123";
      const players = new Players();
      const player = new Player(name, password);
      players.addPlayer(player);

      const actual = players.playerDetails(1);
      const expected = { matchPlayed: 0, score: 0 };

      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("addScore", () => {
    it("should add the score to the given player", () => {
      const name = "vidita";
      const password = "123";
      const players = new Players();
      const player = new Player(name, password);
      players.addPlayer(player);
      players.addScore(1, 10);

      const actual = players.playerDetails(1);
      const expected = { matchPlayed: 1, score: 10 };

      assert.deepStrictEqual(actual, expected);
    });
  });
});
