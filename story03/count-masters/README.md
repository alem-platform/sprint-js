# Count-Masters

| Expected file    |
| ---------------- |
| count-masters.js |

### Instructions:

Write a function called `countMaster` that accepts initial value for starting count, and returns another function (an inner function). This inner function will maintain its own count, even after multiple invocations. Each time the inner function is called, it should increment the counter and return the updated value.

1. Create a main function `countMaster` that:

   - Takes an optional starting value (defaults to 0)
   - Returns a new counter function

2. The returned `counter` function should:

   - Increment its internal count by 1 each time it's called
   - Return the current count value
   - Maintain its state between calls

### Expected function:

```js
function countMaster(num) {
  //
}
```

### Example:

```js
const counter = countMaster(0);
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
```

```js
const firstCounter = countMaster(0);
const secondCounter = countMaster(0);

firstCounter(); // Output: 1
firstCounter(); // Output: 2
secondCounter(); // Output: 1
```
