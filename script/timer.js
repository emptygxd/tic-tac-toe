import {
  TIMER,
  MESSAGE_PLAYER_1,
  MESSAGE_PLAYER_2,
  TURBO,
  TURBO_IMG,
} from "./constants.js";
import { endGame } from "./cellClick.js";

export function stopTimer() {
  clearInterval(interval);
  if (!TIMER.classList.contains("turbo")) {
    TIMER.innerText = 5;
  } else {
    TIMER.innerText = 3;
  }
}

TURBO.addEventListener("click", () => {
  if (TIMER.classList.contains("turbo")) {
    TURBO_IMG.src = "./assets/thunder.png";
    TIMER.innerText = 5;
  } else {
    TURBO_IMG.src = "./assets/thunder-active.png";
    TIMER.innerText = 3;
  }
  TIMER.classList.toggle("turbo");
});

function count(player) {
  if (!(parseInt(TIMER.innerText) - 1 < 0)) {
    TIMER.innerText = parseInt(TIMER.innerText) - 1;
  } else {
    if (player === localStorage.getItem("firstPlayer")) {
      endGame(MESSAGE_PLAYER_2);
    } else {
      endGame(MESSAGE_PLAYER_1);
    }
    stopTimer();
  }
}

let interval;
export function startTimer(player) {
  stopTimer();

  interval = setInterval(count, 1000, player);
}
