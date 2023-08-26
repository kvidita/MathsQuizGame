const express = require("express");
const { serveHome } = require("./handlers.js/serve-home");

const logger = (req, res, next) => {
  console.log(req.url, req.path, req.method);
  next();
};

const createApp = () => {
  const app = express();

  app.use(logger);
  app.get("/", serveHome);

  return app;
};

module.exports = { createApp };
