# Inheritance Wizard

| Expected file          |
| ---------------------- |
| inheritance-wizzard.js |

Write a function called `setPrototypeLink` to set the proto property of one object to link it to another, allowing it to inherit properties and methods.

### Requirements:

The function `setPrototypeLink` should accept two arguments:

1. childObj: The object whose prototype will be set.
2. parentObj: The object that will serve as the prototype.
   After linking, childObj should have access to properties and methods from parentObj.

### Expected Function

```js
function setPrototypeLink(obj1, obj2) {
  // Your code here
}
```

### Resources:

[Object.prototype.**proto**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)

### Example:

```js
const parentObj = {
  greet: function () {
    return "Hello from the parent!";
  },
};

const childObj = {
  name: "Child",
};

setPrototypeLink(childObj, parentObj);

console.log(childObj.greet()); // Output: 'Hello from the parent!'
console.log(childObj.name); // Output: 'Child'
```
