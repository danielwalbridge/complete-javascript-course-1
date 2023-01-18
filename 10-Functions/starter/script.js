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
