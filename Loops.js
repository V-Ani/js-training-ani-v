// 1. While Loop Task – Reverse Counting
// Requirements:

// Start from 10 and count down to 1.
// Use a while loop.
// Print each number in the console.

let num = 10;
while (num >= 1) {
  console.log(num);
  num--; 
}

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

// You should ask here for a user input here using the userInput() function 
// The loop should continue executing until the user inputs a number < 0
// But your loop iterates 10 times and does not asks for user input

// console.log("Loop has ended. You entered a negative number.");

// 3. For Loop Task – Multiplication Table
// Requirements:

// Choose a number (e.g., 5).
// Use a for loop to print the multiplication table from 1 to 10.
// Print the result in the format: 5 x 1 = 5.
// Choose a number (e.g., 5)

let number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// 4. Break Statement Task – Find the First Multiple of 7
// Requirements:

// Use a for loop to check numbers from 1 to 50.
// Find the first number that is a multiple of 7.
// Print the number and exit the loop using break.

for (let i = 1; i <= 50; i++) {
if (i % 7 === 0) {
console.log(i);
break;
}
}

// 5. Continue Statement Task – Skip Multiples of 3
// Requirements:

// Use a for loop to print numbers from 1 to 20.
// If a number is a multiple of 3, skip it using continue.
// Print the rest of the numbers normally.

for (let i = 1; i <= 20; i++) {
if (i % 3 === 0) {
continue;
}
console.log(i);
}

// 6. Nested Loop Task – Print a Square of Stars
// Requirements:

// Use nested for loops to print a square pattern of stars (*).
// The square should have a size of 4x4 (4 rows and 4 columns).
// Your output should be:
//   * * * *
//   * * * *
//   * * * *
//   * * * *

for (let i = 0; i < 4; i++) {
  let row = '';
  for (let j = 0; j < 4; j++) {
      row += '* ';  
  }
  console.log(row);  
}

