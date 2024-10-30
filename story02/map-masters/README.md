# Map Masters

Write a function called `transformArray` which applies a function to each element in an array.

### Resources

- [map](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### Instructions:

Create a function called `mapMasters` that takes two arguments:

1. An array
2. A callback function

The function should return a new array with the transformed values.

### Example:

```js
mapMasters([1, 2, 3], (num) => num * 2);
// Output: [2, 4, 6]

mapMasters(["a", "b", "c"], (letter) => letter.toUpperCase());
// Output: ['A', 'B', 'C']
```
