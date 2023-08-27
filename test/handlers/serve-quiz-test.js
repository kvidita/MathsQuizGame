const { describe, it } = require("node:test");
const request = require("supertest");
const { createApp } = require("../../src/create-app");

describe("app", () => {
  describe("serveQuiz", () => {
    it("should serve the quiz page", (_, done) => {
      const app = createApp();

      request(app)
        .get("/quiz-page")
        .expect(200)
        .expect("content-type", "text/html; charset=UTF-8")
        .end(done);
    });
  });

  describe("serveUserDetails", () => {
    it("should provide the user details", (_, done) => {
      const app = createApp();

      request(app)
        .get("/user-details")
        .expect(200)
        .expect("content-type", "application/json; charset=utf-8")
        .end(done);
    });
  });
});
