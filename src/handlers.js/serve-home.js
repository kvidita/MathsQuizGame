const serveAuthenticationDetails = (req, res) => {
  const loginDetails = { userName: "vidita", login: true };
  res.json(loginDetails);
};

module.exports = {
  serveAuthenticationDetails,
};
