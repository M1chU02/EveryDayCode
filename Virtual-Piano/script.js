document.addEventListener("DOMContentLoaded", function () {
  const keys = document.querySelectorAll(".key");

  keys.forEach((key) => {
    key.addEventListener("click", () => playSound(key));
  });

  document.addEventListener("keydown", (e) => {
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if (key) playSound(key);
  });

  function playSound(key) {
    const note = key.dataset.note;
    const audio = new Audio(`/Virtual-Piano/samples/${note}.mp3`);
    audio.play();
  }
});
