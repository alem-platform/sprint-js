# Product Catalog

### Instructions

Modernize the provided ProductCatalog class by converting it to use modern JavaScript features. The original code uses old-style JavaScript patterns that need to be updated.

The modernized class should:

- Use ES6+ class syntax
- Implement getters and setters
- Use template literals for strings
- Utilize enhanced object literals
- Implement private fields where appropriate
- Add input validation
- Use arrow functions where appropriate
- Implement proper error handling

### Original Legacy Code

```js
function ProductCatalog() {
  this.products = [];
}

ProductCatalog.prototype.addProduct = function (name, price) {
  if (price < 0) {
    throw "Price cannot be negative";
  }
  var product = {
    name: name,
    price: price,
    getInfo: function () {
      return name + " costs " + price + " dollars";
    },
  };
  this.products.push(product);
};
```

### Expected Class Structure

```js
class ProductCatalog {
  // Your code here
}
```

### Example Usage

```js
const catalog = new ProductCatalog();

catalog.addProduct("Laptop", 999.99);
catalog.addProduct("Mouse", 29.99);

console.log(catalog.totalProducts);
console.log(catalog.totalValue);
console.log(catalog.getProductInfo("Laptop"));
console.log(catalog.findProductsByPriceRange(0, 100));
```

Output:

```bash
2
1029.98
Laptop costs $999.99
[{ name: "Mouse", price: 29.99, ... }]
```
