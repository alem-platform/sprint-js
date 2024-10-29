# The Key Finder

In the realm of objects, every key matters—even if the value is undefined. Your task is to write a function called `keyGuardian` that takes an object and a key name, and checks if the key is present, using the in operator. The presence of the key must be true, even if its value is falsy

### Example:

```js
keyGuardian({ name: "Alice", age: 0 }, "age");
// Output: true

keyGuardian({ job: null }, "job");
// Output: true

keyGuardian({ country: "USA" }, "city");
// Output: false
```
