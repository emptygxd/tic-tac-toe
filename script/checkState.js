import { WIN_CONDITION, CELLS } from "./constants.js";

export function checkWin(data) {
  for (let i in WIN_CONDITION) {
    let win = true;
    for (let j in WIN_CONDITION[i]) {
      let id = WIN_CONDITION[i][j];

      let ind = data.indexOf(id);

      if (ind == -1) {
        win = false;
      }
    }
    if (win) return true;
  }
  return false;
}

export function checkDraw() {
  let k = 0;
  CELLS.forEach((element) => {
    if (
      element.classList.contains("cross") ||
      element.classList.contains("circle")
    ) {
      k++;
    }
  });
  if (k === 9) {
    return true;
  } else {
    return false;
  }
}
