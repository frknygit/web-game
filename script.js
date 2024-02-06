
alert("Hello");
window.onload = function checkage() {
  const isEighteenOrOlder = confirm("Ben jij ouder dan 18?");

  if (isEighteenOrOlder) {
    alert("Oke dan mag jij wel door. Veel plezier");
  } else {
    alert("Minderjarig alert!!! website wordt verwijderd");
    window.close();
  }
};

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    pullTrigger();
  }
});

const resultElement = document.getElementById("result");
const imageElement = document.getElementById("resultImage");
const bodyElement = document.body;

let currentPlayer = 1;
let gameOver = false;
let roundStarted = false;

const playerColors = {
  1: "#00ff00", // groen player 1
  2: "#0000ff", // Blue voor player 2
};

function pullTrigger() {
  if (!gameOver) {
    let imagePath = "";
    if (isLucky()) {
      resultElement.textContent = `Player ${currentPlayer}: Klik! Je hebt deze ronde overleefd.`;
      bodyElement.style.backgroundColor = playerColors[currentPlayer];
      imagePath = currentPlayer === 1 ? "img/manrr.png" : "img/man1.png"; // if else statement
      document.getElementById("clickSound").play();
    } else {
      resultElement.textContent = `Player ${currentPlayer}: BANG! Je bent dood. Moge God je zonden vergeven`;
      gameOver = true;
      bodyElement.style.backgroundColor = "#FF0000"; // Red background for player death
      imagePath = currentPlayer === 1 ? "img/dead2.png" : "img/dead1.png";
      document.getElementById("bangSound").play();
    }

    imageElement.src = imagePath;
    currentPlayer = 3 - currentPlayer;

    if (gameOver) {
      roundStarted = false;
    }
  }
}

function isLucky() {
  const bulletChamber = Math.floor(Math.random() * 6) + 1;
  return bulletChamber !== 1; // not gelijk aan 1
}

function playAgain() {
  if (gameOver) {
    gameOver = false;
    currentPlayer = 1;
    resultElement.textContent = "";
    bodyElement.style.backgroundColor = "#FFFFFF";
    imageElement.src = "";
  }
}

function flipCoin() {
  let resultElement = document.getElementById("result");
  let coinToss = Math.random();

  if (coinToss > 0.5) {
    resultElement.textContent = "coin is : Heads";
    document.getElementById("coinFlipSound").play();
  } else {
    resultElement.textContent = "coin is: Tails";
    document.getElementById("coinFlipSound").play();
  }
}


