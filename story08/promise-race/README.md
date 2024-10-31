# Promise.race()

Implement Promise.race()

### Instructions

Create your own implementation of Promise.race() called promiseRace().

```js
function promiseRace(promises) {
  // Your implementation here
}
```

(Promise.race())[https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/race]

### Example:

```js
// Expected Behavior:
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("First"), 500)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Second"), 100)
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Third"), 200)
);

promiseRace([promise1, promise2, promise3])
  .then((value) => console.log(value)) // Should log: 'Second'
  .catch((error) => console.log(error));

promiseRace([promise3, promise1])
  .then((value) => console.log(value))
  .catch((error) => console.log(error)); // Should log: 'Third'
```
