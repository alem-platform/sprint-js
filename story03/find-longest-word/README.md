# Find Longest Word

| Expected file          |
| ---------------------- |
| `find-longest-word.js` |

### Instructions:

Write a function `findLongestWord` that takes an array of strings and returns the longest word in the array. If there are multiple words with the same maximum length, return the first one that appears in the array.

### Requirements:

- The function should return the first longest word if multiple words have the same maximum length.
- If the array is empty, return `undefined`.
- Function must ignore non string elements

### Function definition:

```js
function findLongestWord(arr) {
  // Your Solution
}
```

### Example usage:

```javascript
console.log(findLongestWord(["apple", "banana", "cherry", "date"]));
// Output: "banana"

console.log(findLongestWord(["one", "three", "seventeen", "four"]));
// Output: "seventeen"

console.log(findLongestWord(["a", "ab", "abc", "abcd", "abcde"]));
// Output: "abcde"

console.log(findLongestWord([]));
// Output: undefined
```
