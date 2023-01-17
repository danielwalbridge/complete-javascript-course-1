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
  },

  orderPasta: function(i1,i2,i3) {
    console.log(`Here is a pasta made withe the following: ${i1}, ${i2}, ${i3}`);
  },

  orderPizza: function(mainIngredient, ...others) {
    console.log(mainIngredient);
    console.log(others);
  }
};


// const pizzaPie = restaurant.orderPizza('pepporoni', ' myy ass', 'your ass');


// restaurant.orderDelivery( {
//   time: '22:30',
//   address: ' Nub club 69 420 ',
//   starterIndex: 2,
//   mainIndex: 2
// })

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

// const arr = [7,8,9];
// const badNewArr = [1,2,arr[0], arr[1], arr[2]];
// console.log(badNewArr);
//
// // using the spread opperator.
// const newArr = [1,2, ...arr];
// console.log(newArr);
// console.log(...newArr);
//
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
//
// // create a shallow copy of an array.
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);
//
// // join two arrays.
// const joinTwoArray = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(joinTwoArray);
//
// const string = ' Little B is cute';
// const letters = [...string.trim()];
// console.log(letters);
//
// restaurant.orderPasta('pizza', 'butts', 'titty');
//
// const ingredients = [prompt(`let's make pasta! select your first ingredient`), prompt(`ingredient 2`), prompt(`ingredient 3`)]
//
// console.log(ingredients);
//
// restaurant.orderPasta(...ingredients);
//
// // objects
//
// const newResturant = {...restaurant, Founder: 'Delphi'};
//
// console.log(newResturant);
//
// const restCopy = {...restaurant};
// restCopy.name = 'balls';
// console.log(restCopy);


// rest pattern
// const [a,b, ...others] = [1,2,3,4,5,6,7];
// console.log(a,b,others);
//
// const [pizza,,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);
//
// // objects
// // want to collect sat, and the rest.
//
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(sat, weekdays);
//
// // functions
//
// const add = function(...numbers) {
//   let sum = 0;
//   for (let i =0; i<numbers.length;i++) {
//     sum+=numbers[i];
//   }
//   return sum;
// }
// console.log(add(1,2,3));
// add(1,2,3,4,5);
//
// const numbersToAdd = [5,6,10];
// console.log(add(...numbersToAdd));


// const restaurant1 = {
//   name: `Lil Bears Kibble Den`,
//   numGuests: 0
// };
//
// const restaurant2 = {
//   name: `Delphi's Hog Hut `,
//   owner: `Delphi`
// };

// using short-circuiting
// restaurant1.numGuests = restaurant1.numGuests || 10;
// restaurant2.numGuests = restaurant2.numGuests || 10;

// using or assigment operator, will work, looks for falsey
// restaurant1.numGuests ||=10;
// restaurant2.numGuests ||=10;

// using the nullish assigment operator ( null or undefined)
// restaurant1.numGuests ??= 10;
// restaurant2.numGuests ??= 10;
//
// // using the and assigment operator.
// restaurant1.owner &&= 'anonymous'
// restaurant2.owner &&= 'anonymous'
//
// console.log(restaurant1);
// console.log(restaurant2);

//
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ], [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ], ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   }, };
//
// // 1. Create one player array for each team (variables 'players1' and 'players2')
// const[players1, players2] = game.players;
// console.log(players1, players2);
//
//
// // 2. The first player in any player array is the goalkeeper and the others are field players.
// // For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// const[goalkeeper, ...fieldPlayers] = players1;
// console.log(goalkeeper);
// console.log(fieldPlayers);
// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// // 4. During the game, Bayern Munich (team 1) used 3 substitute players.
// // So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// const players1Final = [...players1, 'Thiago', 'Coutinho', ' Perisic'];
// console.log(players1Final);
// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// const{team1, x: draw, team2} = game.odds;
// console.log(team1,draw, team2);
//
//
// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console,
// // along with the number of goals that were scored in total (number of player names passed in)
//
// const printGoals = function(...players) {
//   console.log(`${players.length} goals were scored`);
//
//   printGoals(...game.scored)
// }
// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
//
// team1 < team2 && console.log(`Team 1 is more likely to win`);
// team1 > team2 && logBigExpenses('Team 2 is more likely to win');
