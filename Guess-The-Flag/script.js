const apiUrl = "https://restcountries.com/v3.1/all";
const flagContainer = document.getElementById("flag");
const optionsContainer = document.getElementById("options");
const resultContainer = document.getElementById("result");
let flagsData = [];

function shuffleFlags() {
  flagsData.sort(() => Math.random() - 0.5);
}

async function fetchFlags() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    flagsData = data.map((item) => ({
      flagSrc: item.flags.png,
      country: item.name.common,
    }));
    shuffleFlags();
    nextFlag();
  } catch (error) {
    console.error("Error fetching flags:", error);
  }
}

function nextFlag() {
  const currentFlag = flagsData.pop();
  flagContainer.src = currentFlag.flagSrc;

  optionsContainer.innerHTML = "";

  const correctIndex = Math.floor(Math.random() * 3);

  for (let i = 0; i < 3; i++) {
    const button = document.createElement("button");
    if (i === correctIndex) {
      button.textContent = currentFlag.country;
      button.addEventListener("click", () =>
        checkAnswer(true, currentFlag.country)
      );
    } else {
      const randomFlag =
        flagsData[Math.floor(Math.random() * flagsData.length)];
      button.textContent = randomFlag.country;
      button.addEventListener("click", () =>
        checkAnswer(false, currentFlag.country)
      );
    }
    optionsContainer.appendChild(button);
  }
}

function checkAnswer(isCorrect, correctCountry) {
  if (isCorrect) {
    resultContainer.textContent = "Correct!";
  } else {
    resultContainer.textContent = `Incorrect. The correct answer is ${correctCountry}.`;
  }

  setTimeout(() => {
    resultContainer.textContent = "";
    if (flagsData.length > 0) {
      nextFlag();
    } else {
      resultContainer.textContent = "Game Over. You have completed all flags.";
    }
  }, 2000);
}

fetchFlags();
