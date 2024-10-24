### Event Logger

Fix the scoping issues in this event tracking system. The code should maintain a maximum of 5 events.

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
eventTracker.logEvent("Login");
eventTracker.logEvent("Click");
eventTracker.logEvent("Scroll");
eventTracker.logEvent("Hover");
eventTracker.logEvent("Logout");
eventTracker.logEvent("NewLogin"); // Should clear old events
console.log(eventTracker.currentEvents); // Shows last 5 events
```
