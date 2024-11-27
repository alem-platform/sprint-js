### Broken counter

| Expected file       |
| ------------------- |
| `broken-counter.js` |

### Instructions

Fix the scope and variable declaration issues in this counter factory.

```js
// BROKEN CODE
function createCounters() {
  let counters = {};

  return {
    increment(name) {
      var count = counters[name] || 0;
      let count = count + 1; // Wrong redeclaration!
      counters[name] = count;
      return count;
    },

    getCount(name) {
      var count = counters[name];
      return count || 0;
    },
  };
}
```

### Example

```js
const counter = createCounters();
counter.increment("userA"); // 1
counter.increment("userA"); // 2
counter.increment("userB"); // 1
console.log(counter.getCount("userA")); // 2
console.log(counter.getCount("userB")); // 1
console.log(counter.getCount("userC")); // 0 (non-existent counter)
```
