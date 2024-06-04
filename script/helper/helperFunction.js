import { TIMER, MESSAGE_PLAYER_1, MESSAGE_PLAYER_2 } from "../constants.js";
import { endGame } from "../cellClick.js";

function count(player) {
  let seconds = parseInt(TIMER.innerText) - 1;
  if (!(seconds < 0)) {
    TIMER.innerText = seconds;
  } else if (player === localStorage.getItem("firstPlayer")) {
    endGame(MESSAGE_PLAYER_1);
    p1Score.innerText = parseInt(p1Score.innerText) + 1;
    stopTimer();
  } else {
    endGame(MESSAGE_PLAYER_2);
    p2Score.innerText = parseInt(p2Score.innerText) + 1;
    stopTimer();
  }
}

export function stopTimer() {
  clearInterval(interval);
  const timer = TIMER.classList.contains("turbo");
  TIMER.innerText = timer ? 3 : 5;
}

let interval;
export function startTimer(player) {
  stopTimer();
  interval = setInterval(count, 1000, player);
}
