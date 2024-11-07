# Alem Countdown

| Expected file   |
| --------------- |
| alem-countdown.js |

### Instructions:

Write a function called `alemCountdown` that takes an integer N and returns a string containing all numbers from 1 to N (inclusive) separated by spaces, considering special rules for certain numbers.

If the number is divisible by 3, replace the number with "salem".
If the number is divisible by 7, replace the number with "alem".
If the number is divisible by both 3 and 7, replace the number with "salem alem".

### Example:

```js
alemCountdown(10);
// Output: "1 2 salem 4 5 salem alem 8 salem 10"
```

```js
alemCountdown(21);
// Output: "1 2 salem 4 5 salem alem 8 salem 10 11 salem 13 alem salem 16 salem 19 20 salem alem"
```
