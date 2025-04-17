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
const ShoppingCartManager = {
    cart: ["Milk", "Bread", "Eggs"],
  
    addItem(item) {
      this.cart.push(item);
      console.log(`Added "${item}" to the cart.`);
    },
  
    removeItem(item) {
      const index = this.cart.indexOf(item);
      if (index !== -1) {
        this.cart.splice(index, 1);
        console.log(`Removed "${item}" from the cart.`);
      } else {
        console.log(`Item "${item}" not found in the cart.`);
      }
    },
  
    clearCart() {
      this.cart = [];
      console.log("Cart cleared.");
    },
  
    getCart() {
      return this.cart;
    },
  
    getItemCount() {
      return this.cart.length;
    }
  };
  
  // ✅ Usage Example
  console.log("Initial Cart:", ShoppingCartManager.getCart());
  ShoppingCartManager.addItem("Butter");
  ShoppingCartManager.addItem("Cheese");
  ShoppingCartManager.removeItem("Bread");
  ShoppingCartManager.removeItem("Juice"); // Not in cart
  console.log("Current Cart:", ShoppingCartManager.getCart());
  console.log("Item Count:", ShoppingCartManager.getItemCount());
  ShoppingCartManager.clearCart();
  console.log("Final Cart:", ShoppingCartManager.getCart());
  console.log("Final Item Count:", ShoppingCartManager.getItemCount());

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
