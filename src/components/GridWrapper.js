import React from 'react';
import styled from 'styled-components';
import { isSurroundedByEmpty, replaceTarget } from '../dataManager/gridLocationHelpers';
import GridItem from './GridItem';

const GridWrapper = ( { grid, setGrid, emptyLocation, setEmptyLocation } ) => {

  const moveToEmpty = ( clickedCell ) => {
    // Check if current clicked cell is close to the empty (target) cell.
    if ( isSurroundedByEmpty( clickedCell, emptyLocation ) ) {
      let newGrid = replaceTarget( JSON.parse(JSON.stringify(grid)), clickedCell, emptyLocation );
      setGrid( newGrid );
      setEmptyLocation( clickedCell );
    }
  }

  return (
    <GridWrapperStyled>
      {
        grid && Array.isArray( grid ) && 
        grid.map( ( row, i ) => {
          return row.map( ( column, j ) => {
            return (
              <GridItem 
                key={ i + '' + j } 
                cellValue={ column } 
                currentLocation={{ i, j }}  
                moveToEmpty={ moveToEmpty } 
              />
          )})
        })
      }
    </GridWrapperStyled>
  )
}

export default GridWrapper;

const GridWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  margin: auto;
  height: 50vh;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
`;