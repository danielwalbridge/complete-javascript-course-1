'use strict';

// console.log( document.querySelector('.message').textContent );
// document.querySelector('.message').textContent = ' This is my new content in the message class'
// console.log( document.querySelector('.message').textContent );
//
// document.querySelector('.score').textContent = '100'
// document.querySelector('.number').textContent = '99'
//
//
// document.querySelector('.guess').value ='99';
// console.log(document.querySelector('.guess').value);


let secretNumber = Math.trunc(Math.random()*20 ) +1 ;

let score = 20;
let highScore = 0;

// play again function.
document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random()*20 ) +1 ;
  document.querySelector('.message').textContent = "Start guessing...";
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = "??";
  document.querySelector('.guess').textContent = "";
  document.querySelector('body').style.backgroundColor ='#222';
  document.querySelector('.number').style.width = '15rem';


})

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);



  // if the score is above zero, you can play
  if (score > 0) {

    // if there is no guess
    if (!guess) {
      document.querySelector('.message').textContent = '❌No number '

      // if the guess is correct
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🏆 Winner!'
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor ='#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }

    } else if (guess!== secretNumber) {
      document.querySelector('.message').textContent = guess > secretNumber ? 'Number is too high' : 'Number is to low'
      score--;
      document.querySelector('.score').textContent = score
    }

    // if the score is too low and the gamne is lost
  } else {
    document.querySelector('.message').textContent = 'You lose'
  }
});
