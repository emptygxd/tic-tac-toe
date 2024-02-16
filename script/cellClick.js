import { PLAYER_TURN_OUTPUT, FIELD } from "./constants.js";
import { startTimer, stopTimer } from "./helper/helperFunction.js";
import { checkFirstPlayer } from "./checkFirstPlayer.js";
import { botMove } from "./bot.js";

let gameState = true;
let player;

export function setFirstPlayer() {
  player = localStorage.getItem("firstPlayer");
}

export function endGame(message) {
  PLAYER_TURN_OUTPUT.innerText = message;
  FIELD.removeEventListener("click", cellClick);
  stopTimer();
  return false;
}

export function cellClick(e) {
  if (
    !(
      e.target.classList.contains("circle") ||
      e.target.classList.contains("cross") ||
      e.target.id === "game__field"
    )
  ) {
    startTimer(player);

    if (player === "circle") {
      e.target.classList.add("circle");
      gameState = checkFirstPlayer(player);

      player = "cross";
      if (gameState && localStorage.getItem("bot") === "yes") {
        botMove();
        player = "circle";
      }
    } else {
      e.target.classList.add("cross");

      checkFirstPlayer(player);
      player = "circle";
    }
  }
}
