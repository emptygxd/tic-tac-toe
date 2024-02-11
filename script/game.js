import {
  FIELD,
  PLAYER_TURN_OUTPUT,
  PLAYER_1_TURN,
  CELLS,
  RESET_BUTTON,
} from "./constants.js";

import { cellClick, setFirstPlayer } from "./cellClick.js";
import { stopTimer } from "./timer.js";

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

startGame();
RESET_BUTTON.addEventListener("click", startGame);
