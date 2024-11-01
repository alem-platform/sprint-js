# Temperature Converter Class

### Instructions

Create a class called `TemperatureConverter` that handles temperature conversions between Celsius and Fahrenheit using modern JavaScript features.

The class should:

- Use ES6+ class syntax
- Implement getters and setters for both Celsius and Fahrenheit
- Store the temperature in one standard unit (Celsius) internally
- Use private class fields to prevent direct access to stored temperature
- Implement proper rounding to 2 decimal places
- Include input validation for temperature values
- Use template literals for any string outputs

### Expected Class Structure

```js
class TemperatureConverter {
  // Your code here
}
```

### Example

```js
const temp = new TemperatureConverter();

// Basic conversion
temp.celsius = 25;
console.log(temp.fahrenheit);

// Chained conversions
temp.fahrenheit = 100;
console.log(temp.celsius);
console.log(temp.fahrenheit);

// Temperature description
console.log(temp.getDescription());
```

Output:

```bash
77
37.78
100
The current temperature is 37.78°C (100°F)
```
