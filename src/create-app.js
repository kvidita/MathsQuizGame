const express = require("express");
const {
  serveHome,
  serveAuthenticationDetails,
  serveHomeScript,
} = require("./handlers.js/serve-home");

const logger = (req, res, next) => {
  console.log(req.url, req.path, req.method);
  next();
};

const createApp = () => {
  const app = express();

  app.use(logger);
  app.get("/", serveHome);
  app.get("/home-page", serveHomeScript);
  app.get("/user-authentication", serveAuthenticationDetails);

  return app;
};

module.exports = { createApp };
