# The Key Finder

Write a function called `keyGuardian` that takes an object and a key name, and checks if the key is present, using the `in` operator. The presence of the key must be true, even if its value is `falsy`.

### Resources:

- [in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
- [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

### Example:

```js
keyGuardian({ name: "Alice", age: 0 }, "age");
// Output: true

keyGuardian({ job: null }, "job");
// Output: true

keyGuardian({ country: "USA" }, "city");
// Output: false
```
