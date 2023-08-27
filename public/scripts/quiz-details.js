const renderQuiz = ({ operand1, operand2, operator }) => {
  const quizSectionElement = document.querySelector("#quiz");
  const quizElement = document.createElement("div");
  quizElement.innerText = `${operand1}\t${operator}\t${operand2}\t=\t?`;

  quizSectionElement.appendChild(quizElement);
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
