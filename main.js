const { createApp } = require("./src/create-app");
const Players = require("../MathsQuizGame/src/models/players");

const main = () => {
  const port = 8040;
  const players = new Players();
  const app = createApp();

  app.players = players;
  app.listen(port, () => console.log(`server listening on port ${port}`));
};

main();
