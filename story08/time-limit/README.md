# Time limit

Write a function that implements a time limit for asynchronous functions.

### Instructions


- The function should take two parameters:
  - `fn`: an async function to be time-limited
  - `t`: time limit in milliseconds
- Return a new time-limited version of the input function that:
  - Takes the same arguments as `fn`
  - Returns a promise that resolves with `fn`'s result if fn completes within t milliseconds
  - Rejects with `"Time Limit Exceeded"` if `fn` takes longer than `t` milliseconds
  - Properly handles any errors thrown by `fn`

### Resources:

- [Promise](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise)

### Expected function:

```js
function timeLimit(fn, t) {
  //
}
```

### Example:

```js
const limitedFn = timeLimit(async (x) => x * 2, 100);
limitedFn(5); // resolves to 10 if completed within 100ms
limitedFn(5); // rejects with "Time Limit Exceeded" if takes longer than 100ms
```
