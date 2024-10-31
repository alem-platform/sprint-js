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
      // Set final point
      if (x === finalPoint[0] && y === finalPoint[1]) {
        cellDiv.classList.add("end"); //Final point
      }

      container.appendChild(cellDiv);
    });
  });
}

const startBtn = document.getElementById("find-path-btn");

startBtn.addEventListener("click", () => {
  // call visualizeMaze function here with your solution
});
