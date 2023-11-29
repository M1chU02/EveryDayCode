let totalIncome = parseFloat(localStorage.getItem("totalIncome")) || 0;
let totalExpense = parseFloat(localStorage.getItem("totalExpense")) || 0;

updateSummary();

function track() {
  const type = document.getElementById("type").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  if (type === "income") {
    totalIncome += amount;
  } else {
    totalExpense += amount;
  }

  updateLocalStorage();
  updateSummary();
  clearForm();
}

function resetData() {
  totalIncome = 0;
  totalExpense = 0;
  updateLocalStorage();
  updateSummary();
}

function updateLocalStorage() {
  localStorage.setItem("totalIncome", totalIncome.toFixed(2));
  localStorage.setItem("totalExpense", totalExpense.toFixed(2));
}

function updateSummary() {
  document.getElementById("totalIncome").textContent = totalIncome.toFixed(2);
  document.getElementById("totalExpense").textContent = totalExpense.toFixed(2);
  document.getElementById("balance").textContent = (
    totalIncome - totalExpense
  ).toFixed(2);
}

function clearForm() {
  document.getElementById("finance-form").reset();
}
