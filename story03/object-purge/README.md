# Object Purge

| Expected file   |
| --------------- |
| object-purge.js |

### Instructions:

Write a function called `objectPurge` that takes an object and a callback function to filter the object’s properties. For each property, if the callback returns `true` for its value, remove that property from the object.

- `objectPurge` should modify the original object by deleting any properties for which the callback function returns true when passed the property’s value.
- The function should not return a new object but directly alter the input object.

### Example:

```js
const corruptObject = { name: "Alice", age: 30, score: 0 };
objectPurge(corruptObject, (value) => value === 0);
console.log(corruptObject);
// Output: { name: 'Alice', age: 30 } (score is deleted)
```
