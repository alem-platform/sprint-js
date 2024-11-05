# Falsy Busters

| Expected file    |
| ---------------- |
| falsy-busters.js |

Your task is to identify and remove all falsy values (false, null, undefined, 0, NaN, "") using built-in array methods.

### Resources

- [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
- [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

### Instructions:

Create a function called `falsyBusters` that takes an array as input and uses a built-in method (such as `filter`) to remove falsy values, returning a new, cleaned-up array.

### Expected function:
```js
function falsyBusters(arr) {
  //
}
```

### Example:

```js
falsyBusters([0, 1, false, 2, "", 3]);
// Output: [1, 2, 3]

falsyBusters([null, NaN, "hello", undefined, "world", 0]);
// Output: ['hello', 'world']
```
