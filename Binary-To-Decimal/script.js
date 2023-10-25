const inputElement = document.getElementById("input");
const convertButton = document.getElementById("convertButton");
const resultElement = document.getElementById("result");

convertButton.addEventListener("click", () => {
  const inputValue = inputElement.value.trim();
  if (/^[01]+$/.test(inputValue)) {
    const decimalValue = parseInt(inputValue, 2);
    resultElement.innerText = `Decimal: ${decimalValue}`;
  } else if (/^\d+$/.test(inputValue)) {
    resultElement.innerText = `Binary: ${parseInt(inputValue, 10).toString(2)}`;
  } else {
    resultElement.innerText =
      "Invalid input. Please enter a valid binary or decimal value.";
  }
});
