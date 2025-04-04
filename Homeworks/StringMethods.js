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

function getLastNCharacters(text, n) {
    // If n is greater than the string length, return the full string
    if (n >= text.length) {
        return text;
    }
    // Use slice to get the last n characters
    return text.slice(-n);
}

// Example usage:
console.log(getLastNCharacters("Hello, World!", 6));  // Output: "World!"
console.log(getLastNCharacters("Hi", 5));           // Output: "Hi"
