# Object Purge – Eliminate the Impurities

Create a function called `objectPurge` that takes an object and a callback function to filter the object’s properties. If the callback returns true for any property’s value, you must delete that property. Cleanse the object from impurities!

### Example Operation:

```js
const corruptObject = { name: "Alice", age: 30, score: 0 };
objectPurge(corruptObject, (value) => value === 0);
console.log(corruptObject);
// Output: { name: 'Alice', age: 30 } (score is deleted)
```
