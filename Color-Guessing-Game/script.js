function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

function randomRgbColor() {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);
  return `rgb(${r}, ${g}, ${b})`;
}

function pickRandomOption() {
  return Math.floor(Math.random() * 3) + 1;
}

function displayMessage(message, color) {
  const messageElement = document.getElementById("message");
  messageElement.textContent = message;
  messageElement.style.color = color;
}

function handleOptionClick(clickedOption, correctOption, correctColor) {
  if (clickedOption === correctOption) {
    displayMessage("Correct!", "green");
  } else {
    displayMessage("Wrong!", "red");
  }

  setTimeout(() => {
    displayMessage("");
    setupGame();
  }, 1000);
}

function setupGame() {
  const correctColor = randomRgbColor();
  document.getElementById(
    "colorDisplay"
  ).textContent = `RGB Color: ${correctColor}`;
  const randomOption = pickRandomOption();

  for (let i = 1; i <= 3; i++) {
    const button = document.getElementById(`option${i}`);
    const backgroundColor =
      i === randomOption ? correctColor : randomRgbColor();
    button.style.backgroundColor = backgroundColor;

    button.removeEventListener("click", button.clickHandler);

    button.clickHandler = () => {
      handleOptionClick(i, randomOption, correctColor);
    };

    button.addEventListener("click", button.clickHandler);
  }
}

function resetGame() {
  displayMessage("");
  setupGame();
}

document.getElementById("reset").addEventListener("click", resetGame);

setupGame();
