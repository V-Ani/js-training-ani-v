// Task 1: Object-Based Shopping Cart Manager
/*
You should create an object `ShoppingCartManager` to manage a shopping cart.

Requirements:
1. Create an object called `shoppingCart` with an initial property `cart` (array) containing items like `["Milk", "Bread", "Eggs"]`.
2. Add a method `addItem(item)` that adds a new item to the `cart`.
3. Add a method `removeItem(item)` that removes the first occurrence of an item from the `cart`.
4. Add a method `clearCart()` that removes all items from the `cart`.
5. Add a method `getCart()` that returns the current items in the cart.
6. Add a method `getItemCount()` that returns the number of items in the cart.
7. After performing all the above operations, print the final cart and the item count.
*/

// ShoppingCartManager object definition
// const ShoppingCartManager = {
//     cart: ["Milk", "Bread", "Eggs"],
  
//     addItem(item) {
//       this.cart.push(item);
//       console.log(`Added "${item}" to the cart.`);
//     },
  
//     removeItem(item) {
//       const index = this.cart.indexOf(item);
//       if (index !== -1) {
//         this.cart.splice(index, 1);
//         console.log(`Removed "${item}" from the cart.`);
//       } else {
//         console.log(`Item "${item}" not found in the cart.`);
//       }
//     },
  
//     clearCart() {
//       this.cart = [];
//       console.log("Cart cleared.");
//     },
  
//     getCart() {
//       return this.cart;
//     },
  
//     getItemCount() {
//       return this.cart.length;
//     }
//   };
  
  // Usage Example
//   console.log("Initial Cart:", ShoppingCartManager.getCart());
//   ShoppingCartManager.addItem("Butter");
//   ShoppingCartManager.addItem("Cheese");
//   ShoppingCartManager.removeItem("Bread");
//   ShoppingCartManager.removeItem("Juice"); // Not in cart
//   console.log("Current Cart:", ShoppingCartManager.getCart());
//   console.log("Item Count:", ShoppingCartManager.getItemCount());
//   ShoppingCartManager.clearCart();
//   console.log("Final Cart:", ShoppingCartManager.getCart());
//   console.log("Final Item Count:", ShoppingCartManager.getItemCount());

//   Initial Cart: [ 'Milk', 'Bread', 'Eggs' ]
// Added "Butter" to the cart.
// Added "Cheese" to the cart.
// Removed "Bread" from the cart.
// Item "Juice" not found in the cart.
// Current Cart: [ 'Milk', 'Eggs', 'Butter', 'Cheese' ]
// Item Count: 4
// Cart cleared.
// Final Cart: []
// Final Item Count: 0  

// Task 2: Constructor Function and this
/*
Create an object-based `Person` using a constructor function.

Requirements:
1. Create a constructor function `Person` that takes `name` and `age` as parameters.
2. Inside the constructor, assign `name` and `age` to `this.name` and `this.age`.
3. Add a method `greet()` to the `Person` object that returns a message: `"Hello, my name is [name] and I am [age] years old."`
4. Create a new `Person` object and call the `greet()` method.
5. Bonus: If the person is under 18, modify the greeting to include `"I am a minor."`
*/

// 1 & 2: Constructor function for Person
// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     // 3: Add a greet method
//     this.greet = function() {
//         let message = `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//         if (this.age < 18) {
//             message += " I am a minor.";
//         }
//         return message;
//     };
// }

// // 4: Create a new Person object and call greet()
// const person1 = new Person("Alice", 25);
// console.log(person1.greet());

// // 5: Bonus - another example for a minor
// const person2 = new Person("Tommy", 15);
// console.log(person2.greet());


// Output
// Hello, my name is Alice and I am 25 years old.
// Hello, my name is Tommy and I am 15 years old. I am a minor.

// Task 3: Using Symbol for Unique Object Properties
/*
Create a task management system using `Symbol` to create unique property keys.

Requirements:
1. Create an object `Task` with a constructor that takes `title` and `description` as parameters.
2. Use `Symbol()` to create unique keys for the properties `taskID` and `status` (e.g., `"Completed"`, `"In Progress"`).
3. Add a method `updateStatus(newStatus)` to the object that updates the `status`.
4. Create a new `Task` object, set the status, and print the `taskID` and `status`.
5. Print out the task's properties to show the uniqueness of `Symbol`.
*/

// Step 1: Create a class called Task
class Task {
    constructor(title, description) {
      this.title = title;
      this.description = description;
  
      // Step 2: Create unique Symbols for taskID and status
      this[Symbol.for('taskID')] = Math.floor(Math.random() * 1000); // random taskID
      this[Symbol.for('status')] = 'Not Started'; // default status
    }
  
    // Step 3: Method to update the status
    updateStatus(newStatus) {
      // Use the globally unique Symbol for status
      this[Symbol.for('status')] = newStatus;
    }
    
    // Method to get status, as Symbols are not directly accessible
    getStatus() {
      return this[Symbol.for('status')];
    }
  
    // Method to get taskID (Symbol)
    getTaskID() {
      return this[Symbol.for('taskID')];
    }
  }
  
  // Step 4: Create a new Task object, set the status, and print the taskID and status
  const task1 = new Task('Finish Assignment', 'Complete the math assignment by Friday');
  
  // Update status using the updateStatus method
  task1.updateStatus('In Progress');
  
  // Accessing the symbols properly using Symbol.for for consistent symbol references
  const taskID = task1.getTaskID();
  const status = task1.getStatus();
  
  // Step 5: Log the task properties (taskID and status)
  console.log(`Task ID: ${taskID}`);
  console.log(`Status: ${status}`);
  
  // Check to confirm uniqueness of Symbols
  console.log('Symbols are unique:', Symbol.for('status') !== Symbol.for('taskID'));
  
  
  