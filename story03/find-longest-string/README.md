# Find Longest String

| Expected file            |
| ------------------------ |
| `find-longest-string.js` |

### Instructions:

Write a function `findLongestString` that takes an array of strings and returns the longest word in the array. If there are multiple words with the same maximum length, return the first one that appears in the array.

### Requirements:

- The function should return the first longest word if multiple words have the same maximum length.
- If the array is empty, return `undefined`.
- Function must ignore non string elements

### Function definition:

```js
function findLongestString(arr) {
  // Your Solution
}
```

### Example usage:

```javascript
console.log(findLongestString(["apple", "banana", "cherry", "date"]));
// Output: "banana"

console.log(findLongestString(["one", "three", "seventeen", "four"]));
// Output: "seventeen"

console.log(findLongestString(["a", "ab", "abc", "abcd", "abcde"]));
// Output: "abcde"

console.log(findLongestString([]));
// Output: undefined
```
