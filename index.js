const {userInput} = require('./userInput');
const myInput = userInput("Please provide number:");
console.log(myInput);

// If the input number is 1, it should log "Monday".

// You are building a scheduling application that requires converting a numeric input (1-7) into the corresponding day of the week. The application should handle the following:

// If the input number is 1, it should log "Monday".
// If the input number is 2, it should log "Tuesday".
// If the input number is 3, it should log "Wednesday".
// If the input number is 4, it should log "Thursday".
// If the input number is 5, it should log "Friday".
// If the input number is 6, it should log "Saturday".
// If the input number is 7, it should log "Sunday".
// If the input number is outside the range of 1-7, it should return an error message: "Invalid day number. Please enter a number between 1 and 7."
// The program should be able to process this input and output the correct day, or display an error message if the number is invalid.

      let dayName;
      
      switch(dayNumber) {
        case 1:
          dayName = "Monday";
          break;
        case 2:
          dayName = "Tuesday";
          break;
        case 3:
          dayName = "Wednesday";
          break;
        case 4:
          dayName = "Thursday";
          break;
        case 5:
          dayName = "Friday";
          break;
        case 6:
          dayName = "Saturday";
          break;
        case 7:
          dayName = "Sunday";
          break;
        default:
          dayName = "Invalid day number. Please enter a number between 1 and 7.";
      }
