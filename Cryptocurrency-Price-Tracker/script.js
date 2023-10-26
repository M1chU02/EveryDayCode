document.addEventListener("DOMContentLoaded", () => {
  const cryptoList = document.querySelector(".crypto-list");

  const apiKey = "CG-cBRL9C2okJUmRdmYfMFo9HPJ";
  const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple&vs_currencies=usd`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      for (const crypto in data) {
        const cryptoCard = document.createElement("div");
        cryptoCard.className = "crypto-card";

        const name = document.createElement("div");
        name.textContent = crypto;
        cryptoCard.appendChild(name);

        const price = document.createElement("div");
        price.textContent = `$${data[crypto].usd}`;
        cryptoCard.appendChild(price);

        cryptoList.appendChild(cryptoCard);
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
