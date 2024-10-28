# Animate points

Create a function called 'animatePoints' that animates a value from start to end over time.

### Instructions

Create a function called 'animatePoints' that animates a value from start to end over time.
Instructions:
Write a function that accepts an object with these properties:

- start (number): Starting value
- end (number): Ending value
- steps (number): Number of steps to take
- duration (number): Total animation time in milliseconds
- onStep (function): Callback for each step, receives:
  - currentValue (number): The current value
  - stepNumber (number): Current step number (0-based)
  - timestamp (number): Time elapsed since start
    The function should:

1. Animate from start to end in equal steps
2. Call onStep at each step with current progress
3. Space callbacks evenly over the duration
4. Complete exactly after the specified duration

Rules:

- Must use setTimeout or setInterval (not both)
- Must clean up any timers if animation is interrupted
- Must handle edge cases (steps < 2, duration <= 0, etc.)
- Callback timing must be as precise as possible

(setTimeout)[https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout]
(setInterval)[https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval]

### Example:

```js
animatePoints({
  start: 0,
  end: 100,
  steps: 5,
  duration: 1000, // 1 second
  onStep: (value, step, time) => console.log(value),
});
//Should output (approximately):
// 0    // at 0ms
// 25   // at 200ms
// 50   // at 400ms
// 75   // at 600ms
// 100  // at 800ms
```
