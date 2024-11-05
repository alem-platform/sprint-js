# Map Master

### Instructions:

Create a function called `mapMaster` that takes two arguments:

1. An array
2. A callback function

The function should return a new array with the transformed values.

### Expected function:

```js
function mapMaster(array, func) {
  //
}
```

### Resources

- [map](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### Example:

```js
mapMaster([1, 2, 3], (num) => num * 2);
// Output: [2, 4, 6]

mapMaster(["a", "b", "c"], (letter) => letter.toUpperCase());
// Output: ['A', 'B', 'C']
```
