// Task 1: Implement customForEach
// Description:
// Create a function customForEach that takes an array and a callback function.
// It should loop over each element of the array and apply the callback to each element — just like the built-in forEach() method.
// Requirements:
// Use a regular for loop or a while loop (do not use .forEach()).
// The callback should receive 3 arguments: currentValue, index, and array.

function customForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  }
  
  const fruits = ['apple', 'banana', 'cherry'];
  
  customForEach(fruits, (value, index, arr) => {
    console.log(`Index ${index}: ${value} (from [${arr}])`);
  });
  
//   Index 0: apple (from [apple,banana,cherry])
//   Index 1: banana (from [apple,banana,cherry])
//   Index 2: cherry (from [apple,banana,cherry])
  