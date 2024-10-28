# Cancellable

Write a function that creates a cancellable interval.

### Instructions

- 1.  The function should take 4 parameters:
- - fn: The function to be called repeatedly
- - args: Array of arguments to pass to fn
- - t: Interval time in milliseconds
- - cancelTimeMs: Time after which the interval should be cancelled
-
- 2.  The function should:
- - Call fn immediately with args
- - Call fn every t milliseconds with args
- - Return a cancelFn that will be called after cancelTimeMs
- - Stop calling fn after cancelFn is called
-
- 3.  Return array of times at which fn is called

```js
function cancellable(fn, args, t, cancelTimeMs) {
  // Write your code here
}
```

(clearInterval)[https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval]

### Example:

```js
const result = [];
const fn = (x) => result.push(x);
const args = [5];
const t = 100;
const cancelTimeMs = 250;

cancellable(fn, args, t, cancelTimeMs);

return new Promise((resolve) => {
  setTimeout(() => {
    // Should have called approximately 3 times (0ms, 100ms, 200ms)
    console.assert(
      result.length === 3,
      `Test 1 Failed: Expected 3 calls, got ${result.length}`
    );
    console.assert(
      result.every((x) => x === 5),
      "Test 1 Failed: Wrong arguments passed"
    );
    resolve();
  }, cancelTimeMs + 100);
});
```

```js
const result = [];
const fn = (x, y) => result.push([x, y]);
const args = [1, 2];
const t = 50;
const cancelTimeMs = 125;

cancellable(fn, args, t, cancelTimeMs);

return new Promise((resolve) => {
  setTimeout(() => {
    // Should have called approximately 3 times (0ms, 50ms, 100ms)
    console.assert(
      result.length === 3,
      `Test 2 Failed: Expected 3 calls, got ${result.length}`
    );
    console.assert(
      result.every(([x, y]) => x === 1 && y === 2),
      "Test 2 Failed: Wrong arguments passed"
    );
    resolve();
  }, cancelTimeMs + 50);
});
```
