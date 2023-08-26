const handleLoggedOutPage = () => {
  return;
};

handleLoggedPage = () => {
  const authenticationSection = document.querySelector("#loggin-state");
  const playButton = document.createElement("input");
  playButton.id = "play-quiz";
  playButton.type = "button";
  playButton.value = "play quiz";
  playButton.class = "button";

  const logoutButton = document.createElement("input");
  logoutButton.id = "logout";
  logoutButton.type = "button";
  logoutButton.value = "logout";
  logoutButton.class = "button";

  authenticationSection.append(playButton, logoutButton);
  console.log("user logged-in");
};

const manageAuthentication = () => {
  console.log("manageAuthentication called");
  fetch("/user-authentication").then((res) => {
    return res.json();
  });
  fetch("/user-authentication")
    .then((res) => res.json())
    .then((authenticationDetails) => {
      const { login } = authenticationDetails;
      console.log(authenticationDetails);
      if (login) {
        handleLoggedPage();
        return;
      }

      handleLoggedOutPage();
    });
};

const main = () => {
  window.onload = manageAuthentication;
};

main();
