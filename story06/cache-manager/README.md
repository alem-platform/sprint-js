### Cache Manager

Fix the variable hoisting and block scope issues in this cache implementation.

```js
// BROKEN CODE
const cacheManager = {
  init() {
    console.log(cache);
    var cache = new Map();

    return {
      set(key, value) {
        if (!cache.has(key)) {
          let timestamp = Date.now();
          var entry = { value, timestamp };
          cache.set(key, entry);
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
console.log(entry1);
// Should show: { value: "abc123", timestamp: 1234567890 }

console.log(cache.get("apiKey")); // Should show: "abc123"
console.log(cache.get("missing")); // Should show: undefined

const entry2 = cache.set("apiKey", "newValue");
console.log(entry2);
// Should show: { value: "newValue", timestamp: 1234567891 }
```
