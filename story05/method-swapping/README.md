# Method Swapping

| Expected file      |
| ------------------ |
| method-swapping.js |

Write a function `methodSwap` that accepts a method name and two object. Your function should swap methods between objects.

### Expected Function

```js
function methodSwap(obj1, obj2, methodName) {
  // Your code here
}
```

### Example:

```js
const obj1 = {
  name: "Object 1",
  getName: function () {
    return this.name;
  },
};

const obj2 = {
  name: "Object 2",
  getName: function () {
    return this.name;
  },
};

methodSwap(obj1, obj2, getName);
obj1.getName(); // Object2
obj2.getName(); // Object1
```
