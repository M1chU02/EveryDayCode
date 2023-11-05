const submitBtn = document.getElementById("submit");
const resaultP = document.getElementById("bool");

submitBtn.addEventListener("click", isPalindrome);

function isPalindrome() {
  let originStr = document.getElementById("palindromeInput").value;
  str = originStr.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversed = str.split("").reverse().join("");
  if (str === reversed) {
    resaultP.innerText = originStr + " is a palindrome";
  } else {
    resaultP.innerText = originStr + " is not a palindrome";
  }
}
