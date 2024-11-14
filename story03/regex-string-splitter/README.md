# String Splitter

### Instructions

| Expected file      |
| ------------------ |
| string-splitter.js |

Write a function called `multiSplit` that splits a string into an array based on multiple delimiters (space, comma, and semicolon) using a single regex pattern.

The function should:

- Split on any of these delimiters: space, comma, semicolon
- Handle multiple consecutive delimiters
- Trim whitespace from resulting items
- Return an array of non-empty strings

Valid delimiters:

- ` `
- `,`
- `;`

### Resourses

- [Character classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [String.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/filter)
- [String.prototype.trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)

### Expected Function

```js
function multiSplit(text) {
  // Your code here
}
```

### Example

```js
console.log(multiSplit("apple,banana;orange cherry")); // ["apple", "banana", "orange", "cherry"]
console.log(multiSplit("one;  two,,,three   four")); // ["one", "two", "three", "four"]
console.log(multiSplit("single")); // ["single"]
console.log(multiSplit("")); // []
console.log(multiSplit(",,;;  ,,")); // []
```
