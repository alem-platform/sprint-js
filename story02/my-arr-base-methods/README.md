# My Array Base Methods

| Expected file            |
| ------------------------ |
| `my-arr-base-methods.js` |

### Instructions:

Implement the following functions to replicate the behaviors of common JavaScript array methods without using the built-in methods they mimic.

Restrictions:

- You are not allowed to use the built-in Array methods.
- Make sure to handle edge cases, such as empty arrays or out-of-bounds indices, as closely as possible to how JavaScript would handle them in these array methods.

### Resources:

- [Array](https://javascript.info/array)
- [delete](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
- [Array length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

- [Array.prototype.shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
- [Array.prototype.unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
- [Array.prototype.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [Array.prototype.pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
- [Array.prototype.at](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
- [Array.prototype.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

### Function definitions:

```js
/**
 * Function removes the first element from an array and returns that removed element.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
 *
 * @param {*[]} arr
 *
 * @return {any}
 */
function myArrayShift(arr) {
  // Your Solution
}

/**
 * Function adds the specified elements to the beginning of an array and returns the new length of the array.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
 *
 * @param {*[]} arr
 *
 * @return {number} length
 */
function myArrayUnshift(arr, value) {
  // Your Solution
}

/**
 * Function adds the specified elements to the end of an array and returns the new length of the array.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 *
 * @param {*[]} arr
 *
 * @return {number} length
 */
function myArrayPush(arr, value) {
  // Your Solution
}

/**
 * Function removes the last element from an array and returns that element. This method changes the length of the array.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
 *
 * @param {*[]} arr
 *
 * @return {number} length
 */
function myArrayPop(arr) {
  // Your Solution
}

/**
 * Function takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
 *
 * @param {*[]} arr
 *
 * @return {*}
 */
function myArrayAt(arr, index) {
  // Your Solution
}

/**
 * Function returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 *
 * @param {*[]} arr
 *
 * @callback callback
 * @param {*} any
 * @param {number} index
 * @param {*[]} arr
 *
 * @return {(any | undefined)}
 */
function myArrayayFind(arr, callback) {
  // Your Solution
}
```

### Example:

```javascript
const arr = [1, 2, 3, 4, 5];

console.log(myArrayShift(arr)); // Output: 1
console.log(arr); // Output: [2, 3, 4, 5]

console.log(myArrayUnshift(arr, 0)); // Output: 5
console.log(arr); // Output: [0, 2, 3, 4, 5]

console.log(myArrayPush(arr, 6)); // Output: 6
console.log(arr); // Output: [0, 2, 3, 4, 5, 6]

console.log(myArrayPop(arr)); // Output: 6
console.log(arr); // Output: [0, 2, 3, 4, 5]

console.log(myArrayAt(arr, 2)); // Output: 3

console.log(myArrayFind(arr, (x) => x > 3)); // Output: 4
```
