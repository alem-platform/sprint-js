# Immutability Mastery

You need learn the difference between primitive and object immutability. These tasks will teach you how to protect data from unintended changes, keeping your code safe and predictable.

## Part A: Immutable Primitives – The Unchangeable Foundations

Create an object named `immutablePrimitives` where you declare several const parameters, each holding primitive values for:

- str for [strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- num for [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- bool for [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

Attempt to change their values through object call and note why it’s impossible to alter them.

## Part B: Square Sentries – The Array Guardians

To the object created above add method called `squareSentries` that takes an array of numbers and returns a new array where each number is squared. Ensure that the original array is not mutated, demonstrating the power of immutability.

## Part C: Append Champions – Expanding Without Destruction

Your task is to append an element to an array without altering the original array, ensuring immutability. Create another method called `appendChampion` that takes two arguments: an array and a new element. Method should return a new array with the element appended, keeping the original array intact.

### Example:

```js
console.log(immutablePrimitives.str);
// immutable string value given for str

immutablePrimitives.squareSentries([1, 2, 3]);
// Output: [1, 4, 9]

immutablePrimitives.squareSentries([4, 5, 6]);
// Output: [16, 25, 36]

immutablePrimitives.appendChampion([1, 2, 3], 4);
// Output: [1, 2, 3, 4]
```
