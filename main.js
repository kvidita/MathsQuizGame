const express = require("express");
const { createApp } = require("./src/create-app");

const main = () => {
  const port = 8040;

  const app = createApp();
  app.listen(port, () => console.log(`server listening on port ${port}`));
};

main();
