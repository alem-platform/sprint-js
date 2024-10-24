# The Maze Escape

Once upon a time in the land of Computoria, there lived a valiant knight named Sir Wiggleton the Wanderer. Despite his brave reputation, Sir Wiggleton had a small problem: he couldn’t find his way out of anything, not even a simple hedge maze! Whether it was escaping from his castle or locating the royal outhouse, Wiggleton had a knack for getting stuck in the most trivial situations.

One day, Sir Wiggleton found himself lost inside a magical maze created by the mischievous wizard, Algor the Tricky. The maze was an ancient puzzle said to test the mental agility of even the most brilliant minds in Computoria. The wizard, however, found it amusing to keep Wiggleton trapped, watching him aimlessly wander about for hours.

But Wiggleton, not wanting to live out his days eating berries in a maze, cried out, “There must be a way out! And if I cannot find it, I’ll invent a strategy to get through!” Thus, Wiggleton began learning about two powerful techniques: [DFS](https://en.wikipedia.org/wiki/Depth-first_search) and [Dijkstra’s](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) Pathfinding.

## Problem

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

Mark the cells that have been visited with number 2.
Highlight the final path from start to end once found with number 3

### Strating HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>The Maze Escape</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>The Maze Escape</h1>
    <div id="maze-container"></div>
    <button id="start-btn">Find the Path!</button>
    <script src="script.js"></script>
  </body>
</html>
```

### Strating CSS:

```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
}

#maze-container {
  display: grid;
  gap: 1px;
  margin: 20px auto;
  border: 2px solid #333;
}

.cell {
  width: 20px;
  height: 20px;
  display: inline-block;
}

.cell.wall {
  background-color: black;
}

.cell.path {
  background-color: white;
}

.cell.visited {
  background-color: gray;
}

.cell.path-found {
  background-color: green;
}

.cell.start {
  background-color: yellow;
}

.cell.end {
  background-color: red;
}
```

### JS code for visualization:

```js
function visualizeMaze(mazeArray, startPoint, finalPoint) {
  const container = document.getElementById("maze-container");

  // Clear the previous visualization
  container.innerHTML = "";

  // Set the grid size based on maze dimensions
  container.style.gridTemplateColumns = `repeat(${mazeArray[0].length}, 20px)`;

  // Loop through the maze array and create divs
  mazeArray.forEach((row, y) => {
    row.forEach((cell, x) => {
      const cellDiv = document.createElement("div");
      cellDiv.className = "cell";

      // Set class based on cell value
      switch (cell) {
        case 0:
          cellDiv.classList.add("path"); // Open path
          break;
        case 1:
          cellDiv.classList.add("wall"); // Wall
          break;
        case 2:
          cellDiv.classList.add("visited"); // Visited
          break;
        case 3:
          cellDiv.classList.add("path-found"); // Path found
          break;
        default:
          break;
      }

      // Set starting point
      if (x === startPoint[0] && y === startPoint[1]) {
        cellDiv.classList.add("start"); // Start point
      }
      if (x === finalPoint[0] && y === finalPoint[1]) {
        cellDiv.classList.add("end"); //Final point
      }

      container.appendChild(cellDiv);
    });
  });
}
```
