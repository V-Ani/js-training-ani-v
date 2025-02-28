//Task1
// Check Positive, Negative, or Zero
// Write a program that takes a number as input and checks if it is positive, negative, or zero.
// Write your code here
let num = 15;
if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
//Task2
// Grade Calculator
// Write a program that takes a student's score (0-100) and assigns a letter grade:
let score = 70;
if (score >= 90 && score <= 100) {
    console.log("The grade is: A");
} else if (score >= 80 && score < 90) {
    console.log("The grade is: B");
} else if (score >= 70 && score < 80) {
    console.log("The grade is: C");
} else if (score >= 60 && score < 70) {
    console.log("The grade is: D");
} else if (score >= 0 && score < 60) {
    console.log("The grade is: F");
} else {
    console.log("Invalid Score. Please enter a number between 0 and 100.");
} 