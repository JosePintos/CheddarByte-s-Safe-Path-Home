// const { findPath } = require("./bfs_solution");
import { findPath } from "./bfs_solution";

describe("BFS Shortest Path", () => {
  test("Single row", () => {
    expect(findPath(["S.H"])).toBe(2);
  });

  test("Blocked path", () => {
    expect(findPath(["S#H"])).toBe(-1);
  });

  test("Simple turn", () => {
    expect(findPath(["S..", "..H"])).toBe(3);
  });

  test("Complex grid", () => {
    expect(findPath(["S..#", ".##.", ".#H.", "...."])).toBe(6);
  });

  test("Single column", () => {
    expect(findPath(["S", ".", ".", "H"])).toBe(3);
  });

  test("Dead end", () => {
    expect(findPath(["S.#", "###", "..H"])).toBe(-1);
  });

  test("Adjacent start and target", () => {
    expect(findPath(["SH"])).toBe(1);
  });

  test("Starting point not at top left corner", () => {
    expect(findPath(["H.#.", "..#S", "...."])).toBe(6);
  });

  test("S and H in same cell", () => {
    /*
     * For the edge case “Start and Home are in the same cell”, the problem does not define a format that allows a single cell to contain both S and H simultaneously.
     * To represent this scenario during testing, I use the following assumption:
     * Start and Home occupy the same logical coordinates when the grid is a 1×1 grid containing either S or H.
     */
    expect(findPath(["S"])).toBe(0);
  });
});
