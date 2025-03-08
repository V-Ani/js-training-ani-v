// 1. While Loop Task – Reverse Counting
// Requirements:

// Start from 10 and count down to 1.
// Use a while loop.
// Print each number in the console.

// let num = 10;
// while (num >= 1) {
  // console.log(num);
  // num--; 
// }

//  2. Do-While Loop Task – User Input Until Negative Number
// Requirements:

// Continuously ask the user to enter a number.
// Stop asking when the user enters a negative number.
// Use a do-while loop.
// Print each entered number.
// After exiting, print a message indicating the loop has ended.

let number;
let counter = 10; 
do {
  number = counter;
  console.log("You entered: " + number);
  counter--;
} while (number >= 0); 

console.log("Loop has ended. You entered a negative number.");




