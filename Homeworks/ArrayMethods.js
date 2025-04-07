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

function manageShoppingList() {
    // Step 1: Create an initial shopping list
    let shoppingList = ["Milk", "Bread", "Eggs"];
  
    // Step 2: Add a new item "Butter" to the list
    shoppingList.push("Butter");
  
    // Step 3: Remove the last item from the list
    shoppingList.pop();
  
    // Step 4: Add a new item "Juice" to the beginning of the list
    shoppingList.unshift("Juice");
  
    // Step 5: Remove the first item from the list
    shoppingList.shift();
  
    // Step 6: Print the final shopping list after all operations
    console.log(shoppingList);
  }
  
  // Example usage:
  manageShoppingList();  // This will output the final shopping list after all operations
  
