const { describe, it } = require("node:test");
const assert = require("assert");
const Player = require("../../src/models/player");

describe("Player", () => {
  describe("name", () => {
    it("should be vidita", () => {
      const vidita = new Player("vidita", "abcd");

      assert.strictEqual(vidita.name, "vidita");
    });
  });

  describe("password", () => {
    it("should be abcd", () => {
      const vidita = new Player("vidita", "abcd");

      assert.strictEqual(vidita.password, "abcd");
    });
  });

  describe("currentStats", () => {
    it("should be 0 match-played and 0 score", () => {
      const vidita = new Player("vidita", "abcd");
      const actual = vidita.currentStats();
      const expected = { matchPlayed: 0, score: 0 };

      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("currentQuestionAnswer", () => {
    it("should be 4", () => {
      const vidita = new Player("vidita, abcd");

      vidita.questionEntity = { operand1: 2, operand2: 2, operator: "+" };
      const actual = vidita.currentQuestionAnswer();
      const expected = 4;

      assert.strictEqual(actual, expected);
    });

    it("should be 0", () => {
      const vidita = new Player("vidita, abcd");

      vidita.questionEntity = { operand1: 1, operand2: 1, operator: "-" };
      const actual = vidita.currentQuestionAnswer();
      const expected = 0;

      assert.strictEqual(actual, expected);
    });

    it("should be 3", () => {
      const vidita = new Player("vidita, abcd");

      vidita.questionEntity = { operand1: 1, operand2: 3, operator: "*" };
      const actual = vidita.currentQuestionAnswer();
      const expected = 3;

      assert.strictEqual(actual, expected);
    });

    it("should be 5", () => {
      const vidita = new Player("vidita, abcd");

      vidita.questionEntity = { operand1: 10, operand2: 2, operator: "/" };
      const actual = vidita.currentQuestionAnswer();
      const expected = 5;

      assert.strictEqual(actual, expected);
    });
  });
});
