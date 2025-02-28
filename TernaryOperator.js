// Task 2: Ask the user for their exam score (0-100). 
// If the score is 50 or above, print "Pass"; 
// otherwise, print "Fail". 
// Using the conditional branching if // 
// let score = 10;

// Check if score is out of valid range (less than 0 or greater than 100)
// if (score < 0 || score > 100) {
    // console.log("Invalid data");
// } else if (score >= 50) {
    // console.log("Pass");
// } else {
    // console.log("Fail");
//} 

// Using conditional operator for checking the score
// ternary operator usage
// let examScore = 49;
// let examScoreDeepCheck = examScore > 0 && examScore < 50 ? 'Fail' :  examScore < 0 || examScore > 100 ? 'invalid' : 'Pass';
// console.log(examScoreDeepCheck);

// Task 1: 
// Even or Odd Number
// Write a program that checks if a number is even or odd.
// Using the conditional branching if
let number = 1;
if (number % 2 == 0) {  // Fixed: Closing parenthesis for the if statement
    console.log("Even number");
} else {
    console.log("Odd number");
} 