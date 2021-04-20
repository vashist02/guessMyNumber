'use strict';

let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){


const guess = Number(document.querySelector('.guess').value);

if (!guess) {
  displayMessage('🚫 No number')
}

else if (randomNum === guess) {
  displayMessage('🎉 Correct Number !!!');
  document.querySelector('.number').textContent = randomNum;
  document.querySelector('body').style.backgroundColor ='#60b347';

  if (score > highScore){
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
}

else if (guess !== randomNum){
  if(score > 1) {
    displayMessage( guess > randomNum ?'📈 Too high' : '📉 Too low');
    score--;
    document.querySelector('.score').textContent = score;
  }else {
    displayMessage( '💥 You lost the game!');
    document.querySelector('.score').textContent = 0;
  }
}

});

document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  randomNum = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';


});