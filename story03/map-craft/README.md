# Map Craft

Create a custom version of the `map` method.

### Instructions:

Write a function called `craftMap` that takes an array and a callback function, applying the callback to each element and returning a new array with the transformed elements—without using the built-in map method.

The `craftMap` function should mimic the behavior of `Array.prototype.map`, applying the callback to each element in the input array and collecting the results in a new array.

### Example:

```js
craftMap([1, 2, 3], (num) => num + 1);
// Output: [2, 3, 4]
```
