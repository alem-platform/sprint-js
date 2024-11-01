# Filter Forge

Create your own version of JavaScript's built-in `Array.prototype.filter()` method.

### Instructions:

Write a function called `forgeFilter` that takes an array and a callback function, returning a new array with only the elements that pass the callback’s test—without using the built-in `filter` method.

### Expected function:

```js
function forgeFilter(array, func) {
  //...
}
```

### Example:

```js
forgeFilter([5, 10, 15], (num) => num > 10);
// Output: [15]
```
