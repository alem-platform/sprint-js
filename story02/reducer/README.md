# Reducer

| Expected file |
| ------------- |
| reducer.js    |

### Instructions:

Create a function called `reducer` that takes three arguments:

1. An array: The set of elements you’ll be combining.
2. A callback function: The accumulation logic.
3. An initial value: The starting point for your accumulation.

The function will return a single value, the result of combining all elements.

### Expected function:

```js
function reducer(arr, fn, initialValue) {
  // 
}
```

### Resources:

[reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

### Example:

```js
reducer([1, 2, 3, 4], (sum, num) => sum + num, 0);
// Output: 10

reducer(["a", "b", "c"], (acc, letter) => acc + letter, "");
// Output: 'abc'
```
