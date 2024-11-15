# My String Split Safe

| Expected file             |
| ------------------------- |
| `my-string-split-safe.js` |

### Instructions:

Write a function `myStringSplitSafe` that takes a string and a separator, similar to `String.prototype.split`, but with special handling for Unicode characters. This function should accurately split strings containing Unicode characters, ensuring that multi-byte characters, emojis, and other complex Unicode sequences are correctly separated.

Restrictions:

- Your function should handle Unicode characters properly, ensuring that multi-byte characters (like emojis) are treated as single characters when splitting.
- Implement an optional `limit` parameter. If provided, the output array should contain no more than `limit` elements.

### Requirements:

The function `myStringSplitSafe` should support:

- **String separator**: When a string is provided as the separator, split the input string by occurrences of this separator.
- **Empty string separator**: If the separator is an empty string (`""`), return an array of individual Unicode characters.
- **Undefined separator**: If no separator is provided, return the entire string as a single-element array.
- **Limit**: Implement an optional `limit` parameter, so that the result array has no more than `limit` elements.

### Resources:

- [String](https://javascript.info/string)
- [Unicode in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)

### Function definition:

```js
function myStringSplitSafe(str, separator, limit) {
  // Your Solution
}
```

### Example usage:

```javascript
console.log(myStringSplitSafe("apple🍏banana🍌orange🍊", "🍏"));
// Output: ["apple", "banana🍌orange🍊"]

console.log(myStringSplitSafe("hello🌍", ""));
// Output: ["h", "e", "l", "l", "o", "🌍"]

console.log(myStringSplitSafe("🦄🌈🦄🌈", "🌈", 3));
// Output: ["🦄", "🦄", ""]

console.log(myStringSplitSafe("good💙day", "💙", 1));
// Output: ["good"]

console.log(myStringSplitSafe("emoji😀split😀test", "😀", 2));
// Output: ["emoji", "split"]
```
