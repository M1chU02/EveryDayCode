const questions = [
  { question: "2 + 2", answer: 4 },
  { question: "5 - 3", answer: 2 },
  { question: "4 * 6", answer: 24 },
  { question: "8 / 2", answer: 4 },
  { question: "10 + 15", answer: 25 },
  { question: "7 - 4", answer: 3 },
  { question: "3 * 8", answer: 24 },
  { question: "16 / 4", answer: 4 },
  { question: "20 + 30", answer: 50 },
  { question: "12 - 9", answer: 3 },
  { question: "5 * 5", answer: 25 },
  { question: "18 / 3", answer: 6 },
];

let currentQuestionIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  displayQuestion();
});

function displayQuestion() {
  const questionElement = document.getElementById("question");
  questionElement.textContent = questions[currentQuestionIndex].question;
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  const correctAnswer = questions[currentQuestionIndex].answer;
  const resultContainer = document.getElementById("result-container");

  if (userAnswer === correctAnswer) {
    resultContainer.textContent = "Correct! Well done.";
  } else {
    resultContainer.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
  }
}

function nextQuestion() {
  const resultContainer = document.getElementById("result-container");
  resultContainer.textContent = "";
  document.getElementById("answer").value = "";
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    alert("Congratulations! You have completed the quiz.");
    resetQuiz();
  }
}

function resetQuiz() {
  currentQuestionIndex = 0;
  displayQuestion();
}
