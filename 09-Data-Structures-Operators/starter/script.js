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


// // Looping Objects: Object Keys, Values, and Entries.
//
// // prop names
// const props = Object.keys(restaurant.openingHours);
// console.log(props);
//
// let openStr = `We are open on ${props.length} days: `
// for (const day of props) {
//   openStr += `${day}, `
// }
// console.log(openStr);
//
// // prop values
// const values = Object.values(restaurant.openingHours);
// console.log(values);
//
// // entries object
// const entries = Object.entries(restaurant.openingHours)
// console.log(entries);
//
// for (const [key, {open, close}] of entries) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
// }



// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
//
// // for (const item of menu) console.log(item);
//
// //Grabbing the indexes of each item as well
// // for (const item of menu.entries()) console.log(item);
//
// // putting it all together with destructoring as well
// for (const[i, el]  of menu.entries()) {
//   console.log(`${i +1}: ${el}`);
// }

// Optional chaining (?.)
// console.log(restaurant.openingHours?.mon?.open);
//
// const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open;
//   if (open !==undefined) {
//     console.log(`on ${day} we open at ${open}`);
//   }
// }
// // checks to see if a method exists
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
//
// // Checks to see if an array is empty
// const users = [
//   {name: 'Dann', email :'hello@gmail.com'},
//   {name: 'Amber', email: 'cutie@gmail.com'}
// ];
//
// console.log(users[0]?.name ?? 'User not found');
//
// console.log(users[3]?.name ?? 'User not found');




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

// //
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
// // Coding Challenge 2.
// // 1. Loop over the game.scored array and print each player name to the console, along with the goal number
// // ( example: 'Goal 1: lewandowski').
//
// for (const [index, player] of game.scored.entries()) {
//   console.log(`Goal ${index +1}: ${player}`);
// }
//
// // 2. Use a loop to calculate the average odd and log it to the console,
// // ( we already studied  how to calculate averages, you can go check if you don't remember).
//
// let totalOdds = 0;
// for (const odd of Object.values(game.odds)) {
//   totalOdds += odd;
// }
// const averageOdd = totalOdds / Object.keys(game.odds).length;
// console.log(averageOdd);
//
// // 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// // odd of victory Bayern Munich: 1.33
// // off of draw: 3.25
// // odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game objcet, don't hard code them ( except for draw)
// // Hint: note how teh odds and the game objects have the same property name.
//
// totalOdds = 0;
// const entities = Object.entries(game.odds);
// for (const[team, odd] of entities) {
//   const teamStr = team ==='x' ? 'draw' :`victory ${game[team]}` ;
//   console.log(`Odd of ${teamStr} : ${odd}`);
// }

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

//
// // sets
// const orderSet = new Set([
//   'pasta',
//   'pizza',
//   'pizza',
// ])
//
// // grab the size
// console.log(orderSet.size);
//
// //check if something is in the set.
// console.log(orderSet.has('pizza'));
// // case sensative
// console.log(orderSet.has('Pizza'));
// //adding
// orderSet.add('Garlic Bread');
// //deleting
// orderSet.delete('pizza');
//
// // delete all ele
// // orderSet.clear();
//
// for (const order of orderSet) {
//   console.log(order);
//
// };
//
// // example from array to set
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef','waiter'];
// // creates an array using the spread operator(since it works on all iterables) from the new set.
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// //Maps
//
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Italy');
// rest.set(3, 'USA');
// console.log(rest);
//
// rest.set('catagory', ['italian', 'pizza', 'veg', 'organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, ' we are open')
//   .set(false, ' we are closed');
//
// // grabbing from key
// console.log(rest.get('name'));
// console.log(rest.get('catagory'));
//
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
//
// console.log(rest.has('catagory'));
// rest.delete(3);
//
// // won't find this array, because the objects are not the same
// rest.set([1,2], 'test')
// console.log(rest.get[1,2]);
//
// // will find because it's using the same object
// const arry = [1,2];
// rest.set(arry, 'testtt');
// console.log(rest.get(arry));
// console.log(rest.size);
//
// // maps iteration
//
// const question = new Map(
//   [
//     ['question', 'What is the best program lang in the world?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'JS'],
//     ['correct',3],
//     [true,'nice!'],
//     [false, 'not nice!']
//     ]);
// console.log(question);
//
// // convert object to map.
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);
// // quiz app.
// console.log(question.get('question'));
// for (const[key,value] of question){
//   if (typeof key ==='number') {
//     console.log(`Answer ${value}`);
//   }
// }

// Coding challenge 3

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//   [FIRST HALF] 17: ⚽️ GOAL
//
// GOOD LUCK 😀
// */
//
// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
//
// // 1
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// // 2
// gameEvents.delete(64);
// console.log(gameEvents);
//
// // 3
// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes `);
//
// // 4
// for (const [key, event] of gameEvents) {
//   const half = key <= 45 ? 'FIRST': 'SECOND';
//   console.log(`[${half} HALF] ${key}: ${event}`);
//
// };
