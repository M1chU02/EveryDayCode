const boardEl = document.getElementById("board");
const turnsEl = document.getElementById("turnNum");
const restartBtn = document.getElementById("restartBtn");
restartBtn.addEventListener("click", restart);

let cardList = [
  "dino",
  "fish",
  "frog",
  "girraf",
  "octo",
  "peacock",
  "seahorse",
  "shark",
  "whale",
  "wolf",
];

let turns = 0;
let cards = [];
let cardSet;
let board = [];
let rows = 4;
let columns = 5;

var card1Selected;
var card2Selected;

window.onload = function () {
  shuffleCards();
  startGame();
};

function restart() {
  boardEl.innerHTML = "";
  turns = 0;
  cards = [];
  cardSet;
  board = [];
  card1Selected = "";
  card2Selected = "";
  shuffleCards();
  startGame();
}

function shuffleCards() {
  cardSet = cardList.concat(cardList);
  for (let i = 0; i < cardSet.length; i++) {
    let j = Math.floor(Math.random() * cardSet.length);
    let temp = cardSet[i];
    cardSet[i] = cardSet[j];
    cardSet[j] = temp;
  }
}

function startGame() {
  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      let cardImg = cardSet.pop();
      row.push(cardImg);

      let card = document.createElement("img");
      card.id = r.toString() + "-" + c.toString();
      card.src = "img/" + cardImg + ".png";
      card.classList.add("card");
      card.addEventListener("click", selectCard);
      boardEl.append(card);
    }
    board.push(row);
  }
  setTimeout(hideCards, 1000);
}

function hideCards() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let card = document.getElementById(r.toString() + "-" + c.toString());
      card.src = "img/back.png";
    }
  }
}

function selectCard() {
  if (this.src.includes("back")) {
    if (!card1Selected) {
      card1Selected = this;

      let coords = card1Selected.id.split("-");
      let r = parseInt(coords[0]);
      let c = parseInt(coords[1]);

      card1Selected.src = "img/" + board[r][c] + ".png";
    } else if (!card2Selected && this != card1Selected) {
      card2Selected = this;

      let coords = card2Selected.id.split("-");
      let r = parseInt(coords[0]);
      let c = parseInt(coords[1]);

      card2Selected.src = "img/" + board[r][c] + ".png";
      setTimeout(update, 1000);
    }
  }
}

function update() {
  if (card1Selected.src != card2Selected.src) {
    card1Selected.src = "img/back.png";
    card2Selected.src = "img/back.png";
    turns += 1;
    turnsEl.innerText = turns;
  }

  card1Selected = null;
  card2Selected = null;
}
