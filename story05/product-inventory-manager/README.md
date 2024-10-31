# Product Inventory Manager

### Instructions

Create a function called `createProduct` that manages product information in an e-commerce system.

The function should:

- Create an object literal with product details
- Include computed properties
- Use shorthand property names where applicable
- Implement method shorthand
- Return the product object

### Expected Function

```js
function createProduct(id, name, price, category) {
  // Your code here
}
```

### Example

```js
console.log(createProduct(1, "Laptop", 999.99, "Electronics"));
console.log(createProduct(2, "Book", 29.99, "Books"));
```

Output:

```bash
{
  id: 1,
  name: "Laptop",
  price: 999.99,
  category: "Electronics",
  displayInfo: [Function],
  priceWithTax: 1099.99,
  isExpensive: true
}
{
  id: 2,
  name: "Book",
  price: 29.99,
  category: "Books",
  displayInfo: [Function],
  priceWithTax: 32.99,
  isExpensive: false
}
```
