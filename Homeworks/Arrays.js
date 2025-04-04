// Task 1: Get the First and Last Elements of an Array
// Write a function getFirstAndLast(arr) that returns
// the first and last elements of the given array as separate values.
// Requirements:
// The function should return two values: the first and last elements.
// If the array has only one element, return that element as both the first and last element.
// Assume the array will always have at least one element.

// function getFirstAndLast(arr) {
//     // Return the first and last elements of the array
//     return arr.length === 1 ? [arr[0], arr[0]] : [arr[0], arr[arr.length - 1]];
//   }
  
//   // Example usage:
//   console.log(getFirstAndLast([1, 2, 3])); // [1, 3]
//   console.log(getFirstAndLast([5])); // [5, 5]
  
//   Task 2: Get the Second Element in an Array
  // Write a function getSecondElement(arr) that returns the second element of the array.
  // Requirements:
  // The second element is at index 1.
  // If the array has fewer than two elements,
  // throw an error with the message "Array should have a minimum of 2 elements.".

function getSecondElement(arr) {
    if (arr.length < 2) {
        throw new Error("Array should have a minimum of 2 elements.");
    }
    return arr[1];
}

// Example usage
console.log(getSecondElement([10, 20, 30]));  // This will log 20
console.log(getSecondElement([5])); // This will log "Array should have a minimum of 2 elements."