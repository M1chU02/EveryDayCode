function generateLoremIpsum() {
  const paragraphs = document.getElementById("paragraphs").value;
  const loremIpsum = generateLoremIpsumText(paragraphs);
  document.getElementById("result").innerText = loremIpsum;
}

function generateLoremIpsumText(paragraphs) {
  const loremIpsumWords =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  let result = "";
  for (let i = 0; i < paragraphs; i++) {
    result += loremIpsumWords + "\n\n";
  }
  return result.trim();
}

function copyToClipboard() {
  const resultElement = document.getElementById("result");
  const textarea = document.createElement("textarea");
  textarea.value = resultElement.innerText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("Text copied to clipboard!");
}
