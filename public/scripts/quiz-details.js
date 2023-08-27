const renderUserDetails = ({ userName, matchPlayed, score }) => {
  const userDetailsSection = document.querySelector("#user-details");

  const nameElement = document.createElement("div");
  nameElement.innerText = `User: ${userName}`;
  const matchStatElement = document.createElement("div");
  matchStatElement.innerText = `Match Played: ${matchPlayed}`;
  const scoreElement = document.createElement("div");
  scoreElement.innerText = `Score: ${score}`;

  userDetailsSection.append(nameElement, matchStatElement, scoreElement);
  console.log(userName, matchPlayed, score);
};

const manageQuiz = () => {
  fetch("/user-details")
    .then((res) => res.json())
    .then(renderUserDetails);
};

const main = () => {
  window.onload = manageQuiz;
};

main();
