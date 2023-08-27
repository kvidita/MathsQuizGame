const express = require("express");
const {
  serveHome,
  serveAuthenticationDetails,
  serveHomeScript,
} = require("./handlers.js/serve-home");
const { serveQuizPage } = require("./handlers.js/serve-quiz");
const { serveUserDetails } = require("./handlers.js/serve-user-details");
const { serveQuizScript } = require("./handlers.js/serve-quiz-script");

const logger = (req, res, next) => {
  console.log(req.url, req.path, req.method);
  next();
};

const createApp = () => {
  const app = express();

  app.use(logger);
  app.get("/", serveHome);
  app.get("/quiz-page", serveQuizPage);
  app.get("/home-page", serveHomeScript);
  app.get("/user-details", serveUserDetails);
  app.get("/quiz-details", serveQuizScript);
  app.get("/user-authentication", serveAuthenticationDetails);

  app.use(express.static("public"));

  return app;
};

module.exports = { createApp };
