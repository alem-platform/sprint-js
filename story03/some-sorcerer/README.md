# Some Sorcerer

Write a function called `someReinventor` that mimics the functionality of the built-in `some` method. This function should take an array and a callback function as arguments and return true if at least one element in the array passes the callback test, or false otherwise.

### Instructions:

- Your function should not use the built-in `some` method.
- The function should return true as soon as it finds an element that passes the test.
- Parameters:
  1. array: An array containing any values (numbers, strings, objects, etc.).
  2. callback: A function that takes each element as an argument and returns true or false based on the element.

### Example:

```js
someReinventor([1, 2, 3], (num) => num > 2);
// Output: true
```
