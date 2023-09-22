document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const answers = ["A", "False", "A", "True", "B"];
  let score = 0;

  for (let i = 1; i <= 5; i++) {
    const selectedOption = document.querySelector(
      `input[name="q${i}"]:checked`
    );
    if (selectedOption) {
      if (selectedOption.value === answers[i - 1]) {
        score++;
      }
    }
  }

  alert(`You scored ${score} out of 5.`);
});
