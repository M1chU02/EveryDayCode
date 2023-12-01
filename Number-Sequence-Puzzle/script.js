function checkSequence() {
  const userInput = document.getElementById("sequence-input").value;
  const sequence = [1, 3, 5, 7, 9, 11, 13]; // Example sequence - you can customize this

  const userAnswers = userInput
    .split(",")
    .map((num) => parseInt(num.trim(), 10));

  if (arraysEqual(userAnswers, sequence)) {
    document.getElementById("result").innerText = "Correct! Well done!";
    document.getElementById("wrong").innerText = "";
  } else {
    document.getElementById("wrong").innerText = "Wrong! Try again.";
    document.getElementById("result").innerText = "";
  }
}

function arraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}
