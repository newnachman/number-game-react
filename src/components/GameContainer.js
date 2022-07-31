import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import GameControls from './GameControls';
import GameStatus from './GameStatus';
import GridWrapper from './GridWrapper';
import { checkFinished } from '../gridManager/checkFinished';
import * as helpers from '../gridManager/gridHelpers';
import { shuffleNewGrid } from '../gridManager/shuffleNewGrid';


const GameContainer = () => {
  
  const [grid, setGrid] = useState();
  const [gameStatus, setGameStatus] = useState();
  const [resetData, setResetData] = useState();
  const shufflingTimesRef = useRef( 40 )

  const generateGrid = useCallback(
    () => {
      
      const newGrid = shuffleNewGrid(shufflingTimesRef.current);
      setGrid(newGrid);
      setResetData(helpers.structuredClone(newGrid));
      setGameStatus(null);
    },
    [shufflingTimesRef],
  )
  

  useEffect(() => { 
    generateGrid();
  }, [generateGrid])

  useEffect(() => {
    if ( grid && Array.isArray( grid ) ) {
      setGameStatus( checkFinished( grid ) ? 'You Did It!!!' : null );
    }
  }, [grid])

  

  function resetGrid() {
    setGrid(helpers.structuredClone(resetData));
    setGameStatus(null);
  }

  return (
    <GameContainerStyled>
      <GridWrapper 
        grid={grid} 
        setGrid={setGrid} 
      />
      <GameControls 
        generateGrid={generateGrid} 
        resetGrid={resetGrid} 
        shufflingTimesRef={shufflingTimesRef}
      />
      <GameStatus gameStatus={gameStatus} />
    </GameContainerStyled>
  )
}

export default GameContainer;

const GameContainerStyled = styled.div`
  width: 80%;
  max-width: 480px;
  margin: 10vh auto;
`;