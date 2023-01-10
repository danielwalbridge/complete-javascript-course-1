'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery: function({ starterIndex, mainIndex, time, address }) {
    console.log(starterIndex, mainIndex,time, address);
  }
};

restaurant.orderDelivery( {
  time: '22:30',
  address: ' Nub club 69 420 ',
  starterIndex: 2,
  mainIndex: 2
})

// let [main,, third] = restaurant.categories;
// console.log(main, third);
// console.log();
//
// // swapping varibles with deconstructing.
// [main, third] = [third, main];
// console.log(main, third);
//
// // 2 return values from a function with deconstruction.
// const [starterOrder, mainOrder] = restaurant.order(0,0)
// console.log(`you have placed an order of ${starterOrder} from our starter menu
// and ${mainOrder} from our main menu`);
//
//
// const nested = [2,4,[1,2]];
// const[firstN, secondN, thridN] = nested;
// console.log(firstN, secondN, thridN);
// const [,,[innerOne, innerTwo]] = nested;
// console.log(innerOne, innerTwo);
//
// // default values
//
// const [p=1,q=1,r=1] = [44,5];
// console.log(p,q,r);

// const {name, openingHours} = restaurant;
// console.log(name, openingHours);
//
// const{name: resturantName} = restaurant
// console.log(resturantName);
//
// const{menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters
// );
//
// // mutating variables
// let a = 11;
// let b = 999;
// const obj = {
//   a: 23,
//   b: 7,
//   c:14
// };
// console.log(a,b);
// // if we want to mutate an object we first need to put it inside () ---- This is because we can't start a line with {} since JS will think its a block
// ({a,b} = obj);
// console.log(a,b);
//
// // nested objects.
// const {fri: {open,close}} = restaurant.openingHours;
// console.log(open,close);
