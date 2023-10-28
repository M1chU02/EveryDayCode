function encrypt() {
  const text = document.getElementById("text").value;
  const shift = parseInt(document.getElementById("shift").value);
  const encryptedText = caesarCipher(text, shift);
  document.getElementById("result").value = encryptedText;
}

function decrypt() {
  const text = document.getElementById("text").value;
  const shift = parseInt(document.getElementById("shift").value);
  const decryptedText = caesarCipher(text, -shift);
  document.getElementById("result").value = decryptedText;
}

function caesarCipher(text, shift) {
  return text.replace(/[a-zA-Z]/g, function (char) {
    const isUpperCase = char === char.toUpperCase();
    const offset = isUpperCase ? 65 : 97;
    return String.fromCharCode(
      ((char.charCodeAt(0) - offset + shift + 26) % 26) + offset
    );
  });
}
