# Count-Masters

| Expected file   |
| --------------- |
| count-master.js |

### Instructions:

Write a function called `countMaster` that returns another function (an inner function). This inner function will maintain its own count, even after multiple invocations. Each time the inner function is called, it should increment the counter and return the updated value.

1. Create a main function `countMaster` that:

   - Takes an optional starting value (defaults to 0)
   - Returns a new counter function

2. The returned `counter` function should:

   - Increment its internal count by 1 each time it's called
   - Return the current count value
   - Maintain its state between calls

### Example:

```js
const counter = countMaster();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
```

```js
const firstCounter = countMaster();
const secondCounter = countMaster();

firstCounter(); // Output: 1
firstCounter(); // Output: 2
secondCounter(); // Output: 1
```
