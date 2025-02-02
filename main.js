// COIN FLIP SIMULATOR

// HTML Variables
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");

// Count Variables
let numHeads = 0;
let numTails = 0;

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Genertate a rand om number
  let randNum = Math.random();
  console.log(randNum);

  // simulate the coin flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png'/>";
    numHeads += 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png'/>";
    numTails += 1;
    tailsEl.innerHTML = numTails;
  }
}
