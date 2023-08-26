const { describe, it } = require("node:test");
const assert = require("assert");
const request = require("supertest");
const { createApp } = require("../src/create-app");

describe("app", () => {
  describe("home-page", () => {
    it("should serve the home page", (_, done) => {
      const app = createApp();

      request(app)
        .get("/")
        .expect(200)
        .expect("content-type", "text/html; charset=UTF-8")
        .end(done);
    });
  });
});
