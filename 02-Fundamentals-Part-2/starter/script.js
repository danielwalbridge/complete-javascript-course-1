 'use strict';


/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(" I can drive")

 // strict mode will not allow us to use reserved words for variables
 const interface =' butt'
 */

 /*
  function logger() {
     console.log('my cat Delphi is very thicc')
 }

 logger();
 logger();

 function fruitProcessor(amountOfApples, amountOfOranges) {
     console.log(amountOfApples, amountOfOranges)
     const juice = `juice with ${amountOfApples} apples and ${amountOfOranges} oranges.`
     return juice
 }

 fruitProcessor(6,19);
  */


 /*
  function calcAgeDec(birthYear) {
     return 2037 - birthYear;
 }

 const ageFromDec = calcAgeDec(1992);
 console.log(ageFromDec)

 // anon function

 const ageFromAnon = function (birthYear) {
     return 2037 - birthYear;
 }

const age2FromAnon = ageFromAnon(2000);

 console.log(age2FromAnon)
  */

/*
// function expression
 const ageFromAnon = function (birthYear) {
     return 2037 - birthYear;
 }
 // arrow function
 const arrowAge = birthYear => 2037 - birthYear;

 const myAge = arrowAge(1992);
 console.log(myAge)

 const yearsBeforeRetire = (birthYear, firstName) => {
     const age = 2037 - birthYear;
     const retire = 65 - age;
     return `${firstName} has ${retire} years until they can retire`;
 }
 console.log(yearsBeforeRetire(2000, 'Lil Bear'))
 */

 /*
 Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!


Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console,
together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time
Test data:
§ Data 1:
 Dolphins score 44, 23 and 71.
 Koalas score 65, 54 and 49 §
 Data 2:
  Dolphins score 85, 54 and 41.
  Koalas score 23, 34 and 27
  */

 /*
  const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
 const dolphinsAverage = calcAverage(85,54,41);
 const koalaAverage = calcAverage(23,34,27);
 console.log(dolphinsAverage, koalaAverage)

 function checkWinner(avgDolphins, avgKoalas) {
     if (avgDolphins >= avgKoalas *2) {
         console.log(`Dolphins win with (${avgDolphins} vs. ${avgKoalas}`);
     } else if (avgKoalas >= avgDolphins *2) {
         console.log(`Koalas win with (${avgKoalas} vs. ${avgDolphins}`);
     }
     else {
         console.log(` aint no one win `)
     }
 }

 checkWinner(dolphinsAverage, koalaAverage)
  */