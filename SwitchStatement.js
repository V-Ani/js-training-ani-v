// *Task 2: Season Finder

// 1. Request the user to enter a month name (e.g., January, February).
// let monthName = "hjhjh"
// switch (monthName) {
//   case "December":
//   case "January":
//   case "February":
    // console.log(`${monthName} - Winter`);
    // break;
//   case "March":
//   case "April":
//   case "May":
    // console.log(`${monthName} - Spring`);
    // break;
//   case "June":
//   case "July":
//   case "August":
    // console.log(`${monthName} - Summer`);
    // break;
//   case "September":
//   case "October":
//   case "November":
    // console.log(`${monthName} - Autumn`);
    // break;
//   default:
    // console.log("Invalid month! Please enter a valid month name.");
//   } 

// Task 3: Determine the Age Group
let age = 126; 
switch (true) {
  case age <0:
    console.log("Invalid age");
    break;
    case age >-1 && age <= 12:
    console.log("Child");
    break;
  case age >12 && age <= 17:
    console.log("Teenager");
    break;
 case age >17 && age <= 64:
    console.log("Adult");
    break;
 case age >64 && age <= 125:
    console.log("Senior");
    break;
  default:
    console.log("Please enter a valid age.");
}

