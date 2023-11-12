const quoteInput = document.getElementById("quote");
const backgroundSelect = document.getElementById("background");
const fontSelect = document.getElementById("font");
const generateButton = document.getElementById("generate");
const generatedImage = document.getElementById("generated-image");

generateButton.addEventListener("click", function () {
  const quote = quoteInput.value;
  const background = backgroundSelect.value;
  const font = fontSelect.value;

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = 600;
  canvas.height = 400;

  const backgroundImage = new Image();
  backgroundImage.src = background;
  backgroundImage.onload = function () {
    context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    context.font = `24px ${font}`;
    context.fillStyle = "#fff";
    context.textAlign = "center";

    const maxWidth = canvas.width - 40;
    const lineHeight = 30;
    const words = quote.split(" ");
    let line = "";
    let y = canvas.height / 2;

    for (const word of words) {
      const testLine = line + word + " ";
      const testWidth = context.measureText(testLine).width;

      if (testWidth > maxWidth) {
        context.fillText(line, canvas.width / 2, y);
        line = word + " ";
        y += lineHeight;
      } else {
        line = testLine;
      }
    }

    context.fillText(line, canvas.width / 2, y);

    generatedImage.src = canvas.toDataURL("image/jpeg");
  };
});
