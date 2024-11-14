# My Object Methods

| Expected file       |
| ------------------- |
| `my-obj-methods.js` |

### Instructions:

Implement the following functions to replicate the behavior of common JavaScript object methods without using the built-in methods they mimic.

- `myObjectKeys`: Replicates `Object.keys`, returning an array of the object's own property keys.
- `myObjectValues`: Replicates `Object.values`, returning an array of the object's own property values.
- `myObjectEntries`: Replicates `Object.entries`, returning an array of the object's own key-value pairs.
- `myObjectFromEntries`: Replicates `Object.fromEntries`, constructing an object from an array of key-value pairs.

Restrictions:

- You **may not** use the built-in `Object.keys`, `Object.values`, `Object.entries`, or `Object.fromEntries`.
- Ensure that your implementations handle typical edge cases, such as empty objects and non-object inputs.

### Resources:

- [Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Object.values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
- [Object.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [Object.fromEntries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)

### Function definitions:

```js
/**
 * Returns an array of a given object's own property keys.
 *
 * @param {Object} obj - The object to extract keys from
 * @return {string[]} An array of property keys
 */
function myObjectKeys(obj) {
  // Your Solution
}

/**
 * Returns an array of a given object's own property values.
 *
 * @param {Object} obj - The object to extract values from
 * @return {Array} An array of property values
 */
function myObjectValues(obj) {
  // Your Solution
}

/**
 * Returns an array of a given object's own key-value pairs.
 *
 * @param {Object} obj - The object to extract entries from
 * @return {Array[]} An array of [key, value] pairs
 */
function myObjectEntries(obj) {
  // Your Solution
}

/**
 * Creates an object from an array of key-value pairs.
 *
 * @param {Array[]} entries - An array of [key, value] pairs
 * @return {Object} The constructed object
 */
function myObjectFromEntries(entries) {
  // Your Solution
}
```

### Example usage:

```js
const obj = { name: "Alice", age: 25, city: "Wonderland" };

console.log(myObjectKeys(obj));
// Output: ["name", "age", "city"]

console.log(myObjectValues(obj));
// Output: ["Alice", 25, "Wonderland"]

console.log(myObjectEntries(obj));
// Output: [["name", "Alice"], ["age", 25], ["city", "Wonderland"]]

const entries = [
  ["name", "Bob"],
  ["age", 30],
  ["city", "Atlantis"],
];
console.log(myObjectFromEntries(entries));
// Output: { name: "Bob", age: 30, city: "Atlantis" }
```
