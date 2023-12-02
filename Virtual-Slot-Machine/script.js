const symbols = ["🍒", "🍇", "🍊", "🍋", "🍉"];

function getRandomSymbol() {
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
}

function spinReels() {
  const reel1 = document.getElementById("reel1");
  const reel2 = document.getElementById("reel2");
  const reel3 = document.getElementById("reel3");

  const symbol1 = getRandomSymbol();
  const symbol2 = getRandomSymbol();
  const symbol3 = getRandomSymbol();

  reel1.textContent = symbol1;
  reel2.textContent = symbol2;
  reel3.textContent = symbol3;
}
