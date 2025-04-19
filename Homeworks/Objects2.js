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
// class Task {
//     constructor(title, description) {
//       this.title = title;
//       this.description = description;
  
//       // Step 2: Create unique Symbols for taskID and status
//       this[Symbol.for('taskID')] = Math.floor(Math.random() * 1000); // random taskID
//       this[Symbol.for('status')] = 'Not Started'; // default status
//     }
  
//     // Step 3: Method to update the status
//     updateStatus(newStatus) {
//       // Use the globally unique Symbol for status
//       this[Symbol.for('status')] = newStatus;
//     }
    
//     // Method to get status, as Symbols are not directly accessible
//     getStatus() {
//       return this[Symbol.for('status')];
//     }
  
//     // Method to get taskID (Symbol)
//     getTaskID() {
//       return this[Symbol.for('taskID')];
//     }
//   }
  
//   // Step 4: Create a new Task object, set the status, and print the taskID and status
//   const task1 = new Task('Finish Assignment', 'Complete the math assignment by Friday');
  
//   // Update status using the updateStatus method
//   task1.updateStatus('In Progress');
  
//   // Accessing the symbols properly using Symbol.for for consistent symbol references
//   const taskID = task1.getTaskID();
//   const status = task1.getStatus();
  
//   // Step 5: Log the task properties (taskID and status)
//   console.log(`Task ID: ${taskID}`);
//   console.log(`Status: ${status}`);
  
//   // Check to confirm uniqueness of Symbols
//   console.log('Symbols are unique:', Symbol.for('status') !== Symbol.for('taskID'));
  
  
  // Task 4: Optional Chaining with Deeply Nested Objects
/*
Create an object representing a company and use optional chaining to safely access deeply nested properties.

Requirements:
1. Create a `company` object with the following structure:
   {
     name: "TechCorp",
     department: {
       hr: {
         manager: {
           name: "Alice",
           office: {
             floor: 5,
             number: 101
           }
         }
       },
       engineering: {
         manager: {
           name: "Bob",
           office: {
             floor: 8,
             number: 202
           }
         }
       }
     }
   }
2. Using optional chaining, access `company.department.hr.manager.office.floor` and print it to the console.
3. Also, access `company.department.sales.manager.name` (which does not exist) using optional chaining and print the result.
4. Print a message if `hr.manager` or `sales.manager` is undefined using optional chaining.
*/ 

// Create the company object
// const company = {
//     name: "TechCorp",
//     department: {
//       hr: {
//         manager: {
//           name: "Alice",
//           office: {
//             floor: 5,
//             number: 101
//           }
//         }
//       },
//       engineering: {
//         manager: {
//           name: "Bob",
//           office: {
//             floor: 8,
//             number: 202
//           }
//         }
//       }
//     }
//   };
  
//   // 1. Access and print company.department.hr.manager.office.floor using optional chaining
//   const hrOfficeFloor = company.department?.hr?.manager?.office?.floor;
//   console.log("HR Office Floor:", hrOfficeFloor); // Output: 5
  
//   // 2. Access and print company.department.sales.manager.name (which doesn't exist) using optional chaining
//   const salesManagerName = company.department?.sales?.manager?.name;
//   console.log("Sales Manager Name:", salesManagerName); // Output: undefined
  
//   // 3. Print a message if hr.manager or sales.manager is undefined using optional chaining
//   if (!company.department?.hr?.manager) {
//     console.log("HR Manager is not available.");
//   }
  
//   if (!company.department?.sales?.manager) {
//     console.log("Sales Manager is not available.");
//   }

//   HR Office Floor: 5
// Sales Manager Name: undefined
// Sales Manager is not available.

// Task 5: Constructor Function for Calculator with Objects
/*
Create a `Calculator` constructor function to perform basic arithmetic operations on object properties.

Requirements:
1. Create a constructor function `Calculator` that accepts two parameters: `num1` and `num2`.
2. Inside the constructor, assign `num1` and `num2` to `this.num1` and `this.num2`.
3. Add methods `add()`, `subtract()`, `multiply()`, and `divide()` to perform the respective operations using `this.num1` and `this.num2`.
4. Create a new `Calculator` object and perform calculations by calling these methods.
5. Print the results of each operation.
*/

// Constructor function for Calculator
// function Calculator(num1, num2) {
//     this.num1 = num1;
//     this.num2 = num2;
  
//     this.add = function () {
//       return this.num1 + this.num2;
//     };
  
//     this.subtract = function () {
//       return this.num1 - this.num2;
//     };
  
//     this.multiply = function () {
//       return this.num1 * this.num2;
//     };
  
//     this.divide = function () {
//       if (this.num2 === 0) {
//         return "Error: Division by zero";
//       }
//       return this.num1 / this.num2;
//     };
//   }
  
//   // Create a new Calculator object
//   const calc = new Calculator(10, 5);
  
//   // Perform calculations and print the results
//   console.log("Addition:", calc.add());
//   console.log("Subtraction:", calc.subtract());
//   console.log("Multiplication:", calc.multiply());
//   console.log("Division:", calc.divide());
  
// Expected Output
// Addition: 15
// Subtraction: 5
// Multiplication: 50
// Division: 2 

// Task 6: Using Nullish Coalescing (??) with Objects
/*
Create a function `getUserInfo()` that returns the user's name or a default message if the name is undefined or null.

Requirements:
1. Create an object `user` with a `name` property, which could be undefined or null.
2. Use nullish coalescing (`??`) to return the `name` property if it exists, or `"Anonymous"` if the `name` is undefined or null.
3. Call `getUserInfo()` with a `user` object where the `name` is `null` and another where the `name` is a string.
4. Print the results to demonstrate how nullish coalescing works.
*/  

// Function that uses nullish coalescing
function getUserInfo(user) {
    return user.name ?? "Anonymous";
  }
  
  // Test case 1: user with name as null
  const user1 = { name: null };
  console.log(getUserInfo(user1)); // Output: Anonymous
  
  // Test case 2: user with name as a string
  const user2 = { name: "Alice" };
  console.log(getUserInfo(user2)); // Output: Alice
  