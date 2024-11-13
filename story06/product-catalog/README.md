# Product Catalog

| Expected file      |
| ------------------ |
| product-catalog.js |

### Instructions

Refactor the provided legacy JavaScript code to create a modern `ProductCatalog` class that follows `ES6+` standards.

Implement methods:

- `constructor`: Initializes a `private` array `_products` to store all products.
- `addProduct(name, price)`:
  - Validates that name is a non-empty string and price is a positive number.
  - Throws an error if price is negative or name is invalid.
  - Adds a new product object (with name and price properties) to the `_products` array.
- `getProductInfo(name)`:

  - Returns a formatted string "{product name} costs ${price}".
  - Throws an error if the product is not found.

- `totalProducts (getter)`:

  - Returns the total number of products in the catalog.

- `totalValue (getter)`:
  - Returns the sum of the prices of all products in the catalog.

### Original Legacy Code

```js
function ProductCatalog() {
  this.products = [];
}

ProductCatalog.prototype.addProduct = function (name, price) {
  if (price < 0) {
    throw "Price must be a positive number.";
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

console.log(catalog.totalProducts); // 2
console.log(catalog.totalValue); // 1029.98
console.log(catalog.getProductInfo("Laptop")); // Laptop costs $999.99
```
