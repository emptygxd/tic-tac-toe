import { CELLS } from "./constants.js";
import { checkFirstPlayer } from "./checkFirstPlayer.js";

function getRandomCell() {
  const randArr = [];
  CELLS.forEach((element) => {
    if (
      !(
        element.classList.contains("cross") ||
        element.classList.contains("circle")
      )
    ) {
      randArr.push(element.id);
    }
  });

  return randArr[Math.floor(Math.random() * randArr.length)];
}

export function botMove() {
  let randomCell = getRandomCell();
  CELLS.forEach((element, index) => {
    if (element.id === randomCell) CELLS[index].classList.add("cross");
  });
  checkFirstPlayer("cross");
}
