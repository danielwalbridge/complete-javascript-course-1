// let js = 'amazing';
// if (js ==='amazing') alert('nice');
/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);
// dynamic typing of js, allowing us to change the data type assigned to javaScript is fun
javaScriptIsFun = "YES"
console.log(typeof javaScriptIsFun);
// defined a var without a value'
let year;
console.log(typeof year)
 */


/*
// let, const, var.
let age = 30;
// mutate the age variable
age =31;
// because let is a mutable variable, we can declare empty variables
let puppyName;
const birthYear = 1992;
// non-mutable variables when using const.
// because const is non-mutable we are unable to declare empty variables
// birthYear = 1993;
 */

/*
const now = 2037;
const ageDann = now-1992;
const ageAmber = now-1996;
console.log(ageDann, ageAmber, 2**3);
// 2**3 is 2 to the power of 3.

const firstName = 'delphi';
const lastName = 'the bean';

console.log(firstName + " " + lastName);

let x = 10 +5;
console.log(x);
x += 10; // x = x  + 10
console.log(x);
x++; // X= x+1
console.log(x);

// comparison operators
// <, > , >=, <=
 */


/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI)
 */


// Template literals
/*
const firstName = 'Dann';
const lastName = 'Walbridge';
const amountOfCats = 2;

const dannNew = ` I'm ${firstName} ${lastName} and I have ${amountOfCats} cats`
console.log(dannNew)
 */


/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉


 */
 /*

const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI)

if (markBMI > johnBMI) {
    console.log(` Mark's BMI is higher than John's!
    Mark's BMI is ${markBMI} and John's BMI is ${johnBMI},
    that is a difference of ${markBMI - johnBMI}`)
} else {
    console.log(` Johns's BMI is higher than Mark's!
    John's BMI is ${johnBMI} and Mark's BMI is ${markBMI},
    that is a difference of ${johnBMI - markBMI}`)
}
*/


// let n = '1' - 1; // will see the - and coercion will take place with Number() : giving us 0 as a number
// console.log(n)
// console.log(typeof n)
//
// let m = '1' +1 // will see the + and coercion will take place with String() : giving us 11 as a string
// console.log(m)
// console.log(typeof m)


// truthy falsey

// 5 types of falsy values
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
//
// // all others should be true
// console.log(Boolean(1));
// console.log(Boolean("1"));
// console.log(Boolean({}));
//
// const money = 0;
//
// if (money) {
//     console.log(`Hell yeah boy, got got stacks and racks on stack my guy : ${money}`)
// } else {
//     console.log(`Yeesh, no money in the bank baller`)
// }
//
// // check if something exists
//
// let height;
// if (height) {
//     console.log(`Oh we got that height boy : ${height}`)
// } else {
//     console.log('we aint got non playa ')
// }


// const age =18;
// if (age ===18) console.log("nice")

// we can take in the user input from the prompt and save it.
// this will give us a string
// const favNumber = prompt("what is your fav number?");
// console.log(favNumber);
// we can capture the prompt in a number and compare
// if (favNumber == 17) {
//     console.log("loose opp. String and number are loosely equal ")
// }


// we can wrap the prompt in a Number() to convert to number and use strict operator
// const favNumberStrict =Number(prompt("what is your fav number?"));
// console.log(favNumberStrict);
//
// console.log(typeof favNumberStrict);
// if (favNumberStrict === 69) {
// console.log("my man!")
// }

// Boolean Logic
/*
-And
-OR
-NOT

 */

/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team,using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus1:Include a requirement for a minimum score of 100. With this rule,a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.
Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus2:Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points.
 Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 */
//
// const dolphinesScore1 = 99;
// const dolphinesScore2 = 99;
// const dolphinesScore3 = 99;
// const dolphinesAvg = (dolphinesScore1 + dolphinesScore2 + dolphinesScore3) / 3
// console.log(`Dolphins avg score is ${dolphinesAvg}`)
//
// const koalasScore1 = 99;
// const koalasScore2 = 99;
// const koalasScore3 = 99;
// const koalaAvg = (koalasScore1 + koalasScore2 + koalasScore3) /3
// console.log(`koalas avg score is ${koalaAvg}`)
//
//
//
// if (dolphinesAvg > koalaAvg && dolphinesAvg >= 100) {
//     console.log("Dolphines win")
// }
// else if (dolphinesAvg === koalaAvg && dolphinesAvg >= 100) {
//     console.log("A tie")
// }
// else if(koalaAvg > dolphinesAvg && koalaAvg >= 100) {
//     console.log("Koalas win")
// }
// else {
//     console.log(`no one wins`)
// }

// switch
//
// const day = 'monday';
//
// switch (day) {
//     case 'monday':
//         console.log(`ah yeah it's monday`)
// }

// ternary ( conditional ) operator

// const age = 19;
// // age >= 18 ? console.log("I like to drink wine") :
// //     console.log(" i Like to drink water");
//
// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink)
//
// console.log(` I like to drink ${age >= 18 ? 'wine': 'water'} when I snack ass`)

/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant.
 In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip,depending on the bill value. Create a variable called 'tip' for this.
It's not allowed to use an if/else statement 😅
(If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip,and the final value (bill + tip).
 Example: “The bill was 275, the tip was 41.25, and the total value 316.25”


Test data:
§ Data 1: Test for bill values 275, 40 and 430 Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's>= 50 && <= 300😉
 */

// const billAmount = 40;
// const tip = billAmount >= 50 && billAmount <=300 ? billAmount * (15/100) : billAmount * (20/100)
// console.log(tip)
// console.log(`The bill was ${billAmount}, the tip was ${tip}, and the total value is ${billAmount+tip}`)