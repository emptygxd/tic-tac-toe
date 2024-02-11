import {
  CELLS,
  PLAYER_1_TURN,
  PLAYER_2_TURN,
  PLAYER_TURN_OUTPUT,
  MESSAGE_DRAW,
  MESSAGE_PLAYER_1,
  MESSAGE_PLAYER_2,
  P_1_SCORE,
  P_2_SCORE,
} from "./constants.js";
import { checkDraw, checkWin } from "./checkState.js";
import { endGame } from "./cellClick.js";

export function getPlayerCells(figure) {
  const arr = [];
  CELLS.forEach((element) => {
    if (element.classList.contains(figure)) {
      arr.push(parseInt(element.id));
    }
  });
  return arr;
}

export function checkFirstPlayer(player) {
  if (player === localStorage.getItem("firstPlayer")) {
    let player1 = getPlayerCells(player);

    if (checkWin(player1)) {
      P_1_SCORE.innerText = parseInt(P_1_SCORE.innerText) + 1;
      return endGame(MESSAGE_PLAYER_1);
    } else if (checkDraw()) {
      endGame(MESSAGE_DRAW);
    } else {
      PLAYER_TURN_OUTPUT.innerText = PLAYER_2_TURN;
    }
    return true;
  } else {
    let player2 = getPlayerCells(player);

    if (checkWin(player2)) {
      endGame(MESSAGE_PLAYER_2);
      P_2_SCORE.innerText = parseInt(P_2_SCORE.innerText) + 1;
    } else if (checkDraw()) {
      endGame(MESSAGE_DRAW);
    } else {
      PLAYER_TURN_OUTPUT.innerText = PLAYER_1_TURN;
    }
  }
}
