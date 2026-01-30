// Question: Write a program to calculate the area of a triangle given its base and height.
// Test Cases:
//     1. Base = 6, Height = 4 → Area: 12
//     2. Base = 9, Height = 7 → Area: 31.5
//     3. Base = 12, Height = 8 → Area: 48



let input = require("readline-sync");
let Base = Number(input.question("Enter the Base number: "));
let Height = Number(input.question("Enter the Height number: "));

let ans = (Base * Height) / 2;

console.log(ans);

