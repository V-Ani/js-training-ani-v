// Task 1: Get the First and Last Elements of an Array
// Write a function getFirstAndLast(arr) that returns
// the first and last elements of the given array as separate values.
// Requirements:
// The function should return two values: the first and last elements.
// If the array has only one element, return that element as both the first and last element.
// Assume the array will always have at least one element.

function getFirstAndLast(arr) {
    // Return the first and last elements of the array
    return arr.length === 1 ? [arr[0], arr[0]] : [arr[0], arr[arr.length - 1]];
  }
  
  // Example usage:
  console.log(getFirstAndLast([1, 2, 3])); // [1, 3]
  console.log(getFirstAndLast([5])); // [5, 5]
  