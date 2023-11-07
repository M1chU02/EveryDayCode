const genBtn = document.getElementById("genBtn");
genBtn.addEventListener("click", generate);

var fibEl = document.getElementById("fibEl");

function generate() {
  var fibCount = parseInt(document.getElementById("fibCount").value);
  fibEl.innerText = "";

  if (fibCount >= 2) {
    function fib(n) {
      var fibArray = [0, 1];
      for (var i = 0, j = 1, k = 2; k < n; k++) {
        var x = i + j;
        fibArray.push(x);
        i = j;
        j = x;
      }
      fibEl.innerText = fibArray;
    }

    fib(fibCount);
  }
}
