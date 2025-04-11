// Task 1: Implement customForEach
// Description:
// Create a function customForEach that takes an array and a callback function.
// It should loop over each element of the array and apply the callback to each element — just like the built-in forEach() method.
// Requirements:
// Use a regular for loop or a while loop (do not use .forEach()).
// The callback should receive 3 arguments: currentValue, index, and array.

// function customForEach(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//       callback(array[i], i, array);
//     }
//   }
  
//   const fruits = ['apple', 'banana', 'cherry'];
  
//   customForEach(fruits, (value, index, arr) => {
//     console.log(`Index ${index}: ${value} (from [${arr}])`);
//   });
  
//   Index 0: apple (from [apple,banana,cherry])
//   Index 1: banana (from [apple,banana,cherry])
//   Index 2: cherry (from [apple,banana,cherry])
  
// Task 2: Implement customMap
// Description:
// Write a function customMap that works like Array.prototype.map().
// It should return a new array with the results of applying a given function to every element in the input array.
// Requirements:
// Do not use .map().
// Use your own logic with a loop.
// Must return a new array (do not modify the original array).

// function customMap(array, callback)

function customMap(array, callback) {
    const result = []; // New array to hold the mapped values
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  }

  const numbers = [1, 2, 3, 4];
const doubled = customMap(numbers, num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
