# Apply to Math

| Expected file    |
| ---------------- |
| apply-to-math.js |

Write functions that creates a mathematical utilities with the following capabilities:

1. Apply any `Math` method (max, min, abs, etc.) to `arrays`
2. Chain multiple `Math` operations in sequence
3. Transform arrays with custom mathematical formulas

### Requirements:

In your file create the following functions:

- `applyMath(method, array)`: Applies a single Math method to an array
- `chainMath(methods, array)`: Applies multiple Math methods in sequence
- `transform(formula, array)`: Applies custom mathematical transformations

### Resources:

- [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [Function.prototype.apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

### Example:

```js
// Single Math method
const numbers = [1, -2, 3, -4, 5];
console.log(applyMath('abs', numbers));
// Output: [1, 2, 3, 4, 5]

// Chaining Math methods
const values = [1.1, 2.2, 3.7, 4.4];
console.log(chainMath(['floor', 'max'], values));
// Output: 4

// Custom transformations
const transform = (x) => x \* x + 2;
console.log(transform(transform, [1, 2, 3]));
// Output: [3, 6, 11]
```
