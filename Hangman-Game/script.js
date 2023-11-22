const words = ["javascript", "hangman", "developer", "programming", "computer"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const wordContainer = document.getElementById("word-container");
const incorrectCountElement = document.getElementById("incorrect-count");
const messageElement = document.getElementById("message");
const keyboardContainer = document.getElementById("keyboard");

let displayedWord = Array.from(selectedWord).map(() => "_");
wordContainer.textContent = displayedWord.join(" ");

let incorrectGuesses = 0;

function updateDisplayedWord() {
  wordContainer.textContent = displayedWord.join(" ");
}

function handleGuess(letter) {
  if (selectedWord.includes(letter)) {
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letter) {
        displayedWord[i] = letter;
      }
    }
    updateDisplayedWord();

    if (!displayedWord.includes("_")) {
      messageElement.textContent = "Congratulations! You guessed the word!";
    }
  } else {
    incorrectGuesses++;
    incorrectCountElement.textContent = incorrectGuesses;

    if (incorrectGuesses >= 6) {
      messageElement.textContent =
        "Game over! The correct word was: " + selectedWord;
    }
  }
}

for (let i = 65; i <= 90; i++) {
  const letter = String.fromCharCode(i);
  const button = document.createElement("button");
  button.textContent = letter;
  button.addEventListener("click", () => handleGuess(letter.toLowerCase()));
  keyboardContainer.appendChild(button);
}
