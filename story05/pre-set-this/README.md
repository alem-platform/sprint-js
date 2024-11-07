# Pre-set this

| Expected file   |
| --------------- |
| pre-set-this.js |

### Instructions

Write a function `preSetThis` that accepts a function and two objects. It should return an array of two functions: `fnForObj1`, `fnForObj2`, which bind `this` to the corresponding objects.

### Resources

[Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

### Expected Function

```js
function preSetThis(obj1, obj2, func) {
  // Your code here
}
```

### Example:

```js
function showThis() {
  console.log(this.value);
}

const obj1 = { value: "A" };
const obj2 = { value: "B" };

const [fnForObj1, fnForObj2] = preSetThis(obj1, obj2, showThis);
fnForObj1(); // Output: A
fnForObj2(); // Output: B
```
