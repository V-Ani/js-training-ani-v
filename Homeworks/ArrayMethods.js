// Task 1: Shopping List Manager

// You should create a function `manageShoppingList()` to manage a shopping list.

// Requirements:
// 1. Create an array called `shoppingList` with some initial items (e.g., `["Milk", "Bread", "Eggs"]`).
// 2. Add a new item `"Butter"` to the list.
// 3. Remove the last item from the list.
// 4. Add a new item `"Juice"` to the beginning of the list.
// 5. Remove the first item from the list.
// 6. Print the final shopping list after all operations.

// Example Call:
// manageShoppingList();

// initial List: ["Milk", "Bread", "Eggs"]

// Add "Butter" to the end: The list becomes ["Milk", "Bread", "Eggs", "Butter"].

// Remove the last item: "Butter" is removed, leaving ["Milk", "Bread", "Eggs"].

// Add "Juice" to the beginning: The list becomes ["Juice", "Milk", "Bread", "Eggs"].

// Remove the first item: "Juice" is removed, leaving ["Milk", "Bread", "Eggs"].

// function manageShoppingList() {
//     // Step 1: Create an initial shopping list
//     let shoppingList = ["Milk", "Bread", "Eggs"];
  
//     // Step 2: Add a new item "Butter" to the list
//     shoppingList.push("Butter");
  
//     // Step 3: Remove the last item from the list
//     shoppingList.pop();
  
//     // Step 4: Add a new item "Juice" to the beginning of the list
//     shoppingList.unshift("Juice");
  
//     // Step 5: Remove the first item from the list
//     shoppingList.shift();
  
//     // Step 6: Print the final shopping list after all operations
//     console.log(shoppingList);
//   }
  
//   // Example usage:
//   manageShoppingList();  // This will output the final shopping list after all operations
  


// // Task 2: Character Collector

// You should create a function `collectCharacters(str)` that takes a string and stores each character in an array, except for spaces.

// Requirements:
// 1. The function should accept a string as input.
// 2. It should go through each character of the string and add it to an array.
// 3. Spaces should be ignored and not added to the array.
// 4. The function should return the final array of characters.

// Example Call:
// console.log(collectCharacters("hello world"));
// // Expected output: ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]

// Function to collect characters from a string, excluding spaces
// function collectCharacters(str) {
//     // Initialize an empty array to store characters
//     const characters = [];
  
//     // Loop through each character in the string
//     for (let i = 0; i < str.length; i++) {
//       // If the character is not a space, add it to the array
//       if (str[i] !== ' ') {
//         characters.push(str[i]);
//       }
//     }
  
//     // Return the final array of characters
//     return characters;
//   }
  
//   // Example usage
//   console.log(collectCharacters("hello world"));
//   // Expected output: ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]
  
// Task 3: Store Earnings Tracker

// You should create a function `recordSale(amount)` to track store earnings and another function `getTotalEarnings()` to calculate total earnings.

// Requirements:
// 1. Create an array called `earnings` to store sale amounts.
// 2. Implement the function `recordSale(amount)`, which records a sale amount.
// 3. Implement the function `getTotalEarnings()`, which calculates and returns the total earnings.
// 4. Use `recordSale()` to add the following sales: `100`, `50`, `200`, `75`.
// 5. Call `getTotalEarnings()` and print the total earnings.

// Example Call:
// recordSale(100);
// recordSale(50);
// recordSale(200);
// recordSale(75);
// console.log(getTotalEarnings()); // Expected output: 425

// Store earnings array to track sales
// let earnings = [];

// // Function to record a sale
// function recordSale(amount) {
//     earnings.push(amount);
// }

// // Function to calculate total earnings
// function getTotalEarnings() {
//     // Use reduce to sum up the earnings
//     return earnings.reduce((total, amount) => total + amount, 0);
// }

// // Record sales
// recordSale(100);
// recordSale(50);
// recordSale(200);
// recordSale(75);

// // Get total earnings and print the result
// console.log(getTotalEarnings()); // Expected output: 425

// Task 4: Remove Duplicates from an Array

// You should create a function `removeDuplicates(arr)` that accepts an array of numbers and removes all duplicate values, 
// returning a new array with only the unique values.

// Requirements:
// 1. The function should accept an array of numbers as input.
// 2. It should remove all duplicate numbers from the array.
// 3. The function should return the new array containing only unique numbers.
// 4. You are only allowed to use simple for loops and basic array methods such as:
//    `push()`, `pop()`, `shift()`, or `unshift()` to solve this. You **cannot use methods like `sort()`, `filter()`, or `Set()`**.

// Example Call:
// console.log(removeDuplicates([11, 11, 2, 3, 4, 4, 55, 6, 2, 1]));
// // Expected output: [11, 2, 3, 4, 55, 6, 1]    

function removeDuplicates(arr) {
    let uniqueArr = [];
    
    // Loop through each element of the input array
    for (let i = 0; i < arr.length; i++) {
        // Check if the element is already in the uniqueArr
        let isDuplicate = false;
        for (let j = 0; j < uniqueArr.length; j++) {
            if (arr[i] === uniqueArr[j]) {
                isDuplicate = true;
                break;
            }
        }
        
        // If not a duplicate, add it to the uniqueArr
        if (!isDuplicate) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
}

// Example usage
console.log(removeDuplicates([11, 11, 2, 3, 4, 4, 55, 6, 2, 1]));
// Expected output: [11, 2, 3, 4, 55, 6, 1]
