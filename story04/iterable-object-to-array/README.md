# Iterable Object to Array

| Expected file                 |
| ----------------------------- |
| `iterable-object-to-array.js` |

### Instructions:

Write a function `iterableToArray` that takes an iterable object as input and returns an array containing all values from the iterable.

- If the input is not iterable, return an empty array.

- [Iterable objects](https://javascript.info/iterable)
- [Symbol](https://javascript.info/symbol)

### Function definition:

```js
function iterableToArray(iterable) {
  // Your Solution
}
```

### Example usage:

```javascript
console.log(iterableToArray([1, 2, 3])); // Output: [1, 2, 3]
console.log(iterableToArray("hello")); // Output: ["h", "e", "l", "l", "o"]
console.log(iterableToArray(new Set([1, 2, 3]))); // Output: [1, 2, 3]
console.log(
  iterableToArray(
    new Map([
      ["a", 1],
      ["b", 2],
    ])
  )
); // Output: [1, 2]

console.log(iterableToArray(123)); // Output: []
```
