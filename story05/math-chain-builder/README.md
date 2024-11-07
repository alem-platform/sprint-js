# Borrow and Chain?

| Expected file         |
| --------------------- |
| math-chain-builder.js |

Implement a system that extends the `Math` object with a new methods:

- `factorial`: calculates the factorial of the given number
- `log_a_b`: calculates the logarithm of a base b
- `gcd`: finds the greatest common divisor of two numbers
- `mean`: finds the mean value of the given array

### Requirements

- Don't modify existing Math methods
- Handle invalid inputs

### Example

```js
console.log(Math.factorial(5)); // Output: 120
console.log(Math.factorial(0)); // Output: 1

console.log(Math.log_a_b(8, 2)); // Output: 3
console.log(Math.log_a_b(100, 10)); // Output: 2

console.log(Math.gcd(8, 12)); // Output: 4
console.log(Math.gcd(54, 24)); // Output: 6

console.log(Math.mean([1, 2, 3, 4, 5])); // Output: 3
console.log(Math.mean([10, 20, 30])); // Output: 20
```
