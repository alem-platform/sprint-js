# My String Split

| Expected file        |
| -------------------- |
| `my-string-split.js` |

### Instructions:

Write a function `myStringSplit` that takes a string and a separator and returns an array of substrings, similar to the behavior of `String.prototype.split`.

Restrictions:

- You are **not allowed** to use the built-in `split` method.
- Your function should mimic the behavior of `String.prototype.split`, handling various types of separators and edge cases.

### Requirements:

The function `myStringSplit` should support:

- **String separator**: When a string is provided as the separator, the input string should be split by occurrences of this separator.
- **Empty string separator**: If the separator is an empty string (`""`), the function should return an array of individual characters.
- **Undefined separator**: If no separator is provided, return the entire string as a single-element array.
- **Limit**: Implement an optional `limit` parameter. If provided, the output array should contain no more than `limit` elements.

### Resources:

- [String.prototype.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

### Function definition:

```js
function myStringSplit(str, separator, limit) {
  // Your Solution
}
```

### Example usage:

```javascript
console.log(myStringSplit("apple,banana,orange", ","));
// Output: ["apple", "banana", "orange"]

console.log(myStringSplit("hello", ""));
// Output: ["h", "e", "l", "l", "o"]

console.log(myStringSplit("apple-banana-orange", "-", 2));
// Output: ["apple", "banana"]

console.log(myStringSplit("singleword"));
// Output: ["singleword"]

console.log(myStringSplit("cat#dog#bird", "#", 4));
// Output: ["cat", "dog", "bird"]
```
