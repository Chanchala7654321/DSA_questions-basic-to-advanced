

// Question: Swap the values of two variables without using a third variable.
// Test Cases:
//     1. Input: A = 10, B = 20 → Output: A = 20, B = 10




let input = require("readline-sync");
let A = Number(input.question("Enter your first number: "));
let B = Number(input.question("Enter your second number: "));

A = A + B;
B = A - B;
A = A - B;

console.log(A, B);