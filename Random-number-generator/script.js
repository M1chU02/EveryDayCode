function Random() {
  let resaultp = document.getElementById("resault");
  let min = document.getElementById("min").value;
  let max = document.getElementById("max").value;
  if (min == "" || max == "" || min < 0 || max < 0 || min > max) {
    resaultp.innerHTML = "Enter a valid range!";
    resaultp.style.color = "lightcoral";
  } else {
    let random = Math.floor(Math.random() * (+max + 1 - +min)) + +min;
    resaultp.innerHTML = random;
    resaultp.style.color = "white";
  }
}
