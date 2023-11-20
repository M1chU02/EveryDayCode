function generateAnagrams() {
  const inputWord = document.getElementById("inputWord").value;
  const anagramsList = document.getElementById("anagramsList");

  anagramsList.innerHTML = "";

  if (inputWord.trim() === "") {
    alert("Please enter a word.");
    return;
  }

  let anagrams = getAnagrams(inputWord);

  anagrams.forEach(function (anagram) {
    let listItem = document.createElement("li");
    listItem.textContent = anagram;
    anagramsList.appendChild(listItem);
  });
}

function getAnagrams(word) {
  if (word.length <= 1) {
    return [word];
  } else {
    let currentChar = word[0];
    let remainingChars = word.slice(1);
    let partialAnagrams = getAnagrams(remainingChars);
    let result = [];

    for (let i = 0; i < partialAnagrams.length; i++) {
      for (let j = 0; j <= partialAnagrams[i].length; j++) {
        let anagram =
          partialAnagrams[i].slice(0, j) +
          currentChar +
          partialAnagrams[i].slice(j);
        result.push(anagram);
      }
    }

    return result;
  }
}
