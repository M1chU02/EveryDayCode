let words = ["javascript", "html", "css", "developer", "programming", "code"];
let scrambledWord = "";
let timer;

function startGame() {
  document.getElementById("result").innerText = "";
  document.getElementById("user-input").value = "";

  scrambledWord = words[Math.floor(Math.random() * words.length)];

  let scrambledArray = scrambledWord.split("");
  for (let i = scrambledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [scrambledArray[i], scrambledArray[j]] = [
      scrambledArray[j],
      scrambledArray[i],
    ];
  }
  const scrambledDisplay = scrambledArray.join("");

  document.getElementById("word-display").innerText = scrambledDisplay;

  let seconds = 10;
  timer = setInterval(function () {
    document.getElementById("time").innerText = seconds;
    if (seconds === 0) {
      endGame();
    } else {
      seconds--;
    }
  }, 1000);
}

function checkAnswer() {
  const userInput = document.getElementById("user-input").value.toLowerCase();
  if (userInput === scrambledWord) {
    document.getElementById("result").innerText = "Correct!";
    endGame();
  } else {
    document.getElementById("result").innerText = "Incorrect. Try again.";
  }
}

function endGame() {
  clearInterval(timer);
  document.getElementById("word-display").innerText = "";
  document.getElementById("timer").innerText = "";
  document.getElementById("user-input").value = "";
  document.getElementById("result").innerText = "Game Over!";
}
