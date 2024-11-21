# Parallel Tasks Executor Priority

| Expected file                 |
| ----------------------------- |
| `parallel-task-executor-2.js` |

Upgrade your `executeParallelTasks` function and add some additional features. Add task execution priority.

### Instructions

- The function should take an array of task objects with:
  - `id`
  - `task`
  - `priority`: number (1-3, where 1 is highest)
  - `timeout`: maximum time allowed for execution in ms
- Implementation requirements:
  - Tasks with priority `1` should start immediately
  - Tasks with priority `2` should start after 100ms delay
  - Tasks with priority `3` should start after 200ms delay
  - If a task exceeds its timeout, it should fail with `"Task Timeout"`
- Return an object with:
  - `successful`: array of successful task results
  - `failed`: array of failed task details

### Notes

- Use `Promise.race()` to enforce the timeout for each task.

```js
async function executeParallelTasksPriority(tasks) {
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
  { id: 1, task: createTask(300), priority: 1, timeout: 500 },
  { id: 2, task: createTask(200, true), priority: 2, timeout: 400 },
  { id: 3, task: createTask(100), priority: 3, timeout: 150 },
  { id: 4, task: createTask(500), priority: 1, timeout: 300 },
];

executeParallelTasksPriority(tasks).then((result) =>
  console.log(JSON.stringify(result, null, 2))
);
// {
//   "successful": [
//     {
//       "id": 1,
//       "result": "Completed in 300ms"
//     },
//     {
//       "id": 3,
//       "result": "Completed in 100ms"
//     }
//   ],
//   "failed": [
//     {
//       "id": 2,
//       "error": "Task Failed"
//     },
//     {
//       "id": 4,
//       "error": "Task Timeout"
//     }
//   ]
// }
```
