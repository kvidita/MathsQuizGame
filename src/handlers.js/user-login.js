const Player = require("../models/player");

const userLogin = (req, res) => {
  const { Name, Password } = req.body;
  const player = new Player(Name, Password);
  console.log(player.name, player.password);
  res.cookie("name", Name);
  res.end();
};

module.exports = { userLogin };
