const startBtn = document.getElementById("startCountdown");
startBtn.addEventListener("click", () => {
  let duration = document.getElementById("countdownDuration").value;
  if (duration > 0) {
    document.getElementById("countdownContainer").style.display = "flex";
    let countdown = setInterval(function () {
      if (duration <= 0) {
        clearInterval(countdown);
      }
      document.getElementById("countdown").textContent = duration;
      duration -= 1;
    }, 1000);
  } else {
    document.getElementById("countdown").textContent = "Enter valid duration";
  }
});
