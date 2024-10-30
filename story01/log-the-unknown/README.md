# Log the Unknown

In this problem you need to identify the unknown. You will be tasked with scanning and classifying objects of different types (a.k.a. any JavaScript value).

### Instructions:

Create a function called `logTheUnknown`. This highly classified function will accept any value and log its type using [typeof](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/typeof) operator.

### Function Details:

Target Object: Your function will receive a single input, a value from the vast multiverse (or just JavaScript).
Advanced Scanning Technology: Using the built-in typeof, your function will determine the exact type of the object.
Mission Report: The function should return a heroic message like: "Scanning complete: This is a [type]!".

### Example:

```js
logTheUnknown(42);
// will return "Scanning complete: This is a number!"

logTheUnknown("hello");
// will return "Scanning complete: This is a string!"

logTheUnknown({});
// will return "Scanning complete: This is an object!"
```
