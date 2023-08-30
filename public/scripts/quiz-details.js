const renderQuiz = ({ operand1, operand2, operator }) => {
  const quizSectionElement = document.querySelector("#quiz");
  const quizElement = document.createElement("div");

  //form to submit the answer
  const answerForm = document.createElement("form");
  const answerLabel = document.createElement("label");
  const answerArea = document.createElement("input");

  answerForm.action = "/answer";
  answerForm.method = "post";
  answerLabel.for = "ans";
  answerLabel.class = "ans";
  answerArea.type = "number";
  answerArea.required = true;
  answerArea.placeholder = "answer";
  answerArea.id = "ans";

  quizElement.innerText = `${operand1}\t${operator}\t${operand2}\t=\t?`;
  quizElement.classList.add("quiz");

  answerForm.append(answerLabel, answerArea);
  quizSectionElement.append(quizElement, answerForm);
};

const renderUserDetails = ({ userName, matchPlayed, score }) => {
  const userDetailsSection = document.querySelector("#user-details");

  const nameElement = document.createElement("div");
  nameElement.innerText = `User: ${userName}`;
  const matchStatElement = document.createElement("div");
  matchStatElement.innerText = `Match Played: ${matchPlayed}`;
  const scoreElement = document.createElement("div");
  scoreElement.innerText = `Score: ${score}`;

  userDetailsSection.append(nameElement, matchStatElement, scoreElement);
};

const manageQuiz = () => {
  fetch("/user-details")
    .then((res) => res.json())
    .then(renderUserDetails)
    .then(() => {
      fetch("/quiz")
        .then((res) => res.json())
        .then(renderQuiz);
    });
};

const main = () => {
  window.onload = manageQuiz;
};

main();
