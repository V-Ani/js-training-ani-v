// Task 1. Convert to Arrow Functions
// Requirement: Convert the given regular functions into arrow functions.

// function multiply(a, b) {
//     return a * b;
//   }
//  
  
//   function cube(n) {
//     return n * n * n;
//   }
//
  
//   function sayHello(name) {
//     return "Hello, " + name + "!";
//   }

// Arrow function for multiply
// const multiply = (a, b) => a * b;

// // Arrow function for cube
// const cube = (n) => n * n * n;

// // Arrow function for sayHello
// const sayHello = (name) => `Hello, ${name}!`;

// // Test the functions
// console.log(multiply(2, 3));  // Output: 6
// console.log(cube(3));         // Output: 27
// console.log(sayHello("John")); // Output: Hello, John!

// Task 2. Arrow Function with Default Parameters
// Requirement:
// Create an arrow function greet that takes a name parameter.
// The parameter should have a default value of "Guest".
// The function should return "Hello, [name]!".

const greet = (name = "Guest") => {
    return `Hello, ${name}!`;
  };

console.log(greet());       // Output: "Hello, Guest!"
console.log(greet("Alice")); // Output: "Hello, Alice!"

// Task 3. Calculate Percentage
// Requirement:
// Write an arrow function that takes two arguments:
// total: the total value
// percentage: the percentage to calculate
// The function should return the calculated percentage of the total.

const calculatePercentage = (total, percentage) => (total * percentage) / 100;

const total = 200;
const percentage = 15;
console.log(calculatePercentage(total, percentage));  // Output: 30
