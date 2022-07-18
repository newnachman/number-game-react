import { Options } from "./gridConfig";

export function checkFinished( grid ) {

  let optionIndex = 0;
  let response = true;
  
  // Iterate through every cell in current grid and verify right order.
  grid.forEach( row => {
    row.forEach( column => {
      if ( column !== Options[optionIndex] ) {
        response = false;
      }
      optionIndex++;
    });
  });

  return response;
}