### Cache Manager

| Expected file    |
| ---------------- |
| cache-manager.js |

### Instructions

Fix the variable hoisting, block scope and other issues in this cache implementation.

```js
// BROKEN CODE
const cacheManager = {
  init() {
    var cache = new Map();

    return {
      set(key, value) {
        // Only set if key doesn't exist or value has changed
        let timestamp = Date.now();

        return cache.get(value);
      },

      get(key) {},
    };
  },
};
```

### Example

```js
const cache = cacheManager.init();

const entry1 = cache.set("apiKey", "abc123");
console.log(entry1); // { value: 'abc123', timestamp: 1731410502322 }

const entry2 = cache.set("apiKey", "abc123");
console.log(entry2); // { value: 'abc123', timestamp: 1731410502322 }

const entry3 = cache.set("apiKey", "newValue");
console.log(entry3); // { value: 'newValue', timestamp: 1731410502330 }

console.log(cache.get("apiKey")); // newValue
console.log(cache.get("missing")); // undefined
```
