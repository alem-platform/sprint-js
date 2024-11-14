# Builtin Array Recognizer

| Expected file               |
| --------------------------- |
| `builtin-arr-recognizer.js` |

### Instructions:

Write a funciton that determines whether the passed value is an [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

### Resources:

- [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

### Expected Function

```js
/**
 * Determines if the provided value is an array.
 *
 * @param {*} value - The value to check
 * @return {boolean} True if the value is an array; otherwise, false
 */
function builtinIsArray(value) {
  // Your Solution
}
```

### Example:

```javascript
console.log(builtinIsArray([1, 2, 3])); // Output: true
console.log(builtinIsArray("hello")); // Output: false
console.log(builtinIsArray({ name: "Alice" })); // Output: false
console.log(builtinIsArray(42)); // Output: false
console.log(builtinIsArray(null)); // Output: false
console.log(builtinIsArray(undefined)); // Output: false
console.log(builtinIsArray(() => {})); // Output: false
console.log(builtinIsArray([])); // Output: true
console.log(builtinIsArray(new Array(5))); // Output: true
```
