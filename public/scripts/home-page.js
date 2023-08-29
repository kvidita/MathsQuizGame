const addLogoutPlayEvent = (loginButton, playButton) => {
  loginButton.onclick = () => {
    console.log("login button clicked");
    fetch("/html/login.html")
      .then((res) => res.url)
      .then((pageLocation) => {
        window.location.assign(pageLocation);
      });
  };

  playButton.onclick = () => {
    fetch("/html/login.html")
      .then((res) => res.url)
      .then((pageLocation) => {
        window.location.assign(pageLocation);
      });
  };
};

const handleLoggedOutPage = () => {
  const authenticationSection = document.querySelector("#loggin-state");
  const playSection = document.querySelector("#play");
  const playButton = document.createElement("input");
  playButton.id = "play-quiz";
  playButton.type = "button";
  playButton.value = "play quiz";
  playButton.classList.add("button");
  playButton.classList.add("play-button");

  const loginButton = document.createElement("input");
  loginButton.id = "login";
  loginButton.type = "button";
  loginButton.value = "login";
  loginButton.classList.add("button");

  addLogoutPlayEvent(loginButton, playButton);

  authenticationSection.append(loginButton);
  playSection.append(playButton);
  return;
};

const addLoginPlayEvent = (playButton) => {
  playButton.onclick = () => {
    fetch("/quiz-page")
      .then((res) => res.url)
      .then((pageLocation) => {
        window.location.assign(pageLocation);
      });
  };
};

const handleLoggedPage = () => {
  const authenticationSection = document.querySelector("#loggin-state");
  const playSection = document.querySelector("#play");
  const playButton = document.createElement("input");
  playButton.id = "play-quiz";
  playButton.type = "button";
  playButton.value = "play quiz";
  playButton.classList.add("button");
  playButton.classList.add("play-button");

  const logoutButton = document.createElement("input");
  logoutButton.id = "logout";
  logoutButton.type = "button";
  logoutButton.value = "logout";
  logoutButton.classList.add("button");

  addLoginPlayEvent(playButton);

  authenticationSection.append(logoutButton);
  playSection.append(playButton);
  console.log("user logged-in");
};

const manageAuthentication = () => {
  fetch("/user-authentication")
    .then((res) => res.json())
    .then((authenticationDetails) => {
      const { login } = authenticationDetails;
      if (login) {
        console.log(login);
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
