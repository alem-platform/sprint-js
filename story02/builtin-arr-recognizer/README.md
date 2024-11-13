# Builtin Array Recognizer

| Expected file               |
| --------------------------- |
| `builtin-arr-recognizer.js` |

### Instructions:

Write a funciton that determines whether the passed value is an [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

### Resources:

- [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

**Function definition:**

```js
/**
 * Determines if the provided value is an array.
 *
 * @param {*} value - The value to check
 * @return {boolean} True if the value is an array; otherwise, false
 */
function myIsArray(value) {
  // Your Solution
}
```

**Example usage:**

```javascript
console.log(myIsArray([1, 2, 3])); // Output: true
console.log(myIsArray("hello")); // Output: false
console.log(myIsArray({ name: "Alice" })); // Output: false
console.log(myIsArray(42)); // Output: false
console.log(myIsArray(null)); // Output: false
console.log(myIsArray(undefined)); // Output: false
console.log(myIsArray(() => {})); // Output: false
console.log(myIsArray([])); // Output: true
console.log(myIsArray(new Array(5))); // Output: true
```
