// Question: Calculate the diameter of a circle given the circumference. (Use π = 3.14)
// Test Cases:
//     1. Circumference = 10 → Diameter = 3.183
//     2. Circumference = 25.12 → Diameter = 8
//     3. Circumference = 37.699 → Diameter = 12

let input = require("readline-sync");
let Num = input.question("Enter your Num: ");

let PI = 3.14 ;
let diameter = Num / PI ;

console.log(diameter);

