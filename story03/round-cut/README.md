# Round Cut

### Instructions:

Implement JavaScript's `Math.round()`, `Math.ceil()`, `Math.floor()`, and `Math.trunc()` methods without using the built-in `Math` methods.

1. `round` - this function should round the given number to the nearest integer. Numbers ending in .5 or higher are rounded up, while others are rounded down.

2. `ceil` - this function should return the smallest integer that is greater than or equal to the given number.

3. `floor` - this function should return the largest integer that is less than or equal to the given number.

4. `trunc` - this function should remove the fractional part of the number, returning only the integer part, regardless of whether it is positive or negative.

### Resources

[Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

### Expected Functions:

```js
function round(value) {
  //...
}

function ceil(value) {
  //...
}

function floor(value) {
  //...
}

function trunc(value) {
  //...
}
```

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
