const getRandomNumber = () => {
  return Math.round(Math.random() * 10);
};

const getRandomOperator = () => {
  const operators = ["-", "+", "/", "*"];
  return operators[getRandomNumber() % operators.length];
};

const serveQuiz = (req, res) => {
  const operand1 = getRandomNumber();
  const operand2 = getRandomNumber();
  const operator = getRandomOperator();
  const { players } = req.app;

  res.json({ operand1, operand2, operator });
  // players.questionEntity({ operand1, operand2, operator });
};

module.exports = { serveQuiz };
