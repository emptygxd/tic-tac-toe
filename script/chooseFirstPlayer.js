const crossButton = document.getElementById("cross__button");
const circleButton = document.getElementById("circle__button");
const robotButton = document.getElementById("robot__button");

crossButton.addEventListener("click", () => {
  localStorage.setItem("firstPlayer", "cross");
  localStorage.setItem("bot", "no");

  window.location = "./game.html";
});

circleButton.addEventListener("click", () => {
  localStorage.setItem("firstPlayer", "circle");
  localStorage.setItem("bot", "no");

  window.location = "./game.html";
});

robotButton.addEventListener("click", () => {
  localStorage.setItem("firstPlayer", "circle");
  localStorage.setItem("bot", "yes");

  window.location = "./game.html";
});
