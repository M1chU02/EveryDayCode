const diceContainer = document.getElementById("diceContainer");
const sides = 6;

function rollDice() {
  const numDice = parseInt(document.getElementById("numDice").value);
  if (numDice < 1) {
    alert("Please enter a valid number of dice.");
    return;
  }

  document.querySelector("button").disabled = true;

  const maxRolls = 10;
  const rollInterval = 100;
  const diceValues = [];

  rollWithAnimation(numDice, maxRolls, rollInterval, diceValues)
    .then((resultValues) => {
      displayDiceValues(resultValues);
      document.querySelector("button").disabled = false;
    })
    .catch((error) => {
      console.error("Error:", error);
      document.querySelector("button").disabled = false;
    });
}

function rollWithAnimation(numDice, maxRolls, rollInterval, diceValues) {
  return new Promise((resolve, reject) => {
    let rolls = 0;
    const rollIntervalId = setInterval(() => {
      diceContainer.innerHTML = "";

      for (let i = 0; i < numDice; i++) {
        let random = Math.floor(Math.random() * sides) + 1;
        diceValues[i] = random;
        const diceDiv = document.createElement("div");
        diceDiv.className = "dice";
        const diceImg = document.createElement("img");
        diceImg.className = "diceImg";
        diceImg.src = `/Dice-Roller/img/inverted-dice-${random}.png`;
        diceDiv.appendChild(diceImg);
        diceContainer.appendChild(diceDiv);
      }

      rolls++;
      if (rolls >= maxRolls) {
        clearInterval(rollIntervalId);
        resolve(diceValues);
      }
    }, rollInterval);
  });
}

function displayDiceValues(values) {
  const resultContainer = document.getElementById("resultContainer");

  resultContainer.innerHTML = "";

  const resultDiv = document.createElement("div");
  resultDiv.className = "result";
  resultDiv.textContent = "Result: " + values.join(", ");
  resultContainer.appendChild(resultDiv);
}
