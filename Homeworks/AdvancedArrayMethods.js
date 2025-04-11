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

// function customMap(array, callback) {
//     const result = []; // New array to hold the mapped values
//     for (let i = 0; i < array.length; i++) {
//       result.push(callback(array[i], i, array));
//     }
//     return result;
//   }

// const numbers = [1, 2, 3, 4];
// const doubled = customMap(numbers, num => num * 2);
// console.log(doubled); // Output: [2, 4, 6, 8]

// Task 3: Implement customReverse
// Description:
// Create a function customReverse that reverses the elements of an array and returns the reversed array.
// Requirements:
// Do not use .reverse().
// You may use a loop or swap elements manually.
// Should not use built-in methods that directly reverse arrays.

// function customReverse(array)

// function customReverse(array) {
//     // Initialize two pointers: one at the start and one at the end of the array
//     let start = 0;
//     let end = array.length - 1;

//     // Loop until the two pointers meet in the middle
//     while (start < end) {
//         // Swap the elements at start and end
//         let temp = array[start];
//         array[start] = array[end];
//         array[end] = temp;

//         // Move the pointers towards the center
//         start++;
//         end--;
//     }

//     // Return the reversed array
//     return array;
// }

// let arr = [1, 2, 3, 4, 5];
// let reversedArr = customReverse(arr);

// console.log(reversedArr);  // Output: [5, 4, 3, 2, 1]

// Task 4: Implement Bubble Sort
// Description:
// Write a function that sorts an array of numbers using the bubble sort algorithm.
// Requirements:
// Do not use .sort().
// Implement the bubble sort algorithm using loops.
// Return the sorted array.

// function bubbleSort(array)

// Bubble Sort function
// function bubbleSort(array) {
//     let n = array.length;
    
//     // Outer loop to go through all elements
//     for (let i = 0; i < n - 1; i++) {
//         // Inner loop to compare adjacent elements
//         for (let j = 0; j < n - i - 1; j++) {
//             // If the current element is greater than the next element, swap them
//             if (array[j] > array[j + 1]) {
//                 let temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }
//     return array;
// }

// // Example usage
// const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
// const sortedArray = bubbleSort(unsortedArray);

// console.log("Sorted Array: ", sortedArray);

// Example Output:
// For the input array [64, 34, 25, 12, 22, 11, 90], the output will be:
// Sorted Array:  [11, 12, 22, 25, 34, 64, 90]

// Task 5: Implement customReduce
// Description:
// Create a function customReduce that takes an array, a callback function, and an optional initial value.
// It should apply the callback to accumulate a single result from the array elements — just like the built-in reduce() method.
//
// Requirements:
// - If an initialValue is provided, use it as the starting accumulator and begin iteration from index 0.
// - If no initialValue is provided, use the first element of the array as the accumulator and start from index 1.
// - The callback should receive 4 arguments: accumulator, currentValue, index, and array.
// - Return the final accumulated value.
// - Do not use the built-in .reduce() method.
// - If the array is empty and no initialValue is provided, return undefined.

// function customReduce(array, callback, initialValue)

function customReduce(array, callback, initialValue) {
    // If the array is empty and no initial value is provided, return undefined
    if (array.length === 0 && initialValue === undefined) {
        return undefined;
    }

    let accumulator;
    let startIndex;

    // If an initial value is provided, use it as the starting accumulator
    if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        // Otherwise, use the first element of the array as the starting accumulator
        accumulator = array[0];
        startIndex = 1;
    }

    // Iterate over the array and apply the callback function
    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    // Return the final accumulated value
    return accumulator;
}

// Example Usage

const numbers = [1, 2, 3, 4, 5];

// Example 1: Using an initial value
const sumWithInitialValue = customReduce(numbers, (acc, current) => acc + current, 0);
console.log(sumWithInitialValue);  // Output: 15 (1 + 2 + 3 + 4 + 5)

// Example 2: Without an initial value
const sumWithoutInitialValue = customReduce(numbers, (acc, current) => acc + current);
console.log(sumWithoutInitialValue);  // Output: 15 (1 + 2 + 3 + 4 + 5)

// Example 3: Using an initial value with strings
const concatenatedString = customReduce(['a', 'b', 'c'], (acc, current) => acc + current, '');
console.log(concatenatedString);  // Output: "abc"

// Example 4: Empty array with no initial value (should return undefined)
const emptyArrayResult = customReduce([], (acc, current) => acc + current);
console.log(emptyArrayResult);  // Output: undefined

