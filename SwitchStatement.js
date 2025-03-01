// Task 2: Season Finder

// 1. Request the user to enter a month name (e.g., January, February).
let monthName = "March"
switch (monthName) {
  case "December":
  case "January":
  case "February":
    console.log(`${monthName} - Winter`);
    break;
  case "March":
  case "April":
  case "May":
    console.log(`${monthName} - Spring`);
    break;
  case "June":
  case "July":
  case "August":
    console.log(`${monthName} - Summer`);
    break;
  case "September":
  case "October":
  case "November":
    console.log(`${monthName} - Autumn`);
    break;
  default:
    console.log("Invalid month! Please enter a valid month name.");
}
