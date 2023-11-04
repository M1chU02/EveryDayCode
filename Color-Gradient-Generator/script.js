document.addEventListener("DOMContentLoaded", function () {
  const gradientBox = document.getElementById("gradient-box");
  const color1Input = document.getElementById("color1");
  const color2Input = document.getElementById("color2");
  const generateBtn = document.getElementById("generate-btn");
  const gradientTypeSelect = document.getElementById("gradient-type");
  const cssCodeTextArea = document.getElementById("css-code");

  generateBtn.addEventListener("click", generateGradient);

  function generateGradient() {
    const color1 = color1Input.value;
    const color2 = color2Input.value;
    const gradientType = gradientTypeSelect.value;

    if (gradientType === "linear") {
      gradientBox.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    } else if (gradientType === "radial") {
      gradientBox.style.background = `radial-gradient(${color1}, ${color2})`;
    }

    cssCodeTextArea.value = `background: ${gradientType}-gradient(${color1}, ${color2});`;
  }
});
