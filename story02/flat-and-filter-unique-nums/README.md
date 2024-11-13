# Flat and Filter Unique Numbers

| Expected file                  |
| ------------------------------ |
| flat-and-filter-unique-nums.js |

### Instructions:

Create a function called `flatAndFilterUniqueNums` that takes an array of any depth and returns an array of unique numbers after flattening the input array.

Requirements:

- The function should take an array of any depth as input, which can contain numbers and arrays of numbers.
- The function should return the array of unique numbers in the order they first appear.

> We recommend to use [builtin array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

### Resources:

- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Expected Function:

```js
function flatAndFilterUniqueNums(array) {
  // Your Solution
}
```

### Example:

```js
flatAndFilterUniqueNums([1, [2, 3], [3, 4, [5, 1]]]);
// Output: [1, 2, 3, 4, 5]

flatAndFilterUniqueNums([10, [20, [30, 20]], 10, 40]);
// Output: [10, 20, 30, 40]
```
