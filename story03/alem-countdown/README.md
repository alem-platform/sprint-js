# Alem Countdown

Write a function called `alemCountdown` that takes an integer N and returns a string containing all numbers from 1 to N (inclusive) separated by spaces. However, there are some special rules for certain numbers.

### Instructions:

If the number is divisible by 3, replace the number with "ALEM".
If the number is divisible by 7, replace the number with "SCHOOL".
If the number is divisible by both 3 and 7, replace the number with "ALEM SCHOOL".

### Example:

```js
alemCountdown(10);
// Output: "1 2 ALEM 4 5 ALEM SCHOOL 8 ALEM 10"
```

```js
alemCountdown(21);
// Output: "1 2 ALEM 4 5 ALEM SCHOOL 8 ALEM 10 11 ALEM 13 SCHOOL ALEM 16 ALEM 19 20 ALEM SCHOOL"
```
