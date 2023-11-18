const API = "BKew9bocN2pS3QAAC0QHyw==Tt6fLkzbBbWzwglu";
const resaultEl = document.getElementById("resault");
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", search);
const form = document.getElementById("form");
form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    search();
  }
});

function search() {
  let inputValue = document.getElementById("word").value;
  if (inputValue != "") {
    const word = inputValue;
    let options = {
      method: "GET",
      headers: { "x-api-key": API },
    };
    let url = "https://api.api-ninjas.com/v1/thesaurus?word=" + word;
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        resaultEl.innerHTML =
          "<ul><li>" +
          data.synonyms[0] +
          "</li><li>" +
          data.synonyms[1] +
          "</li><li>" +
          data.synonyms[2] +
          "</li></ul>";
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  } else {
    document.getElementById("word").value = "";
  }
}
