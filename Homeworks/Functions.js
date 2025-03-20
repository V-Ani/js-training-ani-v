// Task 1: Function Declaration
// Requirement: Declare a function using the function declaration syntax.
// The function should accept two parameters: 'firstName' and 'lastName',
// and return a full name by combining both parameters with a space in between.



// function getFullName(firstName, lastName) {
//     return firstName + " " + lastName;
//   }

//   let fullName = getFullName("Ani", "Vardanyan")
//   console.log(fullName) 

// Task 2: Function Expression
// Requirement: Declare a function using a function expression.
// The function should accept a number as a parameter and return whether the number is even or odd.

  const checkEvenOrOdd = function(num) {
    if (num % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  };
  
  console.log(checkEvenOrOdd(4)); 
  console.log(checkEvenOrOdd(7));  

  
