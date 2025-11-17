# CheddarByte-s-Safe-Path-Home-

bfs algorithm grid to find shortest path

## How to run

1. Install dependencies and run tests:

   `npm i`

Run `npm test` to execute the sample grids and see the outputs in the console.

## Assumptions

- The grid is rectangular: all rows have the same length.
- There is exactly one start cell `S` and one home cell `H`.
- Movement is allowed only in four directions: up, down, left, right (no diagonals).
- Walls `#` are impassable.
- Open cells `.` are traversable.
- If `S` and `H` are in the same cell (logically the same coordinates), the shortest path length is `0`.
- 'S' can be located anywhere in the map.

## Example

Grid:

[
"S.#.",
"..#H",
"...."
]

Output:

6

Explanation: One shortest path is  
S → (0,1) → (0,2) → (1,2) → (2,2) -> (2,3) -> (1,3) = 6 steps.
