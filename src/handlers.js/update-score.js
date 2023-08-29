const updateScore = (req, res) => {
  console.log(req.body);
  res.writeHead(303, { location: "/html/quiz-page.html" });
  res.end();
};

module.exports = { updateScore };
