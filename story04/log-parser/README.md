# Log Parser

### Instructions

| Expected file |
| ------------- |
| log-parser.js |

Write a function called `parseLog` that extracts components from log entries using regex. Each log entry contains a timestamp, log level, and message.

### Expected Function

```js
function parseLog(logEntry) {
  // Your code here
}
```

The function should parse logs with the format:

- Date: YYYY-MM-DD
- Time: HH:mm:ss
- Log Level: [ERROR], [INFO], [WARNING], [DEBUG]
- Message: Rest of the line

Requirements:

- Return null for invalid log format
- Extract each component into separate fields
- Validate date and time format
- Support all standard log levels
- Handle messages containing special characters

### Example

```js
console.log(parseLog("2023-03-15 14:23:45 [ERROR] Database connection failed"));
// {
//     date: "2023-03-15",
//     time: "14:23:45",
//     level: "ERROR",
//     message: "Database connection failed"
// }

console.log(parseLog("2024-01-20 08:12:33 [INFO] Server started successfully"));
// {
//     date: "2024-01-20",
//     time: "08:12:33",
//     level: "INFO",
//     message: "Server started successfully"
// }

console.log(parseLog("2024-01-20 09:15:00 [WARNING] High memory usage: 85%"));
// {
//     date: "2024-01-20",
//     time: "09:15:00",
//     level: "WARNING",
//     message: "High memory usage: 85%"
// }
console.log(parseLog("Invalid log format")); // null
```
