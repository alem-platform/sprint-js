### Event Logger

| Expected file   |
| --------------- |
| event-logger.js |

### Instructions

Fix the scoping issues in this event tracking system. The code should maintain maximum 5 events.

```js
// BROKEN CODE
let events = [];
const MAX_EVENTS = 5;

const eventTracker = {
  logEvent(eventName) {
    if (events.length >= MAX_EVENTS) {
      let events = []; // Wrong scope!
    }
    events.push({ name: eventName, timestamp: Date.now() });
    return events.length;
  },

  get currentEvents() {
    return events;
  },
};
```

### Example

```js
eventTracker.logEvent("Login"); // 1
eventTracker.logEvent("Click"); // 2
eventTracker.logEvent("Scroll"); // 3
eventTracker.logEvent("Hover"); // 4
eventTracker.logEvent("Logout"); // 5

eventTracker.logEvent("NewLogin"); // 1
console.log(eventTracker.currentEvents); // ["NewLogin"]
```
