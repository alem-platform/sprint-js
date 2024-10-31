# Promise.allSettled()

Implement Promise.allSettled()

### Instructions

Create your own implementation of Promise.allSettled() called promiseAllSettled().

```js
function promiseAllSettled(promises) {
  // Your implementation here
}
```

(Promise.allSettled())[https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled]

### Example:

```js
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = Promise.reject("Error!");

promiseAllSettled([promise1, promise2, promise3]).then((results) => {
  console.log(results);
  // Should log:
  // [
  //   { status: 'fulfilled', value: 3 },
  //   { status: 'fulfilled', value: 2 },
  //   { status: 'rejected', reason: 'Error!' }
  // ]
});
```
