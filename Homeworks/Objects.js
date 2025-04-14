// Task 1: Create a User Object
// Description:
// Create a function createUser that takes three arguments: name, age, and isAdmin.
// It should return an object with those properties and values.
// Requirements:
// - Use object literal syntax to build the object.
// - The returned object should look like: { name: 'Alice', age: 30, isAdmin: true }

// function createUser(name, age, isAdmin)

function createUser(name, age, isAdmin) {
    return {
      name: name,
      age: age,
      isAdmin: isAdmin
    };
  }
  
  // Example usage:
  const user1 = createUser('Alice', 30, true);
  console.log(user1);
  
  // Output:
  // { name: 'Alice', age: 30, isAdmin: true }
  