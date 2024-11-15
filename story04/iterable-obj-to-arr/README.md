# Iterable Object to Array

| Expected file            |
| ------------------------ |
| `iterable-obj-to-arr.js` |

### Instructions:

Write a function `iterableObjectToArray` that takes an iterable object as input and returns an array containing all values from the iterable.

- If the input is not iterable, return an empty array.

- [Iterable objects](https://javascript.info/iterable)
- [Symbol](https://javascript.info/symbol)

### Function definition:

```js
function iterableObjectToArray(iterable) {
  // Your Solution
}
```

### Example usage:

```javascript
console.log(iterableObjectToArray([1, 2, 3])); // Output: [1, 2, 3]
console.log(iterableObjectToArray("hello")); // Output: ["h", "e", "l", "l", "o"]
console.log(iterableObjectToArray(new Set([1, 2, 3]))); // Output: [1, 2, 3]
console.log(
  iterableObjectToArray(
    new Map([
      ["a", 1],
      ["b", 2],
    ])
  )
); // Output: [1, 2]

console.log(iterableObjectToArray(123)); // Output: []
```
