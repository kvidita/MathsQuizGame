const serveQuizPage = (req, res) => {
  res.sendFile(process.env.PWD + "/public/html/quiz-page.html");
};

module.exports = { serveQuizPage };
