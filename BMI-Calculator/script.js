function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height)) {
    alert("Please enter valid numbers for weight and height.");
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  document.getElementById("result").textContent =
    "Your BMI is: " + bmi.toFixed(2);
}
