/* A simulation, Conway’s Game of Life, shows "lives" on a grid where cells are either alive or dead.
For every generation, or turn, any of the below rules can happen:
  - Any live cell with zero or one or greater than four neighbors dies.
  - Any live cell with two to three live neighbors still lives for the next turn.
  - Dead cells with three live neighbors becomes alive.
Neighbors are any neayby cells (also includes diagnoally adjacent).
The rules are in reference to the whole grid, not one square (based on generation's count at the start), and changes that happen to neighbor cells shouldn't influence a specific cell's new state.
Use any appropriate data structures, including Math.random to start with a randomly generated pattern. Use a checkbox field grid with buttons nearby to go to the next turn. Unchecking or checking checkboxes should be included when making the next turn. */
