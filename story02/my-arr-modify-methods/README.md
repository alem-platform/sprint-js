# My Array Modify Methods

| Expected file              |
| -------------------------- |
| `my-arr-modify-methods.js` |

### Instructions:

Implement the following functions to replicate the behaviors of common JavaScript array-modifying methods without using the built-in methods they mimic.

Restrictions:

- You are not allowed to use the built-in Array methods you are re-implementing.
- Make sure to handle edge cases, such as empty arrays or large inputs, as closely as possible to how JavaScript would handle them in these array methods.

### Resources:

- [Array](https://javascript.info/array)
- [Array.prototype.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [Array.prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Array.prototype.reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

### Function definitions:

```js
/**
 * Function changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 *
 * @param {*[]} arr
 * @param {number} start - The index at which to start changing the array
 * @param {number} deleteCount - The number of elements to remove
 * @param {...*} items - The elements to add to the array, beginning from start
 *
 * @return {*[]} An array containing the deleted elements
 */
function myArraySplice(arr, start, deleteCount, ...items) {
  // Your Solution
}

/**
 * Function sorts the elements of an array in place and returns the sorted array.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 *
 * @param {*[]} arr
 * @param {Function} [compareFunction] - Specifies a function that defines the sort order
 *
 * @return {*[]} The sorted array
 */
function myArraySort(arr, compareFunction) {
  // Your Solution
}

/**
 * Function reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 *
 * @param {*[]} arr
 *
 * @return {*[]} The reversed array
 */
function myArrayReverse(arr) {
  // Your Solution
}
```

### Example:

```javascript
let arr = [1, 2, 3, 4, 5];

console.log(myArraySplice(arr, 1, 2, 9, 8)); // Output: [2, 3]
console.log(arr); // Output: [1, 9, 8, 4, 5]

arr = [3, 1, 4, 1, 5];
console.log(myArraySort(arr)); // Example Output: [1, 1, 3, 4, 5]
console.log(myArraySort(arr, (a, b) => b - a)); // Output: [5, 4, 3, 1, 1]

arr = [1, 2, 3, 4, 5];
console.log(myArrayReverse(arr)); // Output: [5, 4, 3, 2, 1]
console.log(arr); // Output: [5, 4, 3, 2, 1]
```
