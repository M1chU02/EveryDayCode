document.addEventListener("DOMContentLoaded", function () {
  const chessboard = document.getElementById("chessboard");

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement("div");
      square.classList.add("square", (row + col) % 2 === 0 ? "white" : "black");
      square.dataset.row = row;
      square.dataset.col = col;
      chessboard.appendChild(square);
    }
  }

  const pieces = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    Array(8).fill(""),
    Array(8).fill(""),
    Array(8).fill(""),
    Array(8).fill(""),
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
  ];

  pieces.forEach((row, rowIndex) => {
    row.forEach((piece, colIndex) => {
      if (piece !== "") {
        const chessPiece = document.createElement("div");
        chessPiece.classList.add("piece", "draggable");
        chessPiece.innerHTML = piece;
        chessPiece.setAttribute("draggable", true);
        chessPiece.addEventListener("dragstart", handleDragStart);
        chessPiece.addEventListener("dragend", handleDragEnd);
        chessboard
          .querySelector(`[data-row="${rowIndex}"][data-col="${colIndex}"]`)
          .appendChild(chessPiece);
      }
    });
  });

  let draggedPiece = null;

  function handleDragStart(event) {
    draggedPiece = event.target;
    event.target.classList.add("dragging");
  }

  function handleDragEnd() {
    draggedPiece.classList.remove("dragging");
    draggedPiece = null;
  }

  chessboard.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  chessboard.addEventListener("drop", function (event) {
    event.preventDefault();

    if (draggedPiece) {
      const dropTarget = event.target.closest(".square");
      if (dropTarget) {
        dropTarget.appendChild(draggedPiece);
      }
    }
  });
});
