# The Hybrid Creature

| Expected file      |
| ------------------ |
| hybrid-creature.js |

### Instructions

Write a function called `createHybridObject` that takes an object and a method to add to its prototype. The function should create and return a new object instance.

The factory function should accept:

- obj: The object containing properties to be passed to the constructor function.
- method: A function that will be added to the prototype of the created object.

### Expected Function

```js
function createHybridObject(obj, method) {}
```

### Resources

- [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [Prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype#changing_the_prototype_of_all_instances_by_mutating_the_prototype_property)
- [Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

### Example

```js
const sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const obj = { name: "Alice", age: 30 };

const hybridObj = createHybridObject(obj, sayHello);
hybridObj.sayHello(); // Hello, my name is Alice and I am 30 years old

obj.sayHello() // Error


const mathObj = { x: 10, y: 20 };
const mathInstance = createHybridObject(mathObj, function sum() { 
    return this.x + this.y; 
});
console.log(mathInstance.sum()); // 30
```
