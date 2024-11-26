# Price Management

| Expected file         |
| --------------------- |
| `price-management.js` |

### Instructions

Write a function called `priceManagement` that manages the price of a product and allows applying various discount types to modify it, while keeping track of the original base price.

- The base price should be set when initializing the function and remain private. This means it cannot be accessed directly but can be modified through specific methods.

- Implement three discount types that modify the price:
  - `silver` - 10%
  - `gold` - 20%
  - `platinum` - 50%
- Each discount can only be applied once. If you try to apply the same discount more than once, it should return an error message.

- Add methods:

  - `applyDiscount(discountType)`: Applies the specified discount to the base price. Returns an error if the discount has already been applied - `Discount type already implemented` or the discount type is invalid - `Discount type is invalid`. You can apply multiple discounts, and they will add up.
  - `getCurrentPrice`: Returns the current price after all discounts have been applied, rounded to 2 decimal places.
  - `setBasePrice(newPrice)`: Allows changing the base price. Only positive numbers are allowed, and if the price is invalid (non-positive), it should return an error message - `Invalid price`.
  - `resetPrice()`: Discards all applied discounts and resets the price back to the base price.

### Expected Function:

```js
function priceManagement(initialPrice) {
  let basePrice;
  // ...
  function applyDiscount(discountType) {
    //
  }

  function setBasePrice(newPrice) {
    //
  }

  function getCurrentPrice() {
    //
  }

  function resetPrice() {
    //
  }

  return {
    // ...
  };
}
```

### Example:

```js
const product = priceManagement(100);

console.log(product.getCurrentPrice()); // Output: 100.00

product.applyDiscount("silver");
console.log(product.getCurrentPrice()); // Output: 90.00

product.applyDiscount("gold");
console.log(product.getCurrentPrice()); // Output: 70.00

product.applyDiscount("platinum");
console.log(product.getCurrentPrice()); // Output: 14.00

console.log(product.applyDiscount("platinum")); // Output: 'Discount type already implemented'

product.setBasePrice(200);
console.log(product.getCurrentPrice()); // Output: 200.00

// Reset price to the original base price (after applying discounts)
console.log(product.resetPrice()); // Output: 200.00
```
