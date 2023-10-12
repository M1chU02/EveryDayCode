const board = document.querySelector(".board");
const cells = [];
const currentPlayer = document.getElementById("current-player");
const restartButton = document.getElementById("restart-button");

// Create board
for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.setAttribute("id", i);
  cell.addEventListener("click", handleClick, { once: true });
  cells.push(cell);
  board.appendChild(cell);
}

let gameActive = true;

function handleClick(e) {
  const cell = e.target;
  const id = cell.getAttribute("id");
  cell.textContent = currentPlayer.textContent;
  cells[id].removeEventListener("click", handleClick);

  if (checkWin(currentPlayer.textContent)) {
    alert(`Player ${currentPlayer.textContent} wins!`);
    gameActive = false;
  } else if (isDraw()) {
    alert("It's a draw!");
    gameActive = false;
  }

  currentPlayer.textContent = currentPlayer.textContent === "X" ? "O" : "X";
}

function checkWin(player) {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let win of wins) {
    if (win.every((cell) => cells[cell].textContent === player)) {
      win.forEach((cell) => cells[cell].classList.add("winner"));
      return true;
    }
  }

  return false;
}

function isDraw() {
  return [...cells].every((cell) => cell.textContent !== "");
}

restartButton.addEventListener("click", () => {
  location.reload();
});
