function generateFact() {
  const factEl = document.getElementById("fact");
  const url = "https://catfact.ninja/fact?max_length=150";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const fact = data.fact;
      factEl.textContent = fact;
    });
}
