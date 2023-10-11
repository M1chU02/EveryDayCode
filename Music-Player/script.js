const songs = [
  { title: "01 Supposed To Be", file: "/Music-Player/songs/song1.mp3" },
  { title: "02 Demons", file: "/Music-Player/songs/song2.mp3" },
  { title: "03 Pulse", file: "/Music-Player/songs/song3.mp3" },
  { title: "04 The Magic", file: "/Music-Player/songs/song4.mp3" },
  { title: "05 Happy Hurts", file: "/Music-Player/songs/song5.mp3" },
  { title: "06 You Were Wrong", file: "/Music-Player/songs/song6.mp3" },
  { title: "07 Too Loud", file: "/Music-Player/songs/song7.mp3" },
  { title: "08 War", file: "/Music-Player/songs/song8.mp3" },
  { title: "09 Under The Knife  ", file: "/Music-Player/songs/song9.mp3" },
  { title: "10 Here We Are", file: "/Music-Player/songs/song10.mp3" },
  { title: "11 Get Well II", file: "/Music-Player/songs/song11.mp3" },
  { title: "12 Invincible", file: "/Music-Player/songs/song12.mp3" },
  { title: "13 You Can't Kill Us", file: "/Music-Player/songs/song13.mp3" },
];

const audio = document.getElementById("audio");
const titleElement = document.getElementById("title");
const playPauseButton = document.getElementById("play-pause");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const songListElement = document.getElementById("song-list");
const volumeControl = document.getElementById("volume-control");
const timeline = document.getElementById("timeline");
const currentTimeElement = document.getElementById("current-time");
const durationElement = document.getElementById("duration");

let currentSongIndex = 0;

function loadSong() {
  const currentSong = songs[currentSongIndex];
  titleElement.textContent = currentSong.title;
  audio.src = currentSong.file;
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = "Pause";
  } else {
    audio.pause();
    playPauseButton.textContent = "Play";
  }
}

function playNextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong();
  audio.play();
}

function playPrevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong();
  audio.play();
}

function updateTimeline() {
  const currentTime = audio.currentTime;
  const duration = audio.duration;

  timeline.value = (currentTime / duration) * 100;
}

playPauseButton.addEventListener("click", togglePlayPause);
nextButton.addEventListener("click", playNextSong);
prevButton.addEventListener("click", playPrevSong);

songs.forEach((song, index) => {
  const listItem = document.createElement("li");
  listItem.textContent = song.title;
  listItem.addEventListener("click", () => {
    currentSongIndex = index;
    loadSong();
    audio.play();
  });
  songListElement.appendChild(listItem);
});

loadSong();

audio.volume = volumeControl.value;
volumeControl.addEventListener("input", () => {
  audio.volume = volumeControl.value;
});

audio.addEventListener("timeupdate", updateTimeline);
audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;

  const currentMinutes = Math.floor(currentTime / 60);
  const currentSeconds = Math.floor(currentTime % 60);
  const durationMinutes = Math.floor(duration / 60);
  const durationSeconds = Math.floor(duration % 60);

  const currentTimeString = `${currentMinutes}:${
    currentSeconds < 10 ? "0" : ""
  }${currentSeconds}`;
  const durationTimeString = `${durationMinutes}:${
    durationSeconds < 10 ? "0" : ""
  }${durationSeconds}`;

  currentTimeElement.textContent = currentTimeString;
  durationElement.textContent = durationTimeString;
});

timeline.addEventListener("input", () => {
  const percentage = timeline.value;
  const duration = audio.duration;
  const newPosition = (percentage / 100) * duration;
  audio.currentTime = newPosition;
});

audio.addEventListener("ended", () => {
  playNextSong();
});
