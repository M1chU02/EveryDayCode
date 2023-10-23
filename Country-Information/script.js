document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("country-form");
  const select = document.getElementById("country");
  const info = document.getElementById("country-info");
  const flag = document.getElementById("country-flag");
  const population = document.getElementById("country-population");
  const capital = document.getElementById("country-capital");

  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      const sortedCountries = data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );

      sortedCountries.forEach((country) => {
        const option = document.createElement("option");
        option.text = country.name.common;
        option.value = country.cca2;
        select.appendChild(option);
      });
    });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const selectedCountryCode = select.value;

    fetch(`https://restcountries.com/v3.1/alpha/${selectedCountryCode}`)
      .then((response) => response.json())
      .then((data) => {
        const countryData = data[0];
        flag.src = countryData.flags.png;
        population.textContent = countryData.population.toLocaleString();
        capital.textContent = countryData.capital[0];
        info.classList.remove("hidden");
      });
  });
});
