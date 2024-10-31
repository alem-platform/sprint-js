# Round Cut

You’ll create functions that behave similarly to JavaScript's Math rounding functions, but without using them directly.

### Instructions:

Write four separate functions that mimic the behavior of JavaScript's `Math.round()`, `Math.ceil()`, `Math.floor()`, and `Math.trunc()`. You are not allowed to use any built-in Math functions for this task.

1. round(num)
   This function should round the given number to the nearest integer. Numbers ending in .5 or higher are rounded up, while others are rounded down.

2. ceil(num)
   This function should return the smallest integer that is greater than or equal to the given number.

3. floor(num)
   This function should return the largest integer that is less than or equal to the given number.

4. trunc(num)
   This function should remove the fractional part of the number, returning only the integer part, regardless of whether it is positive or negative.

### Resources

[Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

### Example:

```js
round(4.5);
// Output: 5

ceil(4.2);
// Output: 5

floor(4.7);
// Output: 4

trunc(4.9);
// Output: 4
```
