# CheddarByte-s-Safe-Path-Home

bfs algorithm grid to find shortest path

## How to run

1. Install dependencies

   `npm i`

2. Run tests

   `npm test`

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

## Edge Cases

1. S and H in the same cell → answer 0

   - Logically: start is already at home.
   - For this edge case, the problem does not define a format that allows a single cell to contain both S and H simultaneously.
     To represent this scenario during testing, I use the following assumption:
     Start and Home occupy the same logical coordinates when the grid is a 1×1 grid containing either S or H.

2. No path exists
   Grid:
   [
   "S#H"
   ].
   Output: -1

3. Single-row grid
   Grid:
   [
   "S.H"
   ].
   Output: 2

4. Single-column grid
   Grid:
   [
   "S",
   ".",
   ".",
   "H"
   ].
   Output: 3

5. Starting point not at top left corner
   Grid:
   [
   "H.#.",
   "..#S",
   "...."
   ].
   Output: 6
