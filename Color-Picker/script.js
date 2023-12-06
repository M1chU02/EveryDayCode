function copyValues() {
  var hexValue = document.getElementById("hexValue");
  var rgbValue = document.getElementById("rgbValue");

  hexValue.select();
  rgbValue.select();

  document.execCommand("copy");
}

document.getElementById("colorInput").addEventListener("input", function () {
  var colorInput = this.value;
  var hexValue = document.getElementById("hexValue");
  var rgbValue = document.getElementById("rgbValue");

  hexValue.value = colorInput;

  var rgb = hexToRgb(colorInput);
  rgbValue.value = `RGB(${rgb.r}, ${rgb.g}, ${rgb.b})`;
});

function hexToRgb(hex) {
  hex = hex.replace(/^#/, "");

  var bigint = parseInt(hex, 16);

  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return { r, g, b };
}
