import * as helpers from './gridHelpers'
import * as config from './gridConfig';

// The shuffle process contains actual movement of
// cells (like real players steps) to ensure that 
// all the grids can be solved.
export function shuffleNewGrid( stepsOfShuffle = 64 ) {
  let grid = helpers.initialGrid();
  let currentEmptyPlace = { i: config.GRID_LAYOUT.rows -1, j: config.GRID_LAYOUT.columns -1 };
  let lastEmptyPlace = { i: config.GRID_LAYOUT.rows -1, j: config.GRID_LAYOUT.columns -1 };
  let optionalPlaces;

  for ( let index = 0; index < stepsOfShuffle; index++ ) {
    optionalPlaces = helpers.getOptionalPlaces( currentEmptyPlace, lastEmptyPlace );
    let chosenPlace = optionalPlaces[helpers.generateRandomIndex( optionalPlaces.length )];
    
    grid = helpers.replaceTarget( helpers.structuredClone( grid ), currentEmptyPlace, chosenPlace );
    
    // Get hints for solving.
    config.HINTS.rewindSteps.push( `Move ${grid[currentEmptyPlace.i][currentEmptyPlace.j]} to ${grid[chosenPlace.i][chosenPlace.j]}` )
    lastEmptyPlace = { ...currentEmptyPlace};
    currentEmptyPlace = { ...chosenPlace};
  }
  config.HINTS.rewindSteps = config.HINTS.rewindSteps.reverse();

  return grid;
}