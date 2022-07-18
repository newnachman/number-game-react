import { Config } from "./gridConfig";

export function isSurroundedBy( current, target ) {
  if( Math.abs(current.i - target.i) <= 1 && Math.abs(current.j - target.j) <= 1) {
    return true;
  }
}

export function replaceTarget( grid, current, target ) {
  grid[target.i][target.j] = grid[current.i][current.j];
  grid[current.i][current.j] = Config.Empty;

  return grid;
}