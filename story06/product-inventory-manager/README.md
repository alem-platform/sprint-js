# Product Inventory Manager

| Expected file        |
| -------------------- |
| product-inventory.js |

### Instructions

Create a function `createProduct` that manages product information in an e-commerce system. The function should return the product object.

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
//   displayInfo: [Function],
//   priceWithTax: 1099.99,
//   isExpensive: true
// }
console.log(createProduct(2, "Book", 29.99, "Books"));
// {
//   id: 2,
//   name: "Book",
//   price: 29.99,
//   category: "Books",
//   displayInfo: [Function],
//   priceWithTax: 32.99,
//   isExpensive: false
// }
```
