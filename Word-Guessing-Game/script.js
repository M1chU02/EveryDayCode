const words = ["apple", "banana", "cherry", "grape", "orange"];
const hints = [
  "A fruit",
  "A fruit that's yellow when ripe",
  "A small, red fruit",
  "A small, round fruit",
  "A citrus fruit",
];

const wordIndex = Math.floor(Math.random() * words.length);
const secretWord = words[wordIndex];
const hint = hints[wordIndex];
const wordDisplay = document.getElementById("word-display");
const hintDisplay = document.getElementById("hint");
const guessInput = document.getElementById("guess-input");
const checkButton = document.getElementById("check-button");
const message = document.getElementById("message");

let hiddenWord = secretWord.replace(/./g, "*");
wordDisplay.textContent = hiddenWord;
hintDisplay.textContent = `Hint: ${hint}`;

checkButton.addEventListener("click", checkGuess);

function checkGuess() {
  const guess = guessInput.value.toLowerCase();

  if (guess === secretWord) {
    message.textContent = "Congratulations! You guessed the word!";
    message.style.color = "green";
    guessInput.disabled = true;
    checkButton.disabled = true;
  } else {
    message.textContent = "Try again!";
    message.style.color = "red";
    guessInput.value = "";
  }
}
