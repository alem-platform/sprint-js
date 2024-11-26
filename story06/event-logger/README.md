### Event Logger

| Expected file     |
| ----------------- |
| `event-logger.js` |

### Instructions

Fix the scoping issues in this event tracking system. The code should maintain maximum 5 events.

```js
// BROKEN CODE
const eventTracker = {
  events: [],
  MAX_EVENTS: 5,

  logEvent(eventName) {
    // Code to log events goes here
  },

  get currentEvents() {
    return this.events;
  },
};
```

Each event is an object:

```js
{
  eventName: 'event name',
  timestamp: 'date of event',
}
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
