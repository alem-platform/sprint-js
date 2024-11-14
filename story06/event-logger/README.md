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
    //
  },

  get currentEvents() {
    return events;
  },
};
```
Each event is an object:
```js
{
  name: 'event name',
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
