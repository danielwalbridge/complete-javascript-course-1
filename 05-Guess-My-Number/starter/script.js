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

// Handling Click events

const secretNumber = Math.trunc(Math.random()*20 ) +1 ;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

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

      document.querySelector('body').style.backgroundColor ='#60b347';
      document.querySelector('.number').style.width = '30rem';
      // if the guess is too high
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Number is too high'
      score--;
      document.querySelector('.score').textContent = score
    }

    // if the guess is too low
    else {
      document.querySelector('.message').textContent = 'Number is too low'
      score--;
      document.querySelector('.score').textContent = score;

    }

    // if the score is too low and the gamne is lost
  } else {
    document.querySelector('.message').textContent = 'You lose'
  }
});
