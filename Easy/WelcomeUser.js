// Question: Ask the user for their name and display a welcome message.
// Test Cases:
//     1. Input: Alice → Output: Welcome Alice
//     2. Input: Bob → Output: Welcome Bob


let input = require("readline-sync");
let name = String(input.question("Enter your Name: "));

console.log("Welcome " + name);
