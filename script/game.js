import {
  FIELD,
  PLAYER_TURN_OUTPUT,
  PLAYER_1_TURN,
  CELLS,
  TIMER,
} from "./constants.js";
import { cellClick, setFirstPlayer } from "./cellClick.js";
import { stopTimer } from "./helper/helperFunction.js";

const resetButton = document.getElementById("reset");
const turboButton = document.getElementById("turbo");
const turboImg = document.getElementById("turbo__img");

function startGame() {
  stopTimer();
  CELLS.forEach((element) => {
    element.removeAttribute("class");
    element.classList.add("cell");
  });
  setFirstPlayer();
  PLAYER_TURN_OUTPUT.innerText = PLAYER_1_TURN;
  FIELD.addEventListener("click", cellClick);
}

turboButton.addEventListener("click", () => {
  const turbo = TIMER.classList.contains("turbo");
  turboImg.src = turbo ? "./assets/thunder.png" : "./assets/thunder-active.png";
  TIMER.innerText = turbo ? 5 : 3;
  TIMER.classList.toggle("turbo");
});

startGame();
resetButton.addEventListener("click", startGame);
