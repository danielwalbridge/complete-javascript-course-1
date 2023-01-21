'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

const displayMovements = function(movements) {
  containerMovements.innerHTML= '';
  movements.forEach(function(mov, i,) {

    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const htmlMovRow = `
     <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', htmlMovRow)
  });

};
displayMovements(account1.movements);

const createUserName = function(acct) {
  acct.forEach(function(acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name =>name[0])
      .join('');
  })
};
createUserName(accounts)
console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a','b','c','d','e'];
//
// // slice method
// console.log(arr.slice(2));
// console.log(arr.slice(2,3));
// console.log(arr.slice(-2));
// // create a shallow copy with slice
// console.log(arr.slice());
// // can also create a shallow copy with the spread operator
// console.log([...arr]);
//
// // splice
// // console.log(arr.splice(1));
// console.log(arr);
// console.log(arr.splice(1,2));
//
// // reverse
// const arr2 = ['j', 'i', 'h', 'g']
// console.log(arr2);
// console.log(arr2.reverse());
//
// // concat
// const letters = arr.concat(arr2);
// console.log(letters);
//
// // join
// console.log(letters.join(' MEOW '));

//
// const arr = [23,44,11];
// console.log(arr[0]);
// console.log(arr.at(0));
// console.log(arr.at(-1));


// movements.forEach(function(movement, index, array) {
// if (movement > 0) {
//   console.log(`You deposited ${movement} at ${index}`);
// }
// else {
//   console.log(`You withdrew ${Math.abs(movement)} at ${index}`);
// }
// })
//
// //Map
// currencies.forEach(function(value,key,map) {
//   console.log(`${key} : ${value}`);
// })
//
// // Sets
// const currenciesUniqu = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUniqu);
// currenciesUniqu.forEach(function(value,key,map) {
//   console.log(`${key} : ${value}`);
// })


// DOM Elements


///////////////////////////////////////
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age,
 and stored the data into an array (one array for each).
 For now, they are just interested in knowing whether a dog is an adult or a puppy.
  A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'),
 and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats,
 not dogs! So create a shallow copy of Julia's array,
  and remove the cat ages from that copied array
   (because it's a bad practice to mutate function parameters)

2. Create an array with both Julia's (corrected) and Kate's data

3. For each remaining dog, log to the console whether it's an adult
 ("Dog number 1 is an adult, and is 5 years old")
  or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function(dogsJulia, dogsKate) {
//
//   const dogsNewJulia = dogsJulia.slice(1,-2);
//
//   const allDogs = [...dogsNewJulia, ...dogsKate];
//
//
//   allDogs.forEach(function(dogAge, i){
//     const age = dogAge > 3 ? `an adult and is ${dogAge} years old`: `still a puppy 🐶"`
//     console.log(`Dog number ${i} is ${age}`);
//   });
// }
//
// checkDogs([3,5,2,12,7], [4,1,15,8,3]);
// checkDogs([9,16,6,8,3], [10,5,6,1,4])


// Data  Transformations

// map
// const eurToUsd = 1.1;
//
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//
// const movementsUSD = movements.map(function(mov) {
//   return Math.round(mov * eurToUsd);
// })
//
// const movementsUSDArrow = movements.map( mov => Math.round(mov * eurToUsd));
//
// console.log(movements);
// console.log(movementsUSD);
// console.log(movementsUSDArrow);
//
// const movementsDec = movements.map( (mov,i,arr) => {
//   if (mov > 0) {
//     return (`Movement ${i + 1} : you deposited : ${mov}`);
//   } else {
//     return (`Movement ${i + 1} : you withdrew : ${Math.abs(mov)}`);
//   }
// });
// console.log(movementsDec);


// // filter

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//
// const deposits = movements.filter(mov =>  mov > 0 );
// const withdrawals = movements.filter(mov =>  mov < 0 );
// console.log(deposits);
// console.log(withdrawals);
// // reduce
