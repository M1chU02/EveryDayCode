document.addEventListener("DOMContentLoaded", function () {
  const messageInput = document.getElementById("message");
  const transmitButton = document.getElementById("transmit");

  transmitButton.addEventListener("click", function () {
    const message = messageInput.value.toUpperCase();
    const morseMessage = toMorseCode(message);

    flashBackground(morseMessage);
  });

  function toMorseCode(message) {
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
      1: ".----",
      2: "..---",
      3: "...--",
      4: "....-",
      5: ".....",
      6: "-....",
      7: "--...",
      8: "---..",
      9: "----.",
      0: "-----",
      " ": " ",
    };

    let morseMessage = "";
    for (let i = 0; i < message.length; i++) {
      if (morseCode[message[i]]) {
        morseMessage += morseCode[message[i]] + " ";
      }
    }
    return morseMessage;
  }

  function flashBackground(morseMessage) {
    const backgroundColor = window.getComputedStyle(
      document.body
    ).backgroundColor;
    const dotDuration = 1000;
    const dashDuration = 3 * dotDuration;
    const spaceDuration = 2 * dotDuration;
    const flashInterval = dotDuration;

    let i = 0;

    function flash() {
      if (i < morseMessage.length) {
        if (morseMessage[i] === ".") {
          document.body.style.backgroundColor = "black";
          setTimeout(function () {
            document.body.style.backgroundColor = backgroundColor;
            i++;
            setTimeout(flash, flashInterval);
          }, dotDuration);
        } else if (morseMessage[i] === "-") {
          document.body.style.backgroundColor = "black";
          setTimeout(function () {
            document.body.style.backgroundColor = backgroundColor;
            i++;
            setTimeout(flash, flashInterval);
          }, dashDuration);
        } else if (morseMessage[i] === " ") {
          setTimeout(function () {
            i++;
            setTimeout(flash, spaceDuration);
          }, spaceDuration);
        }
      }
    }

    flash();
  }
});
