# Create Iterable Object

| Expected file            |
| ------------------------ |
| `create-iterable-obj.js` |

### Instructions:

Write a function `createIterableObj` that takes a single argument, `size`, and returns an object that is iterable. When iterated over, this object should yield numbers from `0` up to `size - 1`.

### Requirements:

- The returned object should be iterable, implementing the `[Symbol.iterator]` method.
- The returned object should not be array.
- When iterated over, it should yield numbers from `0` up to `size - 1`.
- If `size` is `0` or a negative number, the iterable should not yield any values.

- [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

### Function definition:

```js
function createIterableObj(size) {
  // Your Solution
}
```

### Example usage:

```js
const iterableObj = createIterableObj(5);

for (const value of iterableObj) {
  console.log(value);
}
// Output:
// 0
// 1
// 2
// 3
// 4

console.log([...createIterableObj(3)]); // Output: [0, 1, 2]
console.log([...createIterableObj(0)]); // Output: []
```
