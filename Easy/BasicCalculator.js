// Question: Write a program that can perform addition, subtraction, multiplication, and division on two numbers.
// Test Cases:
//     1. Input: A = 12, B = 4 →
//         ◦ Addition: 16
//         ◦ Subtraction: 8
//         ◦ Multiplication: 48
//         ◦ Division: 3





let input = require("readline-sync");
let A = Number(input.question("Enter your Num: "));
let B = Number(input.question("Enter your Num: "));

console.log("Addition: ", A + B);
console.log("Subtraction: ", A - B);
console.log("Multiplication: ", A * B);
console.log("Division: ", A / B);
