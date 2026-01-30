// Question: Write a program to swap the values of two variables.
// Test Cases:
//     1. Input: A = 10, B = 20 → Output: A = 20, B = 10


let input = require("readline-sync");
let A = Number(input.question("Enter your first number: "));
let B = Number(input.question("Enter your second number: "));

let temp = A ;
A = B
B = temp ;

console.log(A, B);
