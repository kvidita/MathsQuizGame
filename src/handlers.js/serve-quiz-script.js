const serveQuizScript = (req, res) => {
  res.sendFile(process.env.PWD + "/public/scripts/quiz-details.js");
};

module.exports = { serveQuizScript };
