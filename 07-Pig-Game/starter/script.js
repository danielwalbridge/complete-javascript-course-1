'use strict';

// Selecting Elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const swapPlayer = function() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
}

// Rolling dice function.

btnRoll.addEventListener('click', function() {

  if (playing) {
    //1. generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. display dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    //3. check for rolled 1:

    if (dice !== 1) {
      // add dice to current score
      currentScore+=dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      // swap to next player
      swapPlayer()
    }
  }
})

btnHold.addEventListener('click', function() {
  if (playing) {
    // add current score to active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // if score is 100 or more
    if (scores[activePlayer] >= 100) {
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      diceElement.classList.add('hidden')
    }
    else {
      // switch to next player
      swapPlayer()
    }
  }
})

btnNew.addEventListener('click', function() {
  // hide dice.
  diceElement.classList.add('hidden')
  // reset current.
  currentScore = 0;
  //reset array
  scores[0] = 0;
  scores[1] = 0;
  // start at player 1.
  activePlayer = 0;

})
