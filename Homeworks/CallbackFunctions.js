// Task1: Square a Number (Simple Callback)
// Requirements:
// Write a function calculateSquare(n, callback) that takes a number n
// and calls the callback function with the square of n.

function calculateSquare(n, callback) {
    const square = n * n;
    callback(square);
  }
  
  // Example usage:
  calculateSquare(5, function(result) {
    console.log("The square is: " + result);
  });
  
  