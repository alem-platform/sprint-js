# Duplicate Word Finder

| Expected file            |
| ------------------------ |
| duplicate-word-finder.js |

### Instructions

Write a function called `findDuplicateWords` that finds all words that appear more than once in a text, ignoring case.

The function should:

- Ignore case sensitivity (treat "Hello" and "HELLO" as same)
- Ignore punctuation and special characters
- Return array of duplicate words in lowercase
- Return empty array if no duplicates found

### Expected Function

```js
function findDuplicateWords(text) {
  // Your code here
}
```

### Example

```js
console.log(findDuplicateWords("The cat and the dog saw another cat")); // ["the", "cat"]
console.log(findDuplicateWords("Hello HELLO hello World")); // ["hello"]
console.log(findDuplicateWords("No duplicates here")); // []
```