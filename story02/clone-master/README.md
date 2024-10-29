# The Clone Master

Cloning isn’t just for science fiction! Your task is to write a function called `deepClone` that creates a deep copy of an object, no matter how deeply nested its properties are. Nothing should be left behind! It’s all about perfect duplication.

### Example:

```js
const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);

clone.b.c = 3;
console.log(original.b.c); // Output: 2 (original stays intact)
```
