import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import GameControls from './GameControls';
import GameStatus from './GameStatus';
import GridWrapper from './GridWrapper';
import { checkFinished } from '../gridManager/checkFinished';
import * as helpers from '../gridManager/gridHelpers';
import { shuffleNewGrid } from '../gridManager/shuffleNewGrid';
import Timer from './Timer';
import { STATUS } from '../gridManager/gridConfig';

const GameContainer = () => {
  
  const [grid, setGrid] = useState();
  const [gameStatus, setGameStatus] = useState( null );
  const [resetData, setResetData] = useState();
  const [timeActive, setTimeActive] = useState( false );

  const shufflingTimesRef = useRef( 40 )

  const generateGrid = useCallback(
    () => {
      const newGrid = shuffleNewGrid( shufflingTimesRef.current );
      setGrid( newGrid );
      setResetData( helpers.structuredClone( newGrid ) );
      setGameStatus( STATUS.SHUFFLE );
      setTimeActive( true );
    },
    []
  );

  function moveToEmpty( clickedCell ) {
    // Check if current clicked cell is close to the empty (target) cell.
    let emptyLocation = helpers.findEmptyInSurroundings( grid, clickedCell.i, clickedCell.j );
    
    if ( emptyLocation )  {
      let newGrid = helpers.replaceTarget( helpers.structuredClone(grid), clickedCell, emptyLocation );
      setGrid( newGrid );
    }
  }
  
  function resetGrid() {
    setGrid( helpers.structuredClone( resetData ) );
    setGameStatus( STATUS.RESET );
    setTimeActive( true );
  }

  useEffect(() => { 
    generateGrid();
  }, [generateGrid])

  // On every change of grid, check if game finished.
  useEffect(() => {
    if ( grid && Array.isArray( grid ) ) {
      let finish = checkFinished( grid );

      if (finish) {  
        setTimeActive( false );      
        setGameStatus( STATUS.WIN );
      } else {
        setGameStatus( null );
      }
    }
  }, [ grid ])

 

  return (
    <GameContainerStyled>
      <Timer
        timeActive={timeActive}
        gameStatus={gameStatus}
        setTimeActive={setTimeActive}
      />
      <GridWrapper 
        grid={grid} 
        moveToEmpty={moveToEmpty} 
        timeActive={timeActive}
      />
      <GameControls 
        generateGrid={generateGrid} 
        resetGrid={resetGrid} 
        shufflingTimesRef={shufflingTimesRef}
      />
      { ( gameStatus === STATUS.WIN ) && <GameStatus gameStatus={gameStatus} /> }
    </GameContainerStyled>
  )
}

export default GameContainer;

const GameContainerStyled = styled.div`
  width: 80%;
  max-width: 480px;
  margin: 10vh auto;
`;