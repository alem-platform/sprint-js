# Filter Forge

Create a custom version of the `filter` method. Write a function called `forgeFilter` that takes an array and a callback function, returning a new array with only the elements that pass the callback’s test—without using the built-in filter method.

### Instructions:

- The `forgeFilter` function should behave like Array.prototype.filter, applying the callback to each element and including only those elements for which the callback returns true.

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
