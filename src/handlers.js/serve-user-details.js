const serveUserDetails = (req, res) => {
  res.json({ userName: "vidita", matchPlayed: 2, score: 10 });
};

module.exports = { serveUserDetails };
