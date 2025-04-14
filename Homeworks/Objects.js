// Task 1: Create a User Object
// Description:
// Create a function createUser that takes three arguments: name, age, and isAdmin.
// It should return an object with those properties and values.
// Requirements:
// - Use object literal syntax to build the object.
// - The returned object should look like: { name: 'Alice', age: 30, isAdmin: true }

// function createUser(name, age, isAdmin)

// function createUser(name, age, isAdmin) {
//     return {
//       name: name,
//       age: age,
//       isAdmin: isAdmin
//     };
//   }
  
//   // Example usage:
//   const user1 = createUser('Alice', 30, true);
//   console.log(user1);
  
//   // Output:
//   // { name: 'Alice', age: 30, isAdmin: true }
  
// Task 2: Calculate Total Sales
// Description:
// Write a function calculateTotalSales that takes a nested object representing products sold during the day.
// Each product key contains an object with price and quantitySold.
// The function should return the total revenue.
// Requirements:
// - Use a for...in loop to iterate over the object.
// - Multiply price * quantitySold for each product and sum the results.

// function calculateTotalSales(salesData) 

// function calculateTotalSales(salesData) {
//     let total = 0;
  
//     for (let product in salesData) {
//       const item = salesData[product];
//       total += item.price * item.quantitySold;
//     }
  
//     return total;
//   }
  
//   // Example usage:
//   const todaySales = {
//     apple: { price: 1.5, quantitySold: 30 },   // 1.5 * 30 = 45
//     banana: { price: 1.0, quantitySold: 20 },  // 1.0 * 20 = 20
//     orange: { price: 2.0, quantitySold: 15 }   // 2.0 * 15 = 30
//   };
  
//   const totalRevenue = calculateTotalSales(todaySales);
//   console.log("Total Revenue:", totalRevenue);
  
  // Correct Output:
  // Total Revenue: 95

//   Task 3: Convert Array to Object
// Description:
// Create a function arrayToObject that takes an array and returns an object.
// The object should have the array indexes as keys and the elements as values.
// Requirements:
// - Use a loop to build the object manually (no Object.fromEntries).
// - Return the constructed object.

// function arrayToObject(arr)

function arrayToObject(arr) {
    const result = {};
    for (let i = 0; i < arr.length; i++) {
      result[i] = arr[i];
    }
    return result;
  }

const myArray = ['apple', 'banana', 'cherry'];
const myObject = arrayToObject(myArray);

console.log(myObject);

// {
//     0: 'apple',
//     1: 'banana',
//     2: 'cherry'
//   }
  
  
  