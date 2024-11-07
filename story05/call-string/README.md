# Call to String Methods

| Expected file  |
| -------------- |
| call-string.js |

In your file, implement the following functions:

- `applyStringMethod(method, str)`: Uses `call` to apply a single String method to str.
- `chainStringMethods(methods, str)`: Applies multiple String methods in sequence using `call`.

### Requirements

- Use `call` in each function to ensure each String method is invoked on str as a context.
- Allow chaining multiple String methods by passing them in an array to chainStringMethods.

### Resources

- [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

### Example Usage

```js
// Single String method
const text = " JavaScript is fun! ";
console.log(applyStringMethod("trim", text));
// Output: "JavaScript is fun!"

// Chaining String methods
const sentence = "this is a test";
console.log(chainStringMethods(["toUpperCase", "trim"], sentence));
// Output: "THIS IS A TEST"
```
