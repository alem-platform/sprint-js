# Filter Force

| Expected file   |
| --------------- |
| filter-force.js |

### Instructions:

Create a function called `filterForce` that takes two arguments:

1. An array: Elements you’ll be filtering through.
2. A callback function: The test that each element must pass.

The function should return a new array with elements that pass the callback function's test.

### Resources:

- [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

### Example:

```js
filterForce([1, 2, 3, 4, 5], (num) => num > 2);
// Output: [3, 4, 5]
```
