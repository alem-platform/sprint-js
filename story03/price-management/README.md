# Price Management

Create a price management system using closure chains. The system should maintain a base price and allow different discounts to modify it while keeping the base price private and secure.

### Instructions

- Write a function `priceManagement` that creates a closure-based system for managing product pricing with different discount types. The base price should not be directly accessible from outside the function.

### Requirements:

- The base price should be private and only modifiable through specific discount functions
- Implement multiple discount types (silver - 10%, gold - 20%, platinum - 50%) using closure chains
- Each discount should apply a different discount percentage to the base price, it is possible to call for multiple different discount types, which should be added up. Consider that it's prohibited to apply one discount type more than ones.
- Include functions to:
  - Get the round current price (to the nearest integer) after any changes (getCurrentPrice).
  - Modify the base price for admin purposes (setBasePrice)
  - Apply different discount tiers (modifyPrice)
  - Discard all discounts (resetPrice)
- Return 'Invalid discount type' in case of invalid discount type in modifyPrice function call
- Return 'Invalid price' in case of invalid price. Only positive number are allowed in setBasePrice function call

### Starting Code:

```js
function priceManagement(initialPrice) {
  // ...
  function modifyPrice(...args) {
    // Implement closure chains for different discount types
  }
  function getCurrentPrice() {
    // Return current actual price
  }
  function setBasePrice(...args) {
    // Implement closure chain for changing base price
  }
  function resetPrice() {
    // Discard all discounts implemented for base price
  }

  return {
    // ...
  };
}
```

### Example:

```js
const product = priceManagement(100);

console.log(product.getCurrentPrice()); // Output: 100
product.modifyPrice("silver"); // Applies 10% discount
console.log(product.getCurrentPrice()); // Output: 90
product.modifyPrice("gold"); // Applies 20% discount
console.log(product.getCurrentPrice()); // Output: 70
product.modifyPrice("platinum"); // Applies 50% discount
console.log(product.getCurrentPrice()); // Output: 20
product.modifyPrice("platinum"); // Output: 'Discount type already implemented'
product.setBasePrice(200); // Change base price to 200
console.log(product.resetPrice()); // 100
```
