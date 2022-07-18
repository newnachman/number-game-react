import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { initialGrid } from "../dataManager/initialGrid";
import GameControls from './GameControls';
import GameStatus from './GameStatus';
import GridWrapper from './GridWrapper';
import { checkFinished } from '../dataManager/checkFinished';


const GameContainer = () => {
  
  const [grid, setGrid] = useState();
  const [emptyLocation, setEmptyLocation] = useState();
  const [gameStatus, setGameStatus] = useState();
  const [resetData, setResetData] = useState();

  useEffect(() => {
    generateGrid();
  }, [])

  useEffect(() => {
    if ( grid && Array.isArray( grid ) ) {
      setGameStatus( checkFinished( grid ) ? 'You Did It!!!' : null );
    }
  }, [grid])

  function generateGrid() {
    const { initGrid, initEmptyLocation } = initialGrid();

    setGrid(initGrid);
    setEmptyLocation(initEmptyLocation);
    setResetData({ grid:  JSON.parse(JSON.stringify(initGrid)), emptyLocation: {...initEmptyLocation} });
    setGameStatus(null);
  }

  function resetGrid() {
    setGrid(resetData.grid);
    setEmptyLocation(resetData.emptyLocation);
    setGameStatus(null);
  }

  return (
    <GameContainerStyled>
      <GridWrapper 
        grid={grid} 
        setGrid={setGrid} 
        emptyLocation={emptyLocation} 
        setEmptyLocation={setEmptyLocation} 
      />
      <GameControls 
        generateGrid={generateGrid} 
        resetGrid={resetGrid} 
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