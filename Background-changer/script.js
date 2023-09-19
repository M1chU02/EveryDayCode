const submitBtn = document.getElementById("submitBtn");
const randomBtn = document.getElementById("randomBtn");

function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

submitBtn.addEventListener("click", () => {
  let color = document.getElementById("colorpicker").value;
  document.body.style.backgroundColor = color;
});

randomBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
});
