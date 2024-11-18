# Cancellable

Write a function that creates a cancellable interval.

### Instructions

- The function should take 4 parameters:
  - `fn`: The function to be called repeatedly
  - `args`: Array of arguments to pass to fn
  - `t`: Interval time in milliseconds
- Call `fn` immediately with args
- Call `fn` every `t` milliseconds with args
- Return a `cancelFn`

```js
function cancellable(fn, args, t) {
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
```
