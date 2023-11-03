const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const musicInput = document.getElementById("musicInput");
const audioElement = document.getElementById("audio");
const playPauseButton = document.getElementById("playPauseButton");
const volumeSlider = document.getElementById("volumeSlider");

let audioContext;
let analyser;
let dataArray;

function initAudio() {
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  analyser = audioContext.createAnalyser();
  const source = audioContext.createMediaElementSource(audioElement);
  source.connect(analyser);
  analyser.connect(audioContext.destination);
  analyser.fftSize = 256;
  dataArray = new Uint8Array(analyser.frequencyBinCount);
}

function draw() {
  analyser.getByteFrequencyData(dataArray);

  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const barWidth = (canvas.width / dataArray.length) * 2.5;
  let x = 0;

  dataArray.forEach(function (value) {
    const barHeight = value * 2;

    ctx.fillStyle = `rgb(${barHeight + 100},50,50)`;
    ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight);

    x += barWidth + 1;
  });

  requestAnimationFrame(draw);
}

function loadMusic() {
  const file = musicInput.files[0];
  if (file) {
    if (audioContext) {
      audioContext.close().then(function () {
        audioElement.src = URL.createObjectURL(file);
        audioElement.load();
        initAudio();
        audioElement.play();
        draw();
      });
    } else {
      audioElement.src = URL.createObjectURL(file);
      initAudio();
      audioElement.play();
      draw();
    }
  }
}

function togglePlayPause() {
  if (audioElement.paused) {
    audioElement.play();
    playPauseButton.textContent = "Pause";
  } else {
    audioElement.pause();
    playPauseButton.textContent = "Play";
  }
}

function setVolume() {
  audioElement.volume = volumeSlider.value;
}

playPauseButton.addEventListener("click", togglePlayPause);
volumeSlider.addEventListener("input", setVolume);
musicInput.addEventListener("change", loadMusic);
