# Immutable

## Part A: Working with Constants

Create an object called `constants` with three constant values:

- str for string
- num for number
- bool for boolean

Try to change these values and observe why they cannot be modified.

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

constants.squareSentries([1, 2, 3]); // [1, 4, 9]

constants.squareSentries([4, 5, 6]); // [16, 25, 36]

constants.appendChampion([1, 2, 3], 4); // [1, 2, 3, 4]
```
