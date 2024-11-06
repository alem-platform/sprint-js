# URL Extractor

### Instructions

| Expected file        |
| -------------------- |
| url-extractor.js   |

Write a function called `extractURLs` that finds all valid URLs from a given text string.

The function should extract URLs that:

- Start with http:// or https://
- Include valid domain names
- May include paths, query parameters, and fragments
- Return an array of found URLs
- Return empty array if no URLs found

### Expected Function

```js
function extractURLs(text) {
  // Your code here
}
```

### Example

```js
const text = "Check out https://example.com and http://test.co.uk/path?param=1";
console.log(extractURLs(text)); // ["https://example.com", "http://test.co.uk/path?param=1"]

const text2 = "No valid URLs in this text";
console.log(extractURLs(text2)); // []
```
