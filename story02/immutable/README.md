# Immutable

| Expected file |
| ------------- |
| immutable.js  |

## Part A: Working with Constants

Create an object called `constants` with three constant values:

- str for string
- num for number
- bool for boolean

Use `Object.freeze` on the object and try to change these values. Observe why they cannot be modified.

## Part B: Square Numbers

Add a method called `squareNumbers` that takes an array of numbers and returns a new array with each number squared.

## Part C: Add Elements

Add a method called `addElement` that takes an array and a new value. It should return a new array with the value added at the end.

### Resources:

[Object freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

### Example:

```js
console.log(constants.str); // test
constants.str = "New value"; // Error

console.log(constants.str); // test

console.log(constants.squareNumbers([1, 2, 3])); // [1, 4, 9]

console.log(constants.squareNumbers([4, 5, 6])); // [16, 25, 36]

console.log(constants.addElement([1, 2, 3], 4)); // [1, 2, 3, 4]
```
