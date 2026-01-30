// Question: Calculate the total amount after investing a principal amount for N years at an annual interest rate.
// Formula: T = P * (1 + I/100)^N
// Test Cases:
//     1. P = 1000, I = 5, N = 3 → T = 1157.63
//     2. P = 5000, I = 8, N = 6 → T = 7934.37



let input = require("readline-sync");
let P = Number(input.question("Enter your number: "));
let I = Number(input.question("Enter your number: "));
let N = Number(input.question("Enter your number: "));

let divide = I / 100 ;
let T = P * (1 + divide)**N ;

console.log(T.toFixed(2));




