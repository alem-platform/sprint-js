# The Ultimate Showdown

Your task is to build the `equalizer` function, which will settle the debate of whether two entities are truly, strictly equal.

### Instructions:

Create a function called `equalizer`. This function will receive two arguments, compare them using [strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality), and return the verdict.

### Function Details:

Target Entities: You will receive two unknown values, and your task is to evaluate whether they are strictly the same.

The function will return true if the entities are strictly equal, otherwise false.

### Example:

```js
equalizer(42, 42);
// Output: true

equalizer("42", 42);
// Output: false

equalizer(null, undefined);
// Output: false
```
