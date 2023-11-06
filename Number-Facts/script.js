const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", randomFact);

function randomFact() {
  const url = "http://numbersapi.com/random/trivia?json";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const resaultP = document.getElementById("resault");
      resaultP.innerText = data.text;
    });
}
