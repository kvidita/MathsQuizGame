const serveHome = (req, res) => {
  res.sendFile(process.env.PWD + "/public/html/home-page.html");
};

const serveAuthenticationDetails = (req, res) => {
  const loginDetails = { userName: "vidita", login: true };
  res.json(loginDetails);
};

const serveHomeScript = (req, res) => {
  res.sendFile(process.env.PWD + "/public/scripts/home-page.js");
};

module.exports = { serveHome, serveAuthenticationDetails, serveHomeScript };
