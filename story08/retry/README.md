# Retry

| Expected file |
| ------------- |
| `retry.js`    |

Implement a `retry` function that attempts to execute an async operation multiple times with timeout.

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
const slowFn = async () => {
  await delay(2000); // Simulates a slow operation
  return "Slow success!";
};

const retriedSlowFn = retry(slowFn, 3, 1000);

retriedSlowFn()
  .then((result) => console.log("Result:", result))
  .catch((error) => console.error("Failed:", error.message));
// Failed: Operation timed out
```
