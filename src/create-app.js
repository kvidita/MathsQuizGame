const express = require("express");
const { serveAuthenticationDetails } = require("./handlers.js/serve-home");
const { serveUserDetails } = require("./handlers.js/serve-user-details");
const { serveQuiz } = require("./handlers.js/serve-quiz");
const { userLogin } = require("./handlers.js/user-login");

const logger = (req, res, next) => {
  console.log(req.url, req.path, req.method);
  next();
};

const createApp = () => {
  const app = express();

  app.use(logger);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.post("/login", userLogin);
  app.get("/quiz", serveQuiz);
  app.get("/user-details", serveUserDetails);
  app.get("/user-authentication", serveAuthenticationDetails);

  app.use(express.static("public"));

  return app;
};

module.exports = { createApp };
