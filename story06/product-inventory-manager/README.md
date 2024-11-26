# Product Inventory Manager

| Expected file                  |
| ------------------------------ |
| `product-inventory-manager.js` |

### Instructions

Create a function `createProduct` that manages product information in an e-commerce system. The function should return the product object. By default set tax to 10%, otherwise expect it from arguments.

### Expected Function

```js
function createProduct(id, name, price, category) {
  // Your code here
}
```

### Example

```js
console.log(createProduct(1, "Laptop", 999.99, "Electronics"));
// {
//   id: 1,
//   name: "Laptop",
//   price: 999.99,
//   category: "Electronics",
//   priceWithTax: 1099.99,
// }
console.log(createProduct(2, "Book", 29.99, "Books"));
// {
//   id: 2,
//   name: "Book",
//   price: 29.99,
//   category: "Books",
//   priceWithTax: 32.99,
// }
```
