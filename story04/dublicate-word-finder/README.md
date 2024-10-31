# Duplicate Word Finder

### Instructions

Write a function called `findDuplicateWords` that finds all words that appear more than once in a text, ignoring case.

The function should:

- Ignore case sensitivity (treat "Hello" and "HELLO" as same)
- Ignore punctuation and special characters
- Return array of duplicate words in lowercase
- Return empty array if no duplicates found
- Consider words separated by spaces or punctuation

### Hints

- Convert text to lowercase before processing
- Use regex to split words and remove punctuation
- Consider using a Map or object to count occurrences

### Expected Function

```js
function findDuplicateWords(text) {
  // Your code here
}
```

### Example

```js
console.log(findDuplicateWords("The cat and the dog saw another cat"));
console.log(findDuplicateWords("Hello HELLO hello World"));
console.log(findDuplicateWords("No duplicates here"));
```

output:

```bash
["the", "cat"]
["hello"]
[]
```
