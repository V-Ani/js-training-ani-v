// Task 1: Get String Length
// Requirement: Write a function that receives
// a string as input and returns the length of the string.

// function getStringLength(str) {
//     return str.length;
// }

// // Example usage:
// console.log(getStringLength("Hello, world!")); // Output: 13

// Task 2: Print Each Character
// Requirement: Write a function that receives a string and prints each character on a new line.
// The function should validate that the input is a string and that its length is between 1 and 50 characters.
// If the input is invalid, display an appropriate message.

function printEachCharacter(input) {
    // Validate that the input is a string and its length is between 1 and 50 characters
    if (typeof input !== 'string') {
      console.log("Error: The input must be a string.");
      return;
    }
  
    if (input.length < 1 || input.length > 50) {
      console.log("Error: The string length must be between 1 and 50 characters.");
      return;
    }
  
    // Print each character on a new line
    for (let i = 0; i < input.length; i++) {
      console.log(input[i]);
    }
  }
  
  // Example usage:
  printEachCharacter("Hello World!");
  



