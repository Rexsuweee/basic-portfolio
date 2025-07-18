//site light/dark mode
const siteMode = document.getElementById("siteMode");
const body = document.getElementById("global");
const logo = document.getElementById("logo");
let viewMode = true;

siteMode.onclick = function() {
  if (viewMode == true) {
    body.className = "";
    logo.src="assets/Logo.png";
    siteMode.textContent="☀ LIGHT MODE";
    viewMode = false;
  } else {
    body.className = "lightmode";
    logo.src="assets/LogoDark.png";
    siteMode.textContent="★ DARK MODE";
    viewMode = true;
  }
}

//button program
const rollBtn = document.getElementById("rollBtn");
const countLabel = document.getElementById("countLabel");
const minNum = 1;
const maxNum = 6;
let randomNum;
let randomNum2;

function roll() {
    randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    switch (randomNum) {
        case 1:
            countLabel.textContent="⚀";
            break;
        case 2:
            countLabel.textContent="⚁";
            break;
        case 3:
            countLabel.textContent="⚂"
            break;
        case 4:
            countLabel.textContent="⚃";
            break;
        case 5:
            countLabel.textContent="⚄";
            break;
        case 6:
            countLabel.textContent="⚅";
            break;
    }
}

rollBtn.onclick = function() {
    for (i = 1; i < 100; i++){
    setTimeout(roll, i**2)
    }
    randomNum2 = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

//number guessing program
const guessBtn = document.getElementById("guessBtn");
const headerTxt = document.getElementById("headerTxt");
const guessField = document.getElementById("guessField");
let count = 0;
let guess = 0;
let attempts = 0;
let answer = Math.floor(Math.random() * (100 + 1));

guessBtn.onclick = function (){
    attempts++;
    guess = guessField.value;
    if (guess > answer) {
        headerTxt.textContent = "The answer is a lower number.";
    } else if (guess < answer) {
        headerTxt.textContent = "The answer is a higher number.";
    } else {
        headerTxt.textContent = `Congrats the aswer was ${answer}. Attempts: ${attempts}. Guess for a new number.`;
        answer = Math.floor(Math.random() * (100 + 1));
        attempts = 0;
    }
}