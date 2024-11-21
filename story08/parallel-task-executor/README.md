# Parallel Tasks Executor

| Expected file               |
| --------------------------- |
| `parallel-task-executor.js` |

Create a function that executes multiple tasks in parallel with the following requirements:

### Instructions

- The function should take an array of task objects with:
  - `id`: unique identifier
  - `task`: async function to execute
- Return an object with:
  - `successful`: array of successful task results
  - `failed`: array of failed task details

### Notes

- Execute all tasks in parallel using `Promise.all()`

```js
async function executeParallelTasks(tasks) {
  // Write your code here
}

// Utility: Create a delayed task
const createTask =
  (delay, shouldFail = false) =>
  async () => {
    await new Promise((resolve) => setTimeout(resolve, delay));
    if (shouldFail) throw new Error("Task Failed");
    return `Completed in ${delay}ms`;
  };
```

### Example:

```js
const tasks = [
  { id: 1, task: createTask(300) },
  { id: 2, task: createTask(200, true) },
  { id: 3, task: createTask(100) },
  { id: 4, task: createTask(500) },
];

executeParallelTasks(tasks).then((result) =>
  console.log(JSON.stringify(result, null, 2))
);
// {
//     "successful": [
//       {
//         "id": 1,
//         "result": "Completed in 300ms"
//       },
//       {
//         "id": 3,
//         "result": "Completed in 100ms"
//       },
//       {
//         "id": 4,
//         "result": "Completed in 500ms"
//       }
//     ],
//     "failed": [
//       {
//         "id": 2,
//         "error": "Task Failed"
//       }
//     ]
//   }
```
