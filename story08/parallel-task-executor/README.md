# Parallel Tasks Executor

Create a function that executes multiple tasks in parallel with the following requirements:

### Instructions

- The function should take an array of task objects with:
  - `id`: unique identifier
  - `task`: async function to execute
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

[Promise.all()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

### Example:

```js
const tasks = [
  {
    id: 1,
    task: async () => {
      const response = await fetch("https://api.example.com/data");
      return response.json();
    },
    priority: 1,
    timeout: 1000,
  },
  {
    id: 2,
    task: async () => {
      await processData();
      return "processed";
    },
    priority: 2,
    timeout: 2000,
  },
];

const result = await executeParallelTasks(tasks);

// Expected output format:
{
    successful: [
        { id: 1, result: {...}, }
    ],
    failed: [
        { id: 2, error: "Task Timeout"}
    ]
}
```
