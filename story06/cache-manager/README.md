### Cache Manager

| Expected file    |
| ---------------- |
| cache-manager.js |

### Instructions

Fix the variable hoisting and block scope issues in this cache implementation.

```js
// BROKEN CODE
const cacheManager = {
  init() {
    var cache = new Map();

    return {
      set(key, value) {
        // Only set if key doesn't exist or value has changed
        if (!cache.has(key)) {
          let timestamp = Date.now();
          cache.set(key, value);
        }
        return entry;
      },

      get(key) {
        return cache.get(key)?.value;
      },
    };
  },
};
```

### Example

```js
const cache = cacheManager.init();

const entry1 = cache.set("apiKey", "abc123");
console.log(entry1); // { value: "abc123", timestamp: 1234567890 }

console.log(cache.get("apiKey")); // "abc123"
console.log(cache.get("missing")); // undefined

const entry2 = cache.set("apiKey", "newValue");
console.log(entry2); // { value: "newValue", timestamp: 1234567891 }
```
