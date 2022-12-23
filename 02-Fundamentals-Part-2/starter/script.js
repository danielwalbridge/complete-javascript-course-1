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
 // const friends = ["Delphi", "Little Bear"];
 // console.log(friends)
 // console.log(friends[0])
 // console.log(friends.length)
 //
 // friends.push("Amber");
 // console.log(friends)
 // friends.unshift("Porky")
 // console.log(friends)
 // console.log(friends.pop())
 // console.log(friends.shift())
 // console.log(friends.indexOf("Delphi"))

 /*
 Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before:
 Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip,
calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to).
 Use the function type you like the most. Test the function using a bill value of 100

2. And now let's use arrays! So create an array 'bills' containing the test data below

3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before

4. Bonus:Create an array 'total' containing the total values, so the bill+tip

Test data: 125, 555 and 44
  */


 const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill *.15 : bill *.20
 }

 const bills = [125, 555, 44];

 const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
 console.log(tips)

 const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
 console.log(totals)