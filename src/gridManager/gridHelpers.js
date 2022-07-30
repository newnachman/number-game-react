import * as config from './gridConfig';

// Creates a standard resolved grid.
export function initialGrid() {
  let count = 0;
  // Initial grid rows array:
  const grid = new Array( config.GRID_LAYOUT.rows );
  for (let i = 0; i < config.GRID_LAYOUT.rows; i++) {
    // Initial grid column array inside current row:
    grid[i] = new Array( config.GRID_LAYOUT.columns );
    for (let j = 0; j < config.GRID_LAYOUT.columns; j++) {
      grid[i][j] = config.CELL_CONTENT_OPTIONS[count];
      count++;
    }
  }

  return grid;
}

// Used when shuffling grid, finds places to move automatically.
export function getOptionalPlaces(currentPlace, lastPlace) {
  let optionalPlaces = [];
  let optionalI;
  let optionalJ;

  config.SURROUNDING_CELL_GAPS.forEach( gap => {
    optionalI  = currentPlace.i + gap.i;
    optionalJ  = currentPlace.j + gap.j;

    if ( isInsideBoundaries( optionalI, optionalJ ) && !isCurrentSameAsLast( optionalI, optionalJ, lastPlace ) ) {
      optionalPlaces.push({ i:optionalI, j:optionalJ});
    }
  });

  return optionalPlaces;
}

// Used when user clicks on a cell, finds the empty location, if exist next to the clicked cell.
export function findEmptyInSurroundings( grid, i, j ) {
  let emptyLocation;

  config.SURROUNDING_CELL_GAPS.forEach( gap => {
    let cellI = i + gap.i;
    let cellJ = j + gap.j;
    if ( isInsideBoundaries( cellI, cellJ ) && isEmpty( grid, cellI, cellJ)) {
      emptyLocation = { i: cellI, j: cellJ };
    }
  });

  return emptyLocation;
}

export function isEmpty( grid, i, j ) {
  if ( grid[i][j] === config.EMPTY ) {
    return true;
  }
}
 
export function isInsideBoundaries( i, j ) {
  if ( i < config.GRID_LAYOUT.rows && j < config.GRID_LAYOUT.columns && i >= 0 && j >= 0 ) {
    return true;
  }
}

export function generateRandomIndex(max) {
  let rand = Math.random();
  rand = Math.floor( rand * max);
  return rand;
}

export function replaceTarget( grid, current, target ) {
  let tempTargetContent = grid[target.i][target.j];
  grid[target.i][target.j] = grid[current.i][current.j];
  grid[current.i][current.j] = tempTargetContent;

  return grid;
}

export function isCurrentSameAsLast( optionalI, optionalJ, lastPlace ) {
  if ( optionalI === lastPlace.i && optionalJ === lastPlace.j ) {
    return true;
  }
}

// For browsers that doesn't support yet the js global method.
export function structuredClone(data) {
  return JSON.parse(JSON.stringify(data));
}