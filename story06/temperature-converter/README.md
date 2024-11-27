# Temperature Converter

| Expected file            |
| ------------------------ |
| temperature-converter.js |

### Instructions

Create a class called `TemperatureConverter` that handles temperature conversions between celsius and fahrenheit.

The class should:

- Store the temperature in `celsius` as a private field.
- Implement getters and setters for both `celsius` and `fahrenheit`
- Provide a `getDescription` method that returns a formatted string with the current temperature in both celsius and fahrenheit.
- When accessing private fields through getters, round the returned values to 2 decimal places. Keep the original values unrounded in storage.

### Expected Class Structure

```js
class TemperatureConverter {
  // Your code here
}
```

### Example

```js
const temp = new TemperatureConverter();

temp.celsius = 25;
console.log(temp.celsius); // 25
console.log(temp.fahrenheit); // 77

temp.fahrenheit = 100;
console.log(temp.celsius); // 37.78
console.log(temp.fahrenheit); // 100

console.log(temp.getDescription()); // The current temperature is 37.78°C (100°F)
```
