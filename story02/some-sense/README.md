# Some Sense

Your task is to determine whether any element in the array meets the condition of your callback.

### Instructions:

Create a function called `someSense` that takes two arguments:

1. An array
2. A callback function

The function should return true if at least one element passes the test, otherwise false.

### Resources:

[some](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

### Example:

```js
someSense([1, 2, 3], (num) => num > 2);
// Output: true

someSense(["apple", "banana", "cherry"], (fruit) => fruit === "orange");
// Output: false
```
