# Immutability Protector

In this task, you need to update a property of an object without mutating the original. Write a function called `updateObject` that returns a new object with one property updated. Keep the original object safe from any changes

### Example:

```js
const obj = { name: "Alice", age: 25 };
const updatedObj = updateObject(obj, "age", 26);

console.log(updatedObj); // Output: { name: 'Alice', age: 26 }
console.log(obj); // Output: { name: 'Alice', age: 25 } (unchanged)
```
