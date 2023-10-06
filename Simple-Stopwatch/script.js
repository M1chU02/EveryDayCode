let startTime;
let interval;
let pausedTime = 0;
let splits = [];

const stopwatch = document.getElementById("stopwatch");
const startStopButton = document.getElementById("startStopButton");
const resetButton = document.getElementById("resetButton");
const pauseResumeButton = document.getElementById("pauseResumeButton");
const splitButton = document.getElementById("splitButton");
const splitList = document.getElementById("splitList");

startStopButton.addEventListener("click", () => {
  if (startStopButton.textContent === "Start") {
    startStopButton.textContent = "Stop";
    startStopwatch();
    if (pausedTime > 0) {
      startTime = Date.now() - (pausedTime || 0);
      pausedTime = 0;
    }
    pauseResumeButton.textContent = "Pause";
  } else {
    startStopButton.textContent = "Start";
    stopStopwatch();
    pauseResumeButton.textContent = "Resume";
  }
});

resetButton.addEventListener("click", () => {
  startStopButton.textContent = "Start";
  resetStopwatch();
  pauseResumeButton.textContent = "Pause";
  splits = [];
  splitList.innerHTML = "";
});

pauseResumeButton.addEventListener("click", () => {
  if (pauseResumeButton.textContent === "Pause") {
    pauseResumeButton.textContent = "Resume";
    pauseStopwatch();
  } else {
    pauseResumeButton.textContent = "Pause";
    resumeStopwatch();
  }
});

splitButton.addEventListener("click", () => {
  if (interval) {
    const elapsedTime = Date.now() - startTime;
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    const splitTime = `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;

    splits.push(splitTime);

    const splitItem = document.createElement("li");
    splitItem.textContent = splitTime;
    splitList.appendChild(splitItem);
  }
});

function startStopwatch() {
  startTime = Date.now() - (interval || 0);
  interval = setInterval(updateStopwatch, 10);
}

function stopStopwatch() {
  clearInterval(interval);
  interval = null;
  pausedTime = 0;
}

function resetStopwatch() {
  clearInterval(interval);
  interval = null;
  stopwatch.textContent = "0:00";
  pausedTime = 0;
}

function pauseStopwatch() {
  clearInterval(interval);
  pausedTime = Date.now() - startTime;
}

function resumeStopwatch() {
  startTime = Date.now() - pausedTime;
  interval = setInterval(updateStopwatch, 10);
}

function updateStopwatch() {
  const elapsedTime = Date.now() - startTime;
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);

  stopwatch.textContent = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
}
