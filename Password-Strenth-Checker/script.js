const passwordEl = document.getElementById("password");
passwordEl.addEventListener("input", checkPasswordStrength);

function checkPasswordStrength() {
  const password = document.getElementById("password").value;
  const bar = document.getElementById("bar");
  const strengthText = document.getElementById("strength-text");

  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (strongPasswordRegex.test(password)) {
    bar.style.width = "100%";
    bar.style.backgroundColor = "green";
    strengthText.innerText = "Strong";
  } else {
    const strength = (password.length / 12) * 100;
    bar.style.width = strength + "%";
    bar.style.backgroundColor = "red";
    strengthText.innerText = "Weak";
  }
}
