const startBtn = document.getElementById("startCountdown");
startBtn.addEventListener("click", () => {
  let duration = document.getElementById("countdownDuration").value;
  if (duration > 0) {
    document.getElementById("countdownContainer").style.display = "flex";
    let countdown = setInterval(function () {
      if (duration <= 0) {
        clearInterval(countdown);
        sendNotification("Countdown Finished", "Your countdown has ended!");
      }
      document.getElementById("countdown").textContent = duration;
      duration -= 1;
    }, 1000);
  } else {
    document.getElementById("countdown").textContent = "Enter valid duration";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (
    Notification.permission !== "granted" &&
    Notification.permission !== "denied"
  ) {
    Notification.requestPermission();
  }
});

function sendNotification(title, message) {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    new Notification(title, { body: message });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        new Notification(title, { body: message });
      }
    });
  }
}
