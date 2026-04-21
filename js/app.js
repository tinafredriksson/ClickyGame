// click a button or object to earn points so that I can increase my score.
// See my current score during the game so that I know how well I am doing.
// See a countdown timer so I can see how much time is left setInterval()

// Variables
let score = 0;
let timeleft = 10;
let gameStarted = false;
let gameEnded = false;
let interval = null;

// HTML DOM  // GET YOUR ELEMENTS
const button1= document.getElementById("button1");
const scoreDisplay= document.getElementById("scoreDisplay");
const timerDisplay= document.getElementById("timerDisplay");
const label1= document.getElementById("label1");
const input1= document.getElementById("name");

// UI Functions
button1.addEventListener("click", ()=> {
  if (!gameEnded) {
    increaseScore();
  }
  if (!gameStarted) {
    startGame();
  }
})
// döljer elementen
input1.style.display = "none";
label1.style.display = "none";

// Function
function increaseScore() {
 score++;
 scoreDisplay.innerText = score;
}

function countdown() {
  timeleft--;
  timerDisplay.innerText = timeleft;

  if (timeleft <= 0) {
    timerDisplay.innerText = 0;
    endGame();
  }
}

  // TODO: Stop timer att the end.
function  startGame(){
  interval = setInterval(countdown, 1000); // TODO: Make interval stop.
  gameStarted = true;
}

function endGame() {
  gameEnded = true;
  clearInterval(interval);
  input1.style.display = "block";
  label1.style.display = "block";
  button1.style.display = "none";
}
// TODO: make something appear
