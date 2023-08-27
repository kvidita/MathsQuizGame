const serveQuizPage = (req, res) => {
  console.log("serve quiz called");
  res.sendFile(process.env.PWD + "/public/html/quiz-page.html");
};

module.exports = { serveQuizPage };
