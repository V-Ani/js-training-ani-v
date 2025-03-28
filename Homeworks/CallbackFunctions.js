// Task1: Square a Number (Simple Callback)
// Requirements:
// Write a function calculateSquare(n, callback) that takes a number n
// and calls the callback function with the square of n.

// function calculateSquare(n, callback) {
//     const square = n * n;
//     callback(square);
//   }
  
//   // Example usage:
//   calculateSquare(5, function(result) {
//     console.log("The square is: " + result);
//   });

//   Task 2: Login Status (Simple Callback)
// Requirements:
// Write a that checks if the provided username and password match the correct credentials.
// The function should call the callback function with a message indicating
// whether the user is logged in or if the credentials are wrong.

// function checkLogin(username, password, callback) {
//     // Correct credentials (can be replaced with real data)
//     const correctUsername = "user123";
//     const correctPassword = "password123";
  
//     // Check if username and password match
//     if (username === correctUsername && password === correctPassword) {
//       callback("Login successful!");
//     } else {
//       callback("Incorrect username or password.");
//     }
//   }
  
//   // Example usage:
//   checkLogin("user123", "password123", function(message) {
//     console.log(message);  // Outputs: Login successful!
//   });
  
//   checkLogin("user123", "wrongpassword", function(message) {
//     console.log(message);  // Outputs: Incorrect username or password.
//   });

// Task 3: Sum of Numbers (Using for Loop and Callback)
// Requirements:
// Write a function sumNumbersUpTo(n, callback) that takes a number n
// and calculates the sum of numbers from 1 to n using a for loop.
// After the calculation, call the callback function with the result.

// Function to sum numbers from 1 to n and call the callback with the result
function sumNumbersUpTo(n, callback) {
    let sum = 0;
    
    // Loop through numbers from 1 to n and sum them up
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  
    // Call the callback function with the result
    callback(sum);
  }
  
  // Example callback function that logs the result
  function displayResult(result) {
    console.log("The sum is: " + result);
  }
  
  // Test the function
  sumNumbersUpTo(5, displayResult); // The sum is: 15
  
  