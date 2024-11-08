# The Hybrid Creature

| Expected file      |
| ------------------ |
| hybrid-creature.js |

### Instructions

Write a function called `createHybridObject` that takes an object and a method to add to its prototype. The function should return the created object instance.

The factory function should accept:

- obj: The object containing properties to be passed to the constructor function.
- method: A function that will be added to the prototype of the created object.

### Expected Function:

```js
function createHybridObject(obj, method) {}
```

### Example:

```js
const sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const obj = { name: "Alice", age: 30 };

const hybridObj = createHybridObject(obj, sayHello);

hybridObj.sayHello(); // Hello, my name is Alice and I am 30 years old
```
