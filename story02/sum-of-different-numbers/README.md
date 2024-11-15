# Sum of Different Numbers

| Expected file                 |
| ----------------------------- |
| `sum-of-different-numbers.js` |

### Instructions:

Write a function `sumOfDifferentNumbers` that takes an array of numbers and returns an object with the following properties:

- `totalSum`: The sum of all numbers in the array.
- `oddSum`: The sum of all odd integers in the array.
- `evenSum`: The sum of all even integers in the array.
- `floatingSum`: The sum of all floating-point (non-integer) numbers in the array.
- `naturalSum`: The sum of all natural numbers (positive integers, excluding zero) in the array.

Each sum should be set as a number if there are values in the category, otherwise, set it as `undefined`.

### Resourses

- [Number.isInteger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)

### Function definition:

```js
function sumOfDifferentNumbers(arr) {
  // Your Solution
}
```

### Example:

```javascript
console.log(sumOfDifferentNumbers([1, 2, 3.5, 4, 5, 0.2, -7, -2]));
// Output: {
//   totalSum: 6.7,
//   oddSum: -1,
//   evenSum: 4,
//   floatingSum: 3.7,
//   naturalSum: 12
// }

console.log(sumOfDifferentNumbers([0, -3, -2.5, 6, 8.8]));
// Output: {
//   totalSum: 9.3,
//   oddSum: -3,
//   evenSum: 6,
//   floatingSum: 6.3,
//   naturalSum: 6
// }
```
