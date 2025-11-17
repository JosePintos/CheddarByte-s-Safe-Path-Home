export function findPath(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const matrix = grid.map((row) => row.split(""));

  let start = null;
  let home = null;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === "S") start = [r, c];
      if (matrix[r][c] === "H") home = [r, c];
    }
  }

  // Edge case: same cell
  if (rows * cols === 1 && (start || home)) {
    return 0;
  }

  if (!start || !home) return -1;

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  visited[start[0]][start[1]] = true;

  const queue = [start];
  let head = 0;

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  let steps = 0;

  while (head < queue.length) {
    const levelSize = queue.length - head;

    for (let i = 0; i < levelSize; i++) {
      const [r, c] = queue[head++];

      if (matrix[r][c] === "H") return steps;

      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;

        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < cols &&
          matrix[nr][nc] !== "#" &&
          !visited[nr][nc]
        ) {
          visited[nr][nc] = true;
          queue.push([nr, nc]);
        }
      }
    }

    steps++;
  }

  return -1;
}
