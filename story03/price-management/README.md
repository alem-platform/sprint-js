# Price Management

| Expected file       |
| ------------------- |
| price-management.js |

Create a price management system using closure chains. The system should maintain a base price and allow different discounts to modify it while keeping the base price private and secure.

### Instructions

- Write a function `priceManagement` that creates a closure-based system for managing product pricing with different discount types. The base price should not be directly accessible from outside the function.

### Requirements:

- The base price should be private and only modifiable through specific discount functions
- Implement multiple discount types (silver - 10%, gold - 20%, platinum - 50%) using closure chains
- Each discount should apply a different discount percentage to the base price
- Include functions to:
  - Get the current price after discounts
  - Modify the base price (for admin purposes)
  - Apply different discount tiers
  - Reset to original price

### Starting Code:

```js
function priceManagement(initialPrice) {
  // ...
  function modifyPrice() {
    // Implement closure chains for different discount types
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
console.log(product.getCurrentPrice()); // Output: 80
product.modifyPrice("platinum"); // Applies 50% discount
console.log(product.getCurrentPrice()); // Output: 50
console.log(product.resetPrice()); // 100
```
