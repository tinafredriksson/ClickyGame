// click a button or object to earn points so that I can increase my score.
// See my current score during the game so that I know how well I am doing.


// See a countdown timer so I can see how much time is left setInterval()

// Variables
let score = 0;
let timeleft = 60;

// HTML DOM
const button1= document.getElementById("button1");
const scoreDisplay= document.getElementById("scoreDisplay");
const timerDisplay= document.getElementById("timerDisplay");

// UI Functions
button1.addEventListener("click", ()=> {
increaseScore();
})
//TODO: start only when "click Me is Clicked"
setInterval(countdown,  1000);

// Function
function increaseScore() {
 score++;
 scoreDisplay.innerText = score;
}

function countdown(){
  timeleft--;
  timerDisplay.innerText = timeleft;
// TODO: Stop timer att the end.
}


