# Alem Countdown

### Instructions:

Write a function called `alemCountdown` that takes an integer N and returns a string containing all numbers from 1 to N (inclusive) separated by spaces, considering special rules for certain numbers.

If the number is divisible by 3, replace the number with "SALEM".
If the number is divisible by 7, replace the number with "ALEM".
If the number is divisible by both 3 and 7, replace the number with "SALEM ALEM".

### Example:

```js
alemCountdown(10);
// Output: "1 2 SALEM 4 5 SALEM ALEM 8 SALEM 10"
```

```js
alemCountdown(21);
// Output: "1 2 SALEM 4 5 SALEM ALEM 8 SALEM 10 11 SALEM 13 ALEM SALEM 16 SALEM 19 20 SALEM ALEM"
```
