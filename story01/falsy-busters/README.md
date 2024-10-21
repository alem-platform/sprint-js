# Falsy Busters – The Truth Cleaners

The Falsy Busters are on a mission to clean up the streets of your array. Your task is to identify and remove all falsy values (false, null, undefined, 0, NaN, "") using built-in array methods. Only truthy values shall remain in the city of data!

### Your Objective:

Create a function called `falsyBusters` that takes an array as input and uses a built-in method (such as `filter`) to remove falsy values, returning a new, cleaned-up array.

### Example Operation:

```js
falsyBusters([0, 1, false, 2, "", 3]);
// Output: [1, 2, 3]

falsyBusters([null, NaN, "hello", undefined, "world", 0]);
// Output: ['hello', 'world']
```
