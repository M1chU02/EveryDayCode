async function generateQuote() {
  const url = "https://api.quotable.io/random";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("quote").textContent = data.content;
      document.getElementById("author").textContent = data.author;
    });
}
