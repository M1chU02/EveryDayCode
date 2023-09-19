function generate() {
  let greetingEl = document.getElementById("greeting");
  let languageEl = document.getElementById("language");
  let typeEl = document.getElementById("type");
  const table = document.querySelector("table");
  const url = "https://www.greetingsapi.com/random";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      table.style.display = "flex";
      greetingEl.innerText = data.greeting;
      languageEl.innerText = data.language;
      typeEl.innerText = data.type;
    });
}
