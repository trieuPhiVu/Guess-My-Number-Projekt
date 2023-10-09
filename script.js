'use strict';

// Creat a random number, score and highscore with value 0 at Start
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//funntion for Display Message
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message; //select the element from DOM
}
//function: Background will be change when gamer win
const changeBackgroundWin = function () {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
}
//function: Background will be change when gamer lost
const changeBackgroundLose = function () {
    document.querySelector('body').style.backgroundColor = '#e15353';
    document.querySelector('.number').style.width = '30rem';
}
//function when gamer click button again. Everything will be setting default
const changeDefault = function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    setScore(20);
    document.querySelector('.guess').value = "";
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '18rem';
}
//function set score
const setScore = function (score) {
    document.querySelector('.score').textContent = score;
}
//function set highscore
const setHighscore = function (score,highscore) {
    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = score;
    }
}
// Event will be happen when gamer click on Button Check
document.querySelector('.check').addEventListener('click', function () {
    let guessNumber = Number(document.querySelector('.guess').value);
    if (!guessNumber) {
        displayMessage('Pls give a number 🧐');
    }
    else if (guessNumber === secretNumber) {
        displayMessage('You are win 🥳');
        changeBackgroundWin();
        setHighscore(score, highscore);
    }
    else if (guessNumber !== secretNumber) {
        if (score > 1) {
            displayMessage(guessNumber > secretNumber ? 'Too high' : 'Too low');
            score--;
            setScore(score);
        } else {
            displayMessage(`Game Over 😭`);
            setScore(0);
            changeBackgroundLose();
        }
    }
})
// Event will be happen when gamer click on Button Again
//Reset game 
document.querySelector('.again').addEventListener('click', function () {
    changeDefault();
})
