const toNumber = (number) => +number;

const parseCookie = (reqCookies) => {
  const cookies = {};
  const rawCookies = reqCookies.split(";").join("").split(" ");
  console.log(rawCookies);

  rawCookies.forEach((cookie) => {
    [key, value] = cookie.split("=");
    cookies[key] = value;
  });

  return cookies;
};

const validateAnswer = (req, res) => {
  const answer = toNumber(req.body);

  const { playerId } = parseCookie(req.headers.cookie);
  const { players } = req.app;
  console.log(players.addScore, playerId);

  if (players.getPlayers().currentQuestionAnswer === answer) {
    players.addScore(playerId, 10);
    res.end();
    return;
  }

  players.addScore(playerId, 0);
  res.end();
};

module.exports = { validateAnswer };
