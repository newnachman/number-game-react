import React from 'react';
import styled, { keyframes } from 'styled-components';
import GridItem from './GridItem';
import GameStatus from './GameStatus';
import { STATUS } from '../gridManager/gridConfig';

const GridWrapper = ( { grid, moveToEmpty, timeActive, gameStatus } ) => {

  return (
    <GridSectionStyled>
      <OverlayStyled timeActive={timeActive}>
      { ( gameStatus === STATUS.WIN ) && <GameStatus gameStatus={gameStatus} /> }
      </OverlayStyled>
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
    </GridSectionStyled>
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

const GridSectionStyled = styled.section`
  position: relative;
  height: 50vh;
`;

const overlayIn = keyframes`
  from { height: 0;  }
  to { height: 50vh;  }  
`;

const overlayOut = keyframes`
  from { height: 50vh; }
  to { height: 0; }  
`;

const OverlayStyled = styled.div`
  position: absolute;
  z-index: 10;
  height:  ${ props => props.timeActive ? "0": "50vh"}; ;
  width: 100%;
  background-color: #121111e3;
  box-shadow: 0 1px 17px rgb(0 0 0);
  animation-name: ${ props => props.timeActive ? overlayOut: overlayIn};
  animation-duration: 0.5s;
  color: white;
  overflow: hidden;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;