# Borrow and Chain?

| Expected file         |
| --------------------- |
| math-chain-builder.js |

Implement a system that extends the `Math` object with a new method called `stats` which enables chaining of statistical calculations. The system should add the following statistical methods to Math:

- `pearson`: Calculates Pearson correlation coefficient
- `linearRegression`: Computes linear regression coefficients
- `predict`: Predict future result based on the `slope` and `intercept` from the `linearRegression` results
- `value`: Return the correlation value directly after pearson correlation calculations
- `getResults`: Return the object with correlation, slope and intercept properties

### Requirements

- Don't modify existing Math methods
- Handle invalid inputs gracefully
- Support proper method chaining for pearson correlation and linear regression calculations

### Resources

[Method chaining](https://www.geeksforgeeks.org/method-chaining-in-javascript/)
[Person correlatation coefficient](https://en.wikipedia.org/wiki/Pearson_correlation_coefficient)
[linear regression](https://en.wikipedia.org/wiki/Linear_regression)

### Example

```js
const heights = [170, 175, 160, 180, 165, 172];
const weights = [70, 72, 65, 80, 68, 73];

const correlation = Math.stats(heights, weights).pearson().value();
console.log("Correlation:", correlation);
// Output example: 0.95

// Perform linear regression and predict
const regression = Math.stats(heights, weights).linearRegression().predict(168);
console.log("Predicted weight for height 168:", regression);
// Output example: 67.5

const fullAnalysis = Math.stats(heights, weights)
  .pearson()
  .linearRegression()
  .getResults();
console.log("Full analysis:", fullAnalysis);
// Output: { correlation: 0.95, slope: 0.5, intercept: -15.4 }
```
