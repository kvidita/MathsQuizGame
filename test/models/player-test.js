const { describe, it } = require("node:test");
const assert = require("assert");
const Player = require("../../src/models/player");

describe("player", () => {
  describe("name", () => {
    it("should be 'vidita'", () => {
      const name = "vidita";
      const password = "123";
      const player = new Player(name, password);

      assert.strictEqual(player.name, "vidita");
    });
  });

  describe("password", () => {
    it("should be 123", () => {
      const name = "vidita";
      const password = "123";
      const player = new Player(name, password);

      assert.strictEqual(player.password, "123");
    });
  });

  describe("currentStats", () => {
    it("should be 0 match played with 0 score", () => {
      const name = "vidita";
      const password = "123";
      const player = new Player(name, password);

      const actual = player.currentStats;
      const expected = {
        name: "vidita",
        matchPlayed: 0,
        score: 0,
      };

      assert.deepStrictEqual(actual, expected);
    });

    it("should be 1 match played with a score of 10", () => {
      const name = "vidita";
      const password = "123";
      const player = new Player(name, password);
      const matchResult = { question: "1+1=?", answer: 2, response: 2 };

      player.updateCurrentMatchResult(matchResult);

      const actual = player.currentStats;
      const expected = {
        name: "vidita",
        matchPlayed: 1,
        score: 10,
      };

      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("questionsAttempted", () => {
    it("should be an empty list", () => {
      const name = "vidita";
      const password = "123";
      const player = new Player(name, password);

      assert.deepStrictEqual(player.questionsAttempted, []);
    });
  });
});
