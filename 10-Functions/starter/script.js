'use strict';

// const bookingArr = [];
//
// const createBooking = function(flightNumber, numPass = 1, price = 0) {
//
//   const booking = {
//     flightNumber,
//     numPass,
//     price
//   }
//   console.log(booking);
//   bookingArr.push(booking);
// }
//
// createBooking('322222', 50, 100.00);
// createBooking('33313');



// const oneWord = function(str) {
//   return str.replace(/ /g, '').toLowerCase()
// }
//
// const upperFirstWord = function(str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
//
//   // Higher order function
//   const transformer = function(str, fn) {
//     console.log(`OG string: ${str}`);
//     console.log(`transformed String: ${fn(str)}`);
//     console.log(`transformed by ${fn.name}`);
//
//   }
//
//   // using upperFirstWord as the call back function in transformer
// transformer('JavaScript is the best', upperFirstWord)
// // using oneWord as the call back function in transformer
// transformer("JavaScript is the best", oneWord)



// Functions returning functions
//
// const greet = function(greeting) {
//   return function(name) {
//     console.log(`${greeting} ${name}`);
//   }
// }
//
// // saving the first function as variable.
// const greeterYo = greet('Yo');
// // passes in the name.
// greeterYo('Lil B');
// greeterYo('Delphi');
//
// // can do it in one go.
// greet('Hello')('Mr.Boner Jam 2000')
//
// const greetA = greeting => name =>   console.log(`${greeting} ${name}`);
//
// greetA('Hi')('BootyClap')

// The Call and Apply Methods

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'JH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//     this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
//   }
// }
// lufthansa.book(69, "Lil B");
// lufthansa.book(420, "Delphi");
// console.log(lufthansa);
//
// const wings = {
//   airline: 'wings',
//     iataCode: 'WI',
//   bookings: [],
//
//
// }
//
// const book = lufthansa.book;
//
// // Does not work, because this points to an object...and now we are just in a funtion without one.
// // book(33, "Amber Wilke")
//
// // call method
// book.call(wings, 33, 'Amber Wilke');
//
// // apply method
// const flightData = [586, 'George Bush'];
// book.apply(wings, flightData);
// console.log(wings);
// // can also do the same thing with the spread operator
// book.call(lufthansa, ...flightData);
//
// // Bind method
// // using bind to book with wings
// const bookWings = book.bind(wings);
// bookWings(22, 'Steven Hag');
// // using bind to book with wings on a specific flight. partial application
// const bookWings23 = book.bind(wings, 23);
// bookWings23('Lick man');
//
// // With Even Listners.
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//   console.log(this);
//
//   this.planes++;
//   console.log(this.planes);
// };
//
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
//
// // partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
//
// const add20Tax = addTax.bind(null, 0.20)
// // add20Tax = value => value + value + 0.20;
// // the null is in place of the this keyword.
//
// console.log(add20Tax(100));

//////////////////////////////////////
// Coding Challenge #1

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1.
   Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/


//
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(prompt(
//       `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//     )
//     )
//     console.log(answer);
//
//     typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
//     this.displayResults('string');
//   },
//   displayResults(type= 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(this.answers.join(', '));
//     }
//   }
// }
// document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll))
//
//
// poll.displayResults.call(
//   {
//     answers: [5,5,5,5]
//   }
// );


// Immediately Invoked Function Expression(IIFE)

// (function() {
//   console.log('this will only run once');
// })();
//
// (() => console.log('This arrow function will also never happen again'))();


// Closures

// example 1
// const secureBooking = function() {
// let passCount = 0;
//
// return function() {
//   passCount++;
//   console.log(`${passCount} passengers`);
// };
// };
//
// const booker = secureBooking();
//
// booker();
// booker();
// booker();
//
// console.dir(booker);
//
//
// // example 2
//
// let f;
// const g = function() {
//   const a = 23;
//   f = function() {
//     console.log(a *2);
//   }
// }
//
// g();
// f();
//
//
// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//
//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
