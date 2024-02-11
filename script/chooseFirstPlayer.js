import { CROSS_BUTTON, CIRCLE_BUTTON, ROBOR_BUTTON } from "./constants.js";

CROSS_BUTTON.addEventListener("click", () => {
  localStorage.setItem("firstPlayer", "cross");
  localStorage.setItem("bot", "no");

  window.location = "./game.html";
});

CIRCLE_BUTTON.addEventListener("click", () => {
  localStorage.setItem("firstPlayer", "circle");
  localStorage.setItem("bot", "no");

  window.location = "./game.html";
});

ROBOR_BUTTON.addEventListener("click", () => {
  localStorage.setItem("firstPlayer", "circle");
  localStorage.setItem("bot", "yes");

  window.location = "./game.html";
});
