const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  " ": "/",
};

const translateButton = document.getElementById("translateButton");
translateButton.addEventListener("click", translate);

const reverseMorseCode = {};
for (const letter in morseCode) {
  reverseMorseCode[morseCode[letter]] = letter;
}

function textToMorse(text) {
  text = text.toUpperCase();
  let morse = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char in morseCode) {
      morse += morseCode[char] + " ";
    }
  }
  return morse;
}

function morseToText(morse) {
  const morseWords = morse.split("/");
  let text = "";
  for (const morseWord of morseWords) {
    const morseLetters = morseWord.split(" ");
    for (const morseLetter of morseLetters) {
      if (morseLetter in reverseMorseCode) {
        text += reverseMorseCode[morseLetter];
      }
    }
    text += " ";
  }
  return text;
}

function translate() {
  const inputText = document.getElementById("inputText").value;
  const outputText = document.getElementById("outputText");

  if (inputText.startsWith(".")) {
    const text = morseToText(inputText.trim());
    outputText.value = text;
  } else {
    const morse = textToMorse(inputText);
    outputText.value = morse;
  }
}
