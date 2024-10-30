# Closure Destructor

Write a function `closureDestructor` that uses a [closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) to capture some data (like an event handler or a large array). After capturing, the closure should be able to release memory explicitly when a `destroy()` method is called. Make sure the closure retains necessary information until `destroy()` is executed.

### Example:

```js
const des = closureDestructor();
des.logData(); // Logs the large data array
des.destroy(); // Frees the memory held by the closure
des.logData(); // Logs `undefined` after the memory is freed
```

### Instructions:

Capture a large array inside the closure.
Implement a `destroy()` method that cleans up the array, releasing the closure's reference to the data.
After `destroy()` is called, the closure should no longer have access to the large data.
