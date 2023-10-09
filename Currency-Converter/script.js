const apiKey = "fca_live_JmWGHmhOfYZ3CQHlPZbdV85SMzsFEzJj4x2CyQ3X";
const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const fromCurrencySelect = document.getElementById("fromCurrency");
    const toCurrencySelect = document.getElementById("toCurrency");

    for (const currency in data.data) {
      const option1 = document.createElement("option");
      option1.value = currency;
      option1.text = currency;
      fromCurrencySelect.appendChild(option1);

      const option2 = document.createElement("option");
      option2.value = currency;
      option2.text = currency;
      toCurrencySelect.appendChild(option2);
    }

    fromCurrencySelect.value = "EUR";
    toCurrencySelect.value = "USD";

    const convertButton = document.getElementById("convert");
    const resultDiv = document.getElementById("result");

    convertButton.addEventListener("click", () => {
      const amount = parseFloat(document.getElementById("amount").value);
      const fromCurrency = fromCurrencySelect.value;
      const toCurrency = toCurrencySelect.value;

      if (fromCurrency === toCurrency) {
        resultDiv.innerHTML = "Please select different currencies.";
        return;
      }

      const fromCurrencyValue = data.data[fromCurrency];
      const toCurrencyValue = data.data[toCurrency];

      if (fromCurrencyValue && toCurrencyValue) {
        const convertedAmount = (amount / fromCurrencyValue) * toCurrencyValue;

        resultDiv.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
          2
        )} ${toCurrency}`;
      } else {
        resultDiv.innerHTML = "Currency data not available.";
      }
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
