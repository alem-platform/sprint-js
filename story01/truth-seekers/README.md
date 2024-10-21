# The Truth Seekers

You are tasked with answering one simple question: Is there at least one element that passes the test? Using the mystical `some` method, your mission is to determine whether any element in the array meets the condition of your callback.

### Your Objective:

Create a function called `someSense` that takes two arguments:

1. An array: The set of elements you’ll be investigating.
2. A callback function: The truth test that will be applied to each element.

The function should return true if at least one element passes the test, otherwise false.

### Example Operation:

```js
someSense([1, 2, 3], (num) => num > 2);
// Output: true

someSense(["apple", "banana", "cherry"], (fruit) => fruit === "orange");
// Output: false
```
