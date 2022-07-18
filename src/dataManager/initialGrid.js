
import { Options, GridLayout, Config } from './gridConfig';

export function initialGrid() {
  if ( Options.length !== ( GridLayout.rows * GridLayout.columns ) ) {
    // Number of total places in the 2d array must be same as number of given options.
    console.log('Wrong number of options');
    return;
  }

  let currentOptionsLeft = [ ...Options ]
  let emptyLocation;
  
  // Initial grid rows array:
  const grid = new Array( GridLayout.rows );

  for (let i = 0; i < grid.length; i++) {
    // Initial grid column array inside current row:
    grid[i] = new Array( GridLayout.columns );

    for (let j = 0; j < grid[i].length; j++) {
      // Create a random number & choose an element from options.
      let number = generateRandom( currentOptionsLeft.length );
      let randomElement = currentOptionsLeft[ number ];

      // If current random element is the empty one, save its place for later.
      if ( randomElement === Config.Empty ) {
        emptyLocation = { i, j };
      }

      // Insert the random value to the current place.
      grid[i][j] = randomElement;

      // Disable re-choosing the same option again.
      currentOptionsLeft = currentOptionsLeft.filter( ( element ) => element !== randomElement );
    }
  }

  return { initGrid: grid, initEmptyLocation: emptyLocation };
}

function generateRandom(max) {
  let rand = Math.random();
  rand = Math.floor( rand * max);
  return rand;
}