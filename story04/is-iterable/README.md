# Is Iterable

| Expected file    |
| ---------------- |
| `is-iterable.js` |

### Instructions:

Write a function `isIterable` that takes a single argument and returns `true` if the argument is iterable, and `false` otherwise.

- [Iterable objects](https://javascript.info/iterable)
- [Symbol](https://javascript.info/symbol)

### Function definition:

```js
function isIterable(value) {
  // Your Solution
}
```

### Example usage:

```js
console.log(isIterable([1, 2, 3])); // Output: true
console.log(isIterable("hello")); // Output: true
console.log(isIterable(new Set([1, 2]))); // Output: true
console.log(isIterable(new Map())); // Output: true
console.log(isIterable(123)); // Output: false
console.log(isIterable({ key: "value" })); // Output: false
console.log(isIterable(null)); // Output: false
console.log(isIterable(undefined)); // Output: false
```
