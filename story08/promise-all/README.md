# Promise.all()

Implement Promise.all()

### Instructions

Create your own implementation of Promise.all() called promiseAll().

```js
function promiseAll(promises) {
  // Your implementation here
}
```

(Promise.all())[https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/all]

### Example:

```js
// Expected Behavior:
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = Promise.resolve(4);
const promises = [promise1, promise2, promise3];

promiseAll(promises)
  .then((values) => {
    console.log(values); // Should log: [3, 2, 4]
  })
  .catch((error) => {
    console.error(error);
  });

// Should handle errors:
const failingPromise = Promise.reject("Failed!");
promiseAll([promise1, failingPromise, promise3]).catch((error) =>
  console.log(error)
); // Should log: 'Failed!'
```
