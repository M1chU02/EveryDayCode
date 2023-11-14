document.addEventListener("DOMContentLoaded", function () {
  const christmasDate = new Date("December 25, 2023 00:00:00").getTime();

  const countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const timeRemaining = christmasDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );

    document.getElementById("days").innerHTML = days + "d";
    document.getElementById("hours").innerHTML = hours + "h";
    document.getElementById("minutes").innerHTML = minutes + "m";

    if (timeRemaining < 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerHTML = "Merry Christmas!";
    }
  }, 1000);
});
