# Debounce

Create your own implementation of the lodash `debounce` function.

### Instructions

Write a function `debounce` that works exactly like \_.debounce from `lodash`.
Your function should accept these parameters:

- `func` (Function): The function to debounce
- `wait` (number): The number of milliseconds to delay
- `options` (Object) [optional]: The options object
  - `leading` (boolean): Call func on the leading edge of the timeout

### Resources:

- [debounce decorator](https://javascript.info/task/debounce)
- [lodash.debounce](https://www.npmjs.com/package/lodash.debounce)

### Example:

```js
const debouncedFn = debounce(fn, 1000);
debouncedFn(); // called immediately
debouncedFn(); // ignored
debouncedFn(); // ignored
// after 1000ms -> fn executed once
```
