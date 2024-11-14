# Retry

Implement a retry function that attempts to execute an async operation multiple times with timeout.

### Instructions

- The function should take the following parameters:
  - `fn`: async function to retry
  - `retries`: number of retry attempts (default: 3)
  - `timeout`: timeout for each attempt in ms (default: 1000)
  - `onRetry`: optional callback called on each retry with attempt number and error
- The function should:
  - Attempt to execute `fn`
  - If `fn` fails or times out, retry up to `retries` times
  - Wait for the specified timeout before failing each attempt
  - Call `onRetry` callback between attempts with attempt count and error
  - Return the first successful result
  - Throw the last error if all attempts fail
- Use `Promise.race()` to implement the timeout functionality

```js
function retry(fn, retries = 3, timeout = 1000, onRetry = null) {
  // Write your code here
}

// Utility function to create a delayed promise
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
```

### Resources:

- [Promise.race()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)

### Example:

```js
const result = [];

const fn = (x) => x * 2;
const args = [4];
const t = 35;
const cancelTimeMs = 190;

const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t, cancelTimeMs);

// After cancelTimeMs (190ms), log should have been called 6 times
// with the following approximate return values:
// [
//    {"time": 0, "returned": 8},
//    {"time": 35, "returned": 8},
//    {"time": 70, "returned": 8},
//    {"time": 105, "returned": 8},
//    {"time": 140, "returned": 8},
//    {"time": 175, "returned": 8}
// ]
```
