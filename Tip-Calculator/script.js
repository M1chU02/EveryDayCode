function calculateTip() {
  var billAmount = parseFloat(document.getElementById("bill-amount").value);
  var tipPercentage = parseFloat(
    document.getElementById("tip-percentage").value
  );

  if (isNaN(billAmount) || isNaN(tipPercentage)) {
    alert("Please enter valid numbers.");
    return;
  }

  var tipAmount = (billAmount * tipPercentage) / 100;
  var totalBill = billAmount + tipAmount;

  document.getElementById("tip-amount").textContent = tipAmount.toFixed(2);
  document.getElementById("total-bill").textContent = totalBill.toFixed(2);
}
