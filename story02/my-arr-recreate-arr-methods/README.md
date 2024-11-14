# My Array Recreate Array Methods

| Expected file                    |
| -------------------------------- |
| `my-arr-recreate-arr-methods.js` |

### Instructions:

Implement the following functions to replicate the behaviors of common JavaScript array methods without using the built-in methods they mimic.

Restrictions:

- You are not allowed to use the built-in Array methods you are re-implementing.
- Ensure that your implementations match the behaviors of the original methods, including handling edge cases, such as empty arrays and optional parameters, as closely as possible.

### Resources:

- [Array](https://javascript.info/array)
- [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- [Array.prototype.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Array.prototype.flat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

**Function definitions:**

```js
/**
 * Function creates a new array populated with the results of calling a provided function on every element in the calling array.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *
 * @param {*[]} arr - The array to map over
 * @param {Function} callback - The function to call on each element
 *
 * @return {*[]} A new array with each element being the result of the callback function
 */
function myArrayMap(arr, callback) {
  // Your Solution
}

/**
 * Function creates a new array with all elements that pass the test implemented by the provided function.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *
 * @param {*[]} arr - The array to filter
 * @param {Function} callback - The function to test each element
 *
 * @return {*[]} A new array with elements that pass the test
 */
function myArrayFilter(arr, callback) {
  // Your Solution
}

/**
 * Function merges two or more arrays and returns a new array.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 *
 * @param {*[]} arr1 - The first array
 * @param {...*[]} arrays - Additional arrays to concatenate
 *
 * @return {*[]} A new array containing all elements from the input arrays
 */
function myArrayConcat(arr1, ...arrays) {
  // Your Solution
}

/**
 * Function returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 *
 * @param {*[]} arr - The array to slice
 * @param {number} [start=0] - The beginning index
 * @param {number} [end=arr.length] - The end index
 *
 * @return {*[]} A new array containing the selected elements
 */
function myArraySlice(arr, start = 0, end = arr.length) {
  // Your Solution
}

/**
 * Function creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 *
 * @param {*[]} arr - The array to flatten
 * @param {number} [depth=1] - The depth level specifying how deep a nested array structure should be flattened
 *
 * @return {*[]} A new array with the sub-array elements concatenated into it
 */
function myArrayFlat(arr, depth = 1) {
  // Your Solution
}
```

### Example:

```javascript
let arr = [1, 2, 3, 4, 5];

console.log(myArrayMap(arr, (x) => x * 2)); // Output: [2, 4, 6, 8, 10]

console.log(myArrayFilter(arr, (x) => x > 3)); // Output: [4, 5]

console.log(myArrayConcat([1, 2], [3, 4], [5])); // Output: [1, 2, 3, 4, 5]

console.log(myArraySlice(arr, 1, 3)); // Output: [2, 3]

let nestedArr = [1, [2, [3, [4]], 5]];
console.log(myArrayFlat(nestedArr, 2)); // Output: [1, 2, 3, [4], 5]
```
