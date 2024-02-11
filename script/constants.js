export const FIELD = document.getElementById("game__field");
export const CELLS = document.querySelectorAll(".cell");
export const PLAYER_TURN_OUTPUT = document.getElementById("turn");
export const RESET_BUTTON = document.getElementById("reset");
export const CROSS_BUTTON = document.getElementById("cross__button");
export const CIRCLE_BUTTON = document.getElementById("circle__button");
export const ROBOR_BUTTON = document.getElementById("robot__button");
export const TIMER = document.getElementById("timer");
export const TURBO = document.getElementById("turbo");
export const TURBO_IMG = document.getElementById("turbo__img");
export const P_1_SCORE = document.getElementById("p1Score");
export const P_2_SCORE = document.getElementById("p2Score");
export const PLAYER_1_TURN = "Player 1’s Turn";
export const PLAYER_2_TURN = "Player 2’s Turn";
export const MESSAGE_PLAYER_1 = "1st player won";
export const MESSAGE_PLAYER_2 = "2nd player won";
export const MESSAGE_DRAW = "Draw!";
export const WIN_CONDITION = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [1, 5, 9],
];
