# String Charcodes Sum

| Expected file             |
| ------------------------- |
| `string-charcodes-sum.js` |

### Instructions:

Write a function `stringCharcodesSum` that takes a string as input and returns the sum of the character codes of all characters in the string.

### Requirements:

- If the input string is empty, return `0`.

- [String](https://javascript.info/string)
- [String.prototype.charCodeAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)

### Function definition:

```js
function stringCharcodesSum(str) {
  // Your Solution
}
```

### Example usage:

```javascript
console.log(stringCharcodesSum("hello"));
// Output: 532 (h: 104, e: 101, l: 108, l: 108, o: 111)

console.log(stringCharcodesSum("ABC"));
// Output: 198 (A: 65, B: 66, C: 67)

console.log(stringCharcodesSum("123"));
// Output: 150 (1: 49, 2: 50, 3: 51)

console.log(stringCharcodesSum(""));
// Output: 0
```
