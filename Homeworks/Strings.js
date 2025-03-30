// Task 1: Get String Length
// Requirement: Write a function that receives
// a string as input and returns the length of the string.

// function getStringLength(str) {
//     return str.length;
// }

// // Example usage:
// console.log(getStringLength("Hello, world!")); // Output: 13

// Task 2: Print Each Character
// Requirement: Write a function that receives a string and prints each character on a new line.
// The function should validate that the input is a string and that its length is between 1 and 50 characters.
// If the input is invalid, display an appropriate message.

// function printEachCharacter(input) {
//     // Validate that the input is a string and its length is between 1 and 50 characters
//     if (typeof input !== 'string') {
//       console.log("Error: The input must be a string.");
//       return;
//     }
  
//     if (input.length < 1 || input.length > 50) {
//       console.log("Error: The string length must be between 1 and 50 characters.");
//       return;
//     }
  
//     // Print each character on a new line
//     for (let i = 0; i < input.length; i++) {
//       console.log(input[i]);
//     }
//   }
  
//   // Example usage:
//   printEachCharacter("Hello World!");
  
// Task 3: Capitalize Name and Surname
// Requirement: Write a function that receives a string containing a name and surname.
// The function should convert the first letter of the name and surname to uppercase
// and return the updated string.
// The function should also validate that the input is a string and contains exactly two parts (name and surname).

// function capitalizeNameAndSurname(name) {
//     // Validate that input is a string
//     if (typeof name !== 'string') {
//       return 'Input must be a string';
//     }
  
//     // Split the input into parts (name and surname)
//     const nameParts = name.split(' ');
  
//     // Ensure there are exactly two parts (name and surname)
//     if (nameParts.length !== 2) {
//       return 'Input must contain exactly a name and a surname';
//     }
  
//     // Capitalize the first letter of both name and surname
//     const capitalizedParts = nameParts.map(part => 
//       part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
//     );
  
//     // Return the updated name and surname
//     return capitalizedParts.join(' ');
//   }
  
//   // Example usage
//   console.log(capitalizeNameAndSurname('john doe')); // Output: John Doe
//   console.log(capitalizeNameAndSurname('jane smith')); // Output: Jane Smith
//   console.log(capitalizeNameAndSurname('john')); // Output: Input must contain exactly a name and a surname
//   console.log(capitalizeNameAndSurname(12345)); // Output: Input must be a string
  
// Task 4: Alternate Case
// Requirement: Write a function that receives a string with a minimum length of 10
// and a maximum length of 20 characters.
// The function should return the string with characters alternated between uppercase and lowercase.
// For example, "test" should become "TeSt".
// If the string length is outside the specified range, display an appropriate message.

function alternateCase(str) {
    // Check if the string length is between 10 and 20 characters
    if (str.length < 10 || str.length > 20) {
        return "The string length must be between 10 and 20 characters.";
    }

    let result = '';

    // Iterate over the string and alternate between uppercase and lowercase
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            result += str[i].toUpperCase();
        } else {
            result += str[i].toLowerCase();
        }
    }

    return result;
}

// Example usage:
console.log(alternateCase("HelloWorld")); // Output: HeLlOwOrLd
console.log(alternateCase("Short"));      // Output: The string length must be between 10 and 20 characters.


