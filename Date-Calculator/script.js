document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculateButton");
  const startDateInput = document.getElementById("startDate");
  const endDateInput = document.getElementById("endDate");
  const resultDiv = document.getElementById("result");

  calculateButton.addEventListener("click", function () {
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);

    if (isNaN(startDate) || isNaN(endDate)) {
      resultDiv.textContent = "Please enter valid dates.";
    } else {
      const timeDifference = endDate - startDate;
      const millisecondsInDay = 1000 * 60 * 60 * 24;
      const days = Math.floor(timeDifference / millisecondsInDay);
      const months = Math.floor(days / 30.44); // Average days per month
      const years = Math.floor(months / 12);

      resultDiv.textContent = `Duration: ${years} years, ${
        months % 12
      } months, ${days} days`;
    }
  });
});
