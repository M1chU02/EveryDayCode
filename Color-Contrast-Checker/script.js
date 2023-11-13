function checkContrast() {
  const color1 = document.getElementById("color1").value;
  const color2 = document.getElementById("color2").value;

  const contrastRatio = getContrastRatio(color1, color2);

  const resultElement = document.getElementById("contrastRatio");
  resultElement.textContent = `Contrast Ratio: ${contrastRatio.toFixed(2)}`;

  if (contrastRatio >= 4.5) {
    resultElement.style.color = "green";
    resultElement.textContent += " (Passes AA Standard)";
  } else {
    resultElement.style.color = "red";
    resultElement.textContent += " (Fails AA Standard)";
  }
}

function getContrastRatio(color1, color2) {
  const luminance1 = getRelativeLuminance(color1);
  const luminance2 = getRelativeLuminance(color2);

  const lighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);

  return (lighter + 0.05) / (darker + 0.05);
}

function getRelativeLuminance(color) {
  const rgb = hexToRgb(color);
  const gammaCorrectedRgb = rgb.map((value) => {
    value /= 255;
    return value <= 0.03928
      ? value / 12.92
      : Math.pow((value + 0.055) / 1.055, 2.4);
  });

  return (
    0.2126 * gammaCorrectedRgb[0] +
    0.7152 * gammaCorrectedRgb[1] +
    0.0722 * gammaCorrectedRgb[2]
  );
}

function hexToRgb(hex) {
  hex = hex.replace(/^#/, "");

  hex = hex.length === 3 ? hex.replace(/(.)/g, "$1$1") : hex;

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return [r, g, b];
}
