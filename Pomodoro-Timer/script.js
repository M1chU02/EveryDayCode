let countdown;
let workTime = 25;
let breakTime = 5;
let isWorking = true;

function displayTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  document.getElementById("time").textContent = display;
}

function playSound() {
  const audio = document.getElementById("alarm");
  audio.play();
}

function startTimer() {
  const time = isWorking ? workTime * 60 : breakTime * 60;
  const now = Date.now();
  const then = now + time * 1000;
  displayTime(time);
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      isWorking = !isWorking;
      document.title = isWorking ? "Work Time" : "Break Time";
      playSound();
      startTimer();
      return;
    }
    displayTime(secondsLeft);
  }, 1000);
}

function stopTimer() {
  clearInterval(countdown);
  document.title = "Pomodoro Timer";
}

function resetTimer() {
  stopTimer();
  displayTime(isWorking ? workTime * 60 : breakTime * 60);
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("work").addEventListener("click", () => {
  isWorking = true;
  resetTimer();
});
document.getElementById("break").addEventListener("click", () => {
  isWorking = false;
  resetTimer();
});
