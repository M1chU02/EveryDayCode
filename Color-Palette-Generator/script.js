function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generatePalette() {
  const colorPalette = document.getElementById("color-palette");
  colorPalette.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const color = generateRandomColor();
    const colorBox = document.createElement("div");
    colorBox.className = "color-box";
    colorBox.style.backgroundColor = color;
    colorBox.addEventListener("click", () => copyToClipboard(color));
    colorPalette.appendChild(colorBox);
  }
}

function copyToClipboard(text) {
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
  alert("Color copied to clipboard: " + text);
}

document
  .getElementById("generate-palette")
  .addEventListener("click", generatePalette);
