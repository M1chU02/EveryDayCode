function fetchEmojis(category) {
  const apiKey = "36c2f909f7e3e65540ce6d86ac4aa08cb0955bc8";
  const url = `https://emoji-api.com/categories/${category}?access_key=${apiKey}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const emojisContainer = document.getElementById("emojis");

      emojisContainer.innerHTML = "";

      data.forEach((emojiData) => {
        const emojiCharacter = emojiData.character;
        const emojiName = emojiData.unicodeName;
        const emojiElement = document.createElement("span");
        emojiElement.classList.add("emoji");
        emojiElement.textContent = emojiCharacter;
        emojiElement.title = emojiName;

        emojiElement.addEventListener("click", () => {
          copyToClipboard(emojiCharacter);
        });

        emojisContainer.appendChild(emojiElement);
      });
    });
}

function copyToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  alert(`Copied: ${text}`);
}

const categorySpans = document.querySelectorAll(".emoji-category");

categorySpans.forEach((span) => {
  span.addEventListener("click", () => {
    const selectedCategory = span.getAttribute("data-category");
    fetchEmojis(selectedCategory);
  });
});

fetchEmojis("smileys-emotion");
