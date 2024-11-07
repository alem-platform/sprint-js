# Arrow Escape

| Expected file |
| ------------- |
| arrow-this.js |

Fix the `getValue` method in `obj` so that it works correctly.

### Starting Code:

```js
const obj = {
  value: "arrowPower",
  getValue: () => this.value,
};

console.log(obj.getValue()); // Output: 'arrowPower'
```
