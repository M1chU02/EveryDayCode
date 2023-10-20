let flashcards = [];
let currentFlashcardIndex = 0;

const frontTextarea = document.getElementById("front");
const backTextarea = document.getElementById("back");
const addBtn = document.getElementById("add");
const flashcardDiv = document.getElementById("flashcard");
const frontCard = document.getElementById("front-card");
const backInput = document.getElementById("back-input");
const checkBtn = document.getElementById("check");
const startStudyingBtn = document.getElementById("start-studying");

addBtn.addEventListener("click", createFlashcard);
checkBtn.addEventListener("click", checkAnswer);
startStudyingBtn.addEventListener("click", startStudying);

function createFlashcard() {
  const frontText = frontTextarea.value;
  const backText = backTextarea.value;

  if (frontText.trim() === "" || backText.trim() === "") {
    alert("Please fill in both sides of the flashcard.");
    return;
  }

  flashcards.push({ front: frontText, back: backText });
  clearInputFields();
}

function clearInputFields() {
  frontTextarea.value = "";
  backTextarea.value = "";
}

function startStudying() {
  if (flashcards.length === 0) {
    alert("No flashcards to study. Create some first.");
    return;
  }

  showNextFlashcard();
  switchToStudySection();
}

function showNextFlashcard() {
  if (flashcards.length > 0) {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    const flashcard = flashcards[randomIndex];

    frontCard.textContent = flashcard.front;
    backInput.value = "";
    currentFlashcardIndex = randomIndex;
  } else {
    alert("Congratulations! You've studied all the flashcards.");
    switchToHomepage();
  }
}

function checkAnswer() {
  const userAnswer = backInput.value;
  const correctAnswer = flashcards[currentFlashcardIndex].back;

  if (userAnswer === correctAnswer) {
    flashcards.splice(currentFlashcardIndex, 1);
    showNextFlashcard();
  } else {
    backInput.value = correctAnswer;
    setTimeout(() => {
      showNextFlashcard();
    }, 1500);
  }
}

function switchToStudySection() {
  document.getElementById("create").style.display = "none";
  document.getElementById("study").style.display = "flex";
}

function switchToHomepage() {
  document.getElementById("create").style.display = "flex";
  document.getElementById("study").style.display = "none";
}

const exportBtn = document.getElementById("export");
exportBtn.addEventListener("click", exportFlashcards);

function exportFlashcards() {
  const jsonContent = JSON.stringify(flashcards);
  const blob = new Blob([jsonContent], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "flashcards.json";
  a.click();
  URL.revokeObjectURL(url);
}

const importBtn = document.getElementById("import");
importBtn.addEventListener("click", importFlashcards);

function importFlashcards() {
  document.getElementById("import-file").click();
  document.getElementById("import-file").addEventListener("change", () => {
    const importFileInput = document.getElementById("import-file");
    const file = importFileInput.files[0];
    if (!file) {
      alert("Please select a valid JSON file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const importedFlashcards = JSON.parse(e.target.result);
        flashcards = importedFlashcards;
        alert("Flashcards imported successfully!");
      } catch (error) {
        alert(
          "Error importing flashcards. Please make sure the file is valid JSON."
        );
      }
    };

    reader.readAsText(file);
  });
}
