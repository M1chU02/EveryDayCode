const textInput = document.getElementById("text-input");
const wordCount = document.getElementById("word-count");
const charCount = document.getElementById("char-count");
const paragraphCount = document.getElementById("paragraph-count");

textInput.addEventListener("input", updateWordCount);

function updateWordCount() {
  const text = textInput.value;
  const words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word !== "");
  const characters = text.length;
  const paragraphs = text
    .split(/\n{2,}/)
    .filter((paragraph) => paragraph.trim() !== "").length;

  wordCount.textContent = words.length;
  charCount.textContent = characters;
  paragraphCount.textContent = paragraphs;
}

updateWordCount();
