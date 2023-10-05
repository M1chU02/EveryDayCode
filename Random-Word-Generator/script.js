function generateWord() {
  const wordEl = document.getElementById("word");
  const url = "https://random-word-api.herokuapp.com/word";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const word = data;
      wordEl.textContent = word;
    });
}
