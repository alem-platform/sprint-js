# Pre-set this

| Expected file   |
| --------------- |
| pre-set-this.js |

Given a function that logs `this`. Use `bind` to create two new functions `showForObj1` and `showForObj2` that set `this` to two differennt given objects.

### Resources

[Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

### Expected Function

```js
function preSetThis(obj1, obj2, func) {
  // Your code here
}
```

### Example Starting Code:

```js
function showThis() {
  console.log(this.value);
}

const obj1 = { value: "A" };
const obj2 = { value: "B" };

// your code here

showForObj1(); // Output: A
showForObj2(); // Output: B
```
