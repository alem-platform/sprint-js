# Is Equal?

### Instructions:

Write a function `isEqual` that checks for values equality. It should take in any value `val` and return an object with the following two functions:

1. `equal(val)` - accepts another value and returns true if the two values === each other. If they are not equal, it should return "Error: Not Equal" statement.
2. `notEqual(val)` - accepts another value and returns true if the two values !== each other. If they are equal, it should return "Error: Equal" statement.

### Example:

```js
func = () => isEqual(5).equal(5); // true
func = () => isEqual(6).notEqual(6); // "Error: Equal"
```
