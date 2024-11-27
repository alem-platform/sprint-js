# Expect

| Expected file |
| ------------- |
| `expect.js`   |

### Instructions:

Write a function `expect` that checks for values equality. It should take in any value `val` and return an object with the following two functions:

1. `isEqual` - accepts a value and returns true if the two values are the same, otherwise return "Error: Not Equal".
2. `notEqual` - accepts a value and returns true if the two values are not the same, otherwise return "Error: Equal".

### Example:

```js
func = () => expect(5).isEqual(5); // true
func = () => expect(6).notEqual(6); // "Error: Equal"
```
