function updateNetworkStatus() {
  var logoElement = document.getElementById("logo");
  var messageElement = document.getElementById("message");

  if (navigator.onLine) {
    console.log("online");
    logoElement.innerHTML = "<img src='/Network-Status/images/online.png'/>";
    messageElement.innerText = "You are online!";
  } else {
    console.log("offline");
    logoElement.innerHTML = "<img src='/Network-Status/images/offline.png'/>";
    messageElement.innerText = "You are offline. Please check your connection.";
  }
}

updateNetworkStatus();

document
  .getElementById("refresh")
  .addEventListener("click", updateNetworkStatus);

window.addEventListener("online", updateNetworkStatus);

window.addEventListener("offline", updateNetworkStatus);
