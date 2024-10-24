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
console.log(cache.set("key1", "value1")); // { value: "value1", timestamp: 1234567890 }
console.log(cache.get("key1")); // "value1"
console.log(cache.get("nonexistent")); // undefined
```