# crunch01: The Maze Escape

Once upon a time in the land of Computoria, there lived a valiant knight named Sir Wiggleton the Wanderer. Despite his brave reputation, Sir Wiggleton had a small problem: he couldn’t find his way out of anything, not even a simple hedge maze! Whether it was escaping from his castle or locating the royal outhouse, Wiggleton had a knack for getting stuck in the most trivial situations.

One day, Sir Wiggleton found himself lost inside a magical maze created by the mischievous wizard, Algor the Tricky. The maze was an ancient puzzle said to test the mental agility of even the most brilliant minds in Computoria. The wizard, however, found it amusing to keep Wiggleton trapped, watching him aimlessly wander about for hours.

But Wiggleton, not wanting to live out his days eating berries in a maze, cried out, “There must be a way out! And if I cannot find it, I’ll invent a strategy to get through!” Thus, Wiggleton began learning about two powerful techniques: [DFS](https://en.wikipedia.org/wiki/Depth-first_search) and [Dijkstra’s](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) Pathfinding.

## Objective

You are given a maze in the form of a 2D array (grid) where:

- 1 represents the walls (border or obstacles that cannot be crossed),
- 0 represents open paths that can be navigated.

Your task is to find the shortest path from a starting point `X` to a target point `Y` using an algorithm of your choice. You must visualize the pathfinding process step-by-step as it dynamically explores the maze.

### Instructions

1. Input:

- A 2D array grid representing the maze.
- Coordinates start and end, where: - start = [x1, y1] is the starting position in the maze. - end = [x2, y2] is the destination point.

2. Output:

- A visualization of the maze exploration as the algorithm searches for the shortest path.
- The algorithm should highlight how it dynamically discovers new areas, moving towards the target.

3. Algorithm Choice:

- DFS (Depth-First Search): Will explore one path deeply before backtracking.
- Dijkstra's Algorithm: Will prioritize exploring shorter paths to the destination dynamically.

4. Visualization Requirements:

- Mark the cells that have been visited (during search process with selected Algorithm) with number 2.
- Highlight the final path once found by replacing cells with number 3
- For checking you solution you can use ready-for-use [maze-escape starting code](https://github.com/alem-platform/bootcamp-js/tree/crunch01/crunch01/maze-escape)

### Example

- Given:

```js
[
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 0, 1, 1],
  [1, 0, 1, 1, 0, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 0, 1, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
],
  [1, 1], // start point
  [6, 5]; // final destination
```

- Solution:

```js
[
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 3, 1, 1, 2, 2, 2, 1, 1],
  [1, 3, 1, 1, 2, 1, 2, 1, 1],
  [1, 3, 2, 2, 2, 1, 2, 1, 1],
  [1, 3, 1, 1, 1, 2, 1, 0, 1],
  [1, 3, 3, 3, 3, 3, 3, 0, 1],
  [1, 1, 2, 1, 1, 2, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
],
  [1, 1], // start point
  [6, 5]; // final destination
```

### Testing

You can take those 3 starting maps for testing your solution:

```js
[
  [1, 1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 1],
  [1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
],
  [0, 1], // start point
  [3, 1]; // final destrination
```

```js
[
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
],
  [1, 1], // start point
  [16, 13]; // final destrination
```

```js
[
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
],
  [1, 1], // start point
  [18, 15]; // final destrination
```

### Assessment criteria

1.  Functionality

    - Correctness:

      - Correctly initializes and renders the maze grid based on a 2D array input.
      - Accurately detects walls (1) and open paths (0) and marks the start and end positions correctly.
      - Implements a pathfinding algorithm that correctly navigates from the start to the end point.

    - Edge Cases:

      - Handles small maze grids (e.g., 2x2 and 3x3) with walls blocking paths or no walls at all.
      - Correctly manages unsolvable mazes (no possible path) and outputs an appropriate message.
      - Manages edge case mazes, such as grids where the start or end point is surrounded by walls or at the grid edges.

2.  Code Quality

    - Readability:

      - Code is well-organized with consistent indentation, spacing, and line breaks.
      - Functions, variables, and constants are named descriptively and meaningfully.
      - In-line comments explain complex logic and algorithms, and there is a clear overall code structure.

    - Efficiency:

      - Algorithm efficiently navigates the maze, with minimal computational overhead.
      - Reduces memory and processing usage by avoiding redundant checks or loops.
      - Pathfinding efficiently handles larger mazes (e.g., 40x40 grids) within reasonable execution time.

    - Modularity:

      - Avoids code duplication and repetition.
      - Each function has a distinct purpose, promoting encapsulation and separation of concerns.

3.  Usability

    - User Interaction:

      - Provides feedback to the user in case of errors, such as "Invalid Maze Structure" or "No Path Found."

    - Game Mechanics:

      - Implements maze navigation rules effectively, where the algorithm correctly follows open paths while avoiding walls.
      - Displays "Maze Solved" or "Maze Unsolvable" messages upon completion, and optionally shows the shortest path if solvable.
      - Allows dynamic start and end positions without needing to modify code (e.g., through parameters or inputs).

4.  Bonus Features

    - Dynamic Animation:

      - Animates the pathfinding process, showing each step of the algorithm visually as it proceeds.
      - Provides adjustable animation speed settings, allowing the user to control how fast or slow the visualization occurs.
