# Cancellable

Write a function that creates a cancellable interval.

### Instructions

- The function should take 4 parameters:
  - `fn`: The function to be called repeatedly
  - `args`: Array of arguments to pass to fn
  - `t`: Interval time in milliseconds
  - `cancelTimeMs`: Time after which the interval should be cancelled
- Call `fn` immediately with args
- Call `fn` every `t` milliseconds with args
- Return a `cancelFn` that will be called after `cancelTimeMs`
- Stop calling `fn` after `cancelFn` is called
- Return array of times at which fn is called

```js
function cancellable(fn, args, t, cancelTimeMs) {
  // Write your code here
}
```

### Resources:

- [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval)

### Example:

```js
 // Example 1: Simple retry
 const fetchWithRetry = retry(
     async () => {
         const response = await fetch('https://api.example.com/data');
         if (!response.ok) throw new Error('API error');
         return response.json();
     },
     3,
     1000
 );

 // Example 2: With retry callback
 const result = await retry(
     async () => { // some async operation },
     3,
     1000,
     (attempt, error) => {
         console.log(`Attempt ${attempt} failed: ${error.message}`);
     }
 );

//  Expected behavior:
//  1. If fn succeeds on first try, returns result immediately
//  2. If fn fails, retries up to specified number of times
//  3. If any attempt takes longer than timeout, considers it a failure
//  4. Calls onRetry between attempts with attempt number and error
//  5. If all attempts fail, throws the last error
```
