// Question: Create a program that asks the user for two numbers, adds them together, and displays the result.
// Test Cases:
//     1. Input: 5, 3 → Output: Sum: 8
//     2. Input: -2, 7 → Output: Sum: 5


let input = require("readline-sync");

let N = Number(input.question("Enter your first number: "));
let M = Number(input.question("Enter your second number: "));

let ans = N + M;
console.log("Sum :", ans);

