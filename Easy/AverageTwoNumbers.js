// Question: Create a program that takes two numbers from the user and calculates their average.
// Test Cases:
//     1. Input: 5, 7 → Output: Average of 5 and 7 is 6
//     2. Input: 10, 20 → Output: Average of 10 and 20 is 15


let input = require("readline-sync");
let num1 = Number(input.question("Enter the first number: "));
let num2 = Number(input.question("Enter the second number: "));

let average = (num1 + num2) / 2;

console.log(average);
