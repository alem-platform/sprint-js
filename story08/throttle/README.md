# Throttle

Create your own implementation of the lodash `throttle` function.

### Instructions

Write a function `throttle` that works exactly like \_.throttle from lodash.
Parameters:

- func (Function): The function to throttle
- wait (number): The number of milliseconds to throttle invocations to
- options (Object) [optional]: The options object
  - leading (boolean): Call func on the leading edge of the timeout
  - trailing (boolean): Call func on the trailing edge of the timeout

### Resources:

- [lodash.throttle](https://www.npmjs.com/package/lodash.throttle)

### Example:

```js
const throttledFn = throttle(fn, 100);
throttledFn(); // called immediately
throttledFn(); // ignored
throttledFn(); // ignored
// after 100ms -> fn can be called again
```
