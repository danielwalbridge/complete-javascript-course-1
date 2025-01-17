'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// // Converting and Checking Numbers
//
// // conversion
// console.log( typeof Number('23'));
// console.log(typeof + "23");
//
// // parsing
// // String needs to start with a number for this to work, else we get NaN
// console.log(Number.parseInt('10px', 10));
// console.log(Number.parseInt('px10', 10));
//
// // will show us the decimal point using parseFloat.
// console.log(Number.parseFloat('2.5 rem'));
// console.log(Number.parseInt('2.5 rem'));
//
// // check if not a number
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+ '20'));
// console.log(Number.isNaN(23/0));
//
// // best way to check if a number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));


// // Math and Rounding
//
// // square root
// console.log(Math.sqrt(25));
// // Get Max
// console.log(Math.max(2,'15', 20, '25'));
// // get min
// console.log(Math.min(5,'15', 20, '25'));
// // constants
// console.log(Math.PI * Number.parseFloat('10px') ** 2);
//
// // gets a ran number between 1 and 6
// console.log(Math.trunc(Math.random() * 6) +1 );
//
// const randomInt = (min, max) => Math.floor(Math.random() * (max- min) +1) + min;
//
// console.log(randomInt(10,15));
//
// // rounding ints
// // all do type coercion
// console.log(Math.trunc(25.1));
// console.log(Math.round(25.7));
// console.log(Math.round(25.5));
// console.log(Math.round(25.3));
// console.log(Math.ceil(23.00001));
// console.log(Math.floor(55.99999999999));
//
// // rounding floating points.
// // does boxing into a number object, so we can use the methods
// console.log(+(2.7).toFixed(0));
// console.log(+(2.7).toFixed(1));

// // The reminder Operator
// console.log(5 % 2);
// console.log( 5 / 2 ); // 5 = 2 * 2 + 1
// console.log(8 % 3);
// console.log(8 / 3); // 8 = 3 * 2 + 2
//
// // check if even or odd.
// // even if divisible by 0
// console.log(6 % 2);
// // odd if divisible by 1
// console.log(7 % 2);
//
// const isEven = n => n % 2 === 0;
//
// console.log(isEven(1));
// console.log(isEven(2));
//
// // on click of the label, every 2nd row will turn red, and every third will be blue
// labelBalance.addEventListener('click', function() {
//   [...document.querySelectorAll('.movements__row')]
//     .forEach(function(row,i) {
//       if ( i % 2 === 0) row.style.backgroundColor = 'red';
//       if (i %  3 === 0) row.style.backgroundColor = 'blue';
//     });
// });


// Numeric Separators
// 287,460,000,000
// const diameter = 287_460_000_000;
// console.log(diameter);
//
// const transferFee = 15_00;
// console.log(transferFee);
//
// console.log(Number('23_22'
// ));


// // BigInt
//
// // largest number we can use in JS safely
// console.log(2 ** 53 -1);
// console.log(Number.MAX_SAFE_INTEGER);
//
// console.log(9999999999999999999999999999999999999999999n);
//
// // operations
// console.log(345398793745983745983475893453n * 2347298347298374298374298374234n);


// Creating Dates
//
// const now = new Date();
// console.log(now);
//
// console.log(new Date(' Aug 02 2020 10:00'));
//
// console.log(new Date(account1.movementsDates[0]));
//
// // working with dates.
//
// const future = new Date(2037,10,19,15,23);
// console.log(future);
// console.log(future.getDate());
// console.log(future.getFullYear());
// console.log(future.toJSON());
// console.log(future.getTime());
//
// console.log(Date.now());
// console.log(future.setUTCFullYear(2050));


// operations With Dates
//
// const futureDate = new Date(2037,10,19,15,23);
// console.log(+futureDate);
//
// const calcDaysPassed = (date1, date2) => date2 - date1;
//
// console.log(calcDaysPassed( new Date, futureDate));
//
// // Timers
// setTimeout((ing1, ing2) => console.log(`Here is your pizza with toppings ${ing1}, ${ing2}`)
//   , 3000, 'ass', 'titties');
//
// setInterval( () =>
// console.log(new Date(), 2000));
