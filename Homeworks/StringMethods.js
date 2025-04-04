// Task 1: Check for a Forbidden Word (Using includes)
// Write a function containsForbiddenWord(text, forbiddenWord)
// that checks if a given string contains a specific forbidden word.
// The function should return true if the word is found, otherwise false.
// Requirements:
// The function should be case-insensitive.
// Use includes() to check for the word presence.

// We first convert both the text and the forbiddenWord to lowercase to make the search case-insensitive.

// The includes() method is used to check if the text contains the forbiddenWord.

// The function returns true if the word is found, otherwise false.

// function containsForbiddenWord(text, forbiddenWord) {
//     // Convert both text and forbiddenWord to lowercase for case-insensitivity
//     const lowerText = text.toLowerCase();
//     const lowerForbiddenWord = forbiddenWord.toLowerCase();

//     // Check if the text includes the forbidden word
//     return lowerText.includes(lowerForbiddenWord);
// }

// // Example usage:
// const text = "This is a simple example sentence.";
// const forbiddenWord = "example";

// console.log(containsForbiddenWord(text, forbiddenWord)); // Output: true

// const forbiddenWord2 = "test";
// console.log(containsForbiddenWord(text, forbiddenWord2)); // Output: false

// Task 2: Get Last N Characters of a String (Using slice)
// Write a function getLastNCharacters(text, n)
// that extracts the last n characters of a string using slice().
// Requirements:
// If n is greater than the string length, return the full string.
// Use slice() to extract the portion.

// function getLastNCharacters(text, n) {
//     // If n is greater than the string length, return the full string
//     if (n >= text.length) {
//         return text;
//     }
//     // Use slice to get the last n characters
//     return text.slice(-n);
// }

// // Example usage:
// console.log(getLastNCharacters("Hello, World!", 6));  // Output: "World!"
// console.log(getLastNCharacters("Hi", 5));           // Output: "Hi"

// Task 3: Extract the Middle Part of a String (Using substring)
// Write a function extractMiddle(text) that returns the middle portion of a string.
// If the string length is even, return the middle two characters.
// If the string length is odd, return only the middle character.
// Requirements:
// Use substring() to extract the middle part of the string.
// The function should handle both even and odd lengths.

function extractMiddle(text) {
    const length = text.length;
    const middle = Math.floor(length / 2);
  
    if (length % 2 === 0) {
      // Even length: return the middle two characters
      return text.substring(middle - 1, middle + 1);
    } else {
      // Odd length: return the middle character
      return text.substring(middle, middle + 1);
    }
  }
  
  // Example usage:
  console.log(extractMiddle("hello")); // "l"
  console.log(extractMiddle("abcdef")); // "cd"
  
