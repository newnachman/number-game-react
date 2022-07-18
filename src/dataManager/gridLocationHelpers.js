import { Config } from "./gridConfig";

export function isSurroundedByEmpty( current, target ) {
  // Disable diagonals cells, even if they are next to current.
  if ( ( current.i !== target.i ) && (current.j !== target.j) ) {
    return;
  }
  // Check if the empty (target) cell is next to the current one.
  if( Math.abs(current.i - target.i) <= 1 && Math.abs(current.j - target.j) <= 1) {
    return true;
  }
}

export function replaceTarget( grid, current, target ) {
  grid[target.i][target.j] = grid[current.i][current.j];
  grid[current.i][current.j] = Config.Empty;

  return grid;
}