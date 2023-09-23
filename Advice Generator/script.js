function generateTip() {
  const adviceEl = document.getElementById("tip");
  const url = "https://api.adviceslip.com/advice";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const advice = data.slip.advice;
      adviceEl.textContent = advice;
    });
}
