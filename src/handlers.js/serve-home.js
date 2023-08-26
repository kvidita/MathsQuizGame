const serveHome = (req, res) => {
  res.sendFile(process.env.PWD + "/public/html/home-page.html");
};

module.exports = { serveHome };
