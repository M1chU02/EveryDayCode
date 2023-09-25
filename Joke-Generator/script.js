function generateJoke() {
  const url = "https://v2.jokeapi.dev/joke/Any";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const jokeEl = document.getElementById("joke");
      console.log(data);
      if (data.type == "twopart") {
        let setup = data.setup;
        let delivery = data.delivery;
        jokeEl.innerText = "-" + setup + "\n" + "-" + delivery;
      } else if (data.type == "single") {
        let joke = data.joke;
        jokeEl.innerText = joke;
      }
    });
}
