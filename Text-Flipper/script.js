const textEl = document.getElementById("text");
textEl.addEventListener("input", listenForInput);

function listenForInput() {
  let text = textEl.value;
  flipTxt(text);
  mirrorTxt(text);
  reverseTxt(text);
}

function ReverseString(str) {
  return str.split("").reverse().join("");
}

function flipTxt(text) {
  const flipTxtEl = document.getElementById("flipTxt");
  flipTxtEl.value = text;
  flipTxtEl.style.transform = "scaleY(-1)";
}

function mirrorTxt(text) {
  const mirrorTxtEl = document.getElementById("mirrorTxt");
  mirrorTxtEl.value = text;
  mirrorTxtEl.style.transform = "scaleX(-1)";
}

function reverseTxt(text) {
  const reverseTxtEl = document.getElementById("reverseTxt");
  let reversed = ReverseString(text);
  reverseTxtEl.value = reversed;
}
