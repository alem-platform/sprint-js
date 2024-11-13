# My Array Recreate Any Methods

| Expected file                    |
| -------------------------------- |
| `my-arr-recreate-any-methods.js` |

### Instructions:

Implement the following functions to replicate the behaviors of common JavaScript array methods without using the built-in methods they mimic.

Restrictions:

- You are not allowed to use the built-in Array methods you are re-implementing.
- Ensure that your implementations handle edge cases, such as empty arrays and missing initial values, as closely as possible to how JavaScript would handle them.

### Resources:

- [Array.prototype.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- [Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

**Function definitions:**

```js
/**
 * Function joins all elements of an array into a string and returns this string.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 *
 * @param {*[]} arr - The array to join
 * @param {string} [separator=','] - The separator string to use between each element
 *
 * @return {string} A string representation of the array elements joined with the separator
 */
function myArrayJoin(arr, separator = ",") {
  // Your Solution
}

/**
 * Function applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {*[]} arr - The array to reduce
 * @param {Function} callback - Function to execute on each element in the array
 * @param {*} [initialValue] - The initial value to use as the first argument to the first call of the callback
 *
 * @return {*} The single value that results from the reduction
 */
function myArrayReduce(arr, callback, initialValue) {
  // Your Solution
}
```

**Example usage:**

```javascript
let arr = [1, 2, 3, 4, 5];

console.log(myArrayJoin(arr)); // Output: "1,2,3,4,5"
console.log(myArrayJoin(arr, "-")); // Output: "1-2-3-4-5"
console.log(myArrayJoin([], "-")); // Output: ""

console.log(myArrayReduce(arr, (acc, x) => acc + x, 0)); // Output: 15
console.log(myArrayReduce(arr, (acc, x) => acc * x, 1)); // Output: 120
console.log(myArrayReduce(arr, (acc, x) => acc + x)); // Output: 15 (no initial value, first element as accumulator)
console.log(myArrayReduce([], (acc, x) => acc + x, 10)); // Output: 10 (empty array with initial value)
```
