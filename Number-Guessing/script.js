let targetNumber;
let min;
let max;
let turns = 0;

function generateTarget() {
  min = parseInt(document.getElementById("min").value);
  max = parseInt(document.getElementById("max").value);

  if (isNaN(min) || isNaN(max) || min >= max) {
    displayDialogue("Please enter a valid range with min < max.", "#d66b94");
    return;
  }

  targetNumber = Math.floor(Math.random() * (max - min + 1) + min);
  turns = 0;
  displayDialogue("New game started.", "#97bd51");
}

function handleGuessInput() {
  let userGuessInput = document.getElementById("guess");
  let userGuess = parseInt(userGuessInput.value);

  if (isNaN(userGuess) || userGuess < min || userGuess > max) {
    displayDialogue(
      "Please enter a valid number within the specified range.",
      "#d66b94"
    );
    userGuessInput.value = "";
    return;
  }

  turns++;

  displayDialogue(`Your Guess: ${userGuess}`, "#5c6573");

  if (userGuess === targetNumber) {
    displayDialogue(
      `Congratulations! You guessed the correct number in ${turns} turns!`,
      "green"
    );
  } else {
    let hint =
      userGuess < targetNumber ? "Try a higher number." : "Try a lower number.";
    displayDialogue(`Computer's Hint: ${hint}`, "#97a0ad");
  }

  userGuessInput.value = "";
}

function displayDialogue(message, background) {
  const dialogueContainer = document.getElementById("previousEl");
  const dialogueElement = document.createElement("div");
  dialogueElement.style.backgroundColor = background;
  dialogueElement.classList.add("dialogueElement");
  dialogueElement.textContent = message;
  dialogueContainer.insertBefore(dialogueElement, dialogueContainer.firstChild);
  return;
}

function clearHints() {
  const dialogueContainer = document.getElementById("previousEl");
  dialogueContainer.innerHTML = "";
}

const rangeBtn = document.getElementById("rangeBtn");
rangeBtn.addEventListener("click", generateTarget);

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", clearHints);

const guessEl = document.getElementById("guess");
guessEl.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleGuessInput();
  }
});

const guessBtn = document.getElementById("guessBtn");
guessBtn.addEventListener("click", handleGuessInput);

generateTarget();
