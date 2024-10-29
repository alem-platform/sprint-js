# Map Masters

With the legendary `map` method, you are tasked with applying a function to each element in an array, returning a brand-new array of transformed elements.

### Instructions:

Create a function called `mapMasters` that takes two arguments:

1. An array: The collection of elements you will transform.
2. A callback function: The magic spell (function) that will transform each element.

The function should return a new array with the transformed values.

### Example:

```js
mapMasters([1, 2, 3], (num) => num * 2);
// Output: [2, 4, 6]

mapMasters(["a", "b", "c"], (letter) => letter.toUpperCase());
// Output: ['A', 'B', 'C']
```
