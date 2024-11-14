# Word Frequency Counter

### Instructions

| Expected file             |
| ------------------------- |
| word-frequency-counter.js |

Write a function called `wordFrequency` that counts the frequency of each word in a given text.

The function should:

- Convert all words to lowercase
- Remove punctuation
- Count each word occurrence
- Return an object with word counts
- Treat same words with different cases as the same word

### Expected Function

```js
function wordFrequency(text) {
  // Your code here
}
```

### Example

```js
console.log(wordFrequency("the cat in the hat")); // { the: 2, cat: 1, in: 1, hat: 1 }
console.log(wordFrequency("hello Hello HELLO")); // { hello: 3 }
console.log(wordFrequency("")); // {}
```
