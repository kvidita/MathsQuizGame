const express = require("express");

const main = () => {
  const port = 8040;

  const app = express();
  app.listen(port, () => console.log(`server listening on port ${port}`));
};

main();
