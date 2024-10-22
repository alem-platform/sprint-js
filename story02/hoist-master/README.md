# Hoist Master

Write a function called `hoistMaster` that showcases the following:

1. Function Hoisting:
   Call `magicFunction` before it's declared.
   Define the function later in the code, where declared function should log `"I'm a hoisted function!")`, and hoisting will allow it to be used beforehand.
2. Variable Hoisting:
   Reference the variable `magicVar` before declaring it.
   Hoisting will lift its declaration, but not its assignment.
3. Conditional Madness:
   Use an if condition that modifies `magicVar` based on its hoisted value (which will initially be undefined).
4. Return:
   The function should return `magicVar` after being conditionally modified.
