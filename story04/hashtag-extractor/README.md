# Hashtag Extractor

### Instructions

| Expected file        |
| -------------------- |
| hashtag-extractor.js   |

Write a function called `extractHashtags` that extracts all hashtags from a given text.

The function should extract hashtags that:

- Start with # symbol
- Contain letters, numbers, and underscores
- Don't include spaces or special characters
- Maintain the original case
- Return an array of found hashtags
- Return empty array if no hashtags found

### Expected Function

```js
function extractHashtags(text) {
  // Your code here
}
```

### Example

```js
console.log(extractHashtags("Love this #photo #summer #vacation"));
console.log(extractHashtags("No hashtags here!"));
console.log(extractHashtags("#start middle #end"));
```

output:

```bash
["#photo", "#summer", "#vacation"]
[]
["#start", "#end"]
```
