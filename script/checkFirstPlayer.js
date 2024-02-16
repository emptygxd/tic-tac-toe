import {
  CELLS,
  PLAYER_1_TURN,
  PLAYER_2_TURN,
  PLAYER_TURN_OUTPUT,
  MESSAGE_PLAYER_1,
  MESSAGE_PLAYER_2,
} from "./constants.js";
import { checkDraw, checkWin } from "./checkState.js";
import { endGame } from "./cellClick.js";

const p1Score = document.getElementById("p1Score");
const p2Score = document.getElementById("p2Score");
const messageDraw = "Draw!";

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
      p1Score.innerText = parseInt(p1Score.innerText) + 1;
      return endGame(MESSAGE_PLAYER_1);
    } else if (checkDraw()) {
      endGame(messageDraw);
    } else {
      PLAYER_TURN_OUTPUT.innerText = PLAYER_2_TURN;
    }
    return true;
  } else {
    let player2 = getPlayerCells(player);

    if (checkWin(player2)) {
      endGame(MESSAGE_PLAYER_2);
      p2Score.innerText = parseInt(p2Score.innerText) + 1;
    } else if (checkDraw()) {
      endGame(messageDraw);
    } else {
      PLAYER_TURN_OUTPUT.innerText = PLAYER_1_TURN;
    }
  }
}
