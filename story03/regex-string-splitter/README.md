# Regex String Splitter

### Instructions

Write a function called `multiSplit` that splits a string into an array based on multiple delimiters (space, comma, and semicolon) using a single regex pattern. The function should handle consecutive delimiters and trim whitespace.

The function should:

- Split on any of these delimiters: space, comma, semicolon
- Handle multiple consecutive delimiters (treat them as one)
- Trim whitespace from resulting items
- Remove empty items from the result
- Return an array of non-empty strings
- Return empty array for empty input or input with only delimiters

Valid delimiters:

- Space character (" ")
- Comma (",")
- Semicolon (";")

### Hints

- Use a regex pattern with character class [,; ]
- Consider using the `split()` method with regex
- Use `filter()` to remove empty items
- Remember to `trim()` each item

### Expected Function

```js
function multiSplit(text) {
  // Your code here
}
```

### Example

```js
console.log(multiSplit("apple,banana;orange cherry"));
console.log(multiSplit("one;  two,,,three   four"));
console.log(multiSplit("single"));
console.log(multiSplit(""));
console.log(multiSplit(",,;;  ,,"));
```

output:

```bash
["apple", "banana", "orange", "cherry"]
["one", "two", "three", "four"]
["single"]
[]
[]
```
