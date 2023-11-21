function convertTime() {
  const fromTimeZone = document.getElementById("fromTimeZone").value;
  const toTimeZone = document.getElementById("toTimeZone").value;
  const fromTime = new Date(document.getElementById("fromTime").value);

  const options = {
    timeZone: fromTimeZone,
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const convertedTime = fromTime.toLocaleTimeString("en-US", options);

  const toTimeElement = document.getElementById("toTime");
  toTimeElement.value = convertedTime;
}
