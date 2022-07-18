import React from 'react';
import styled from 'styled-components';

const GameControls = ( { generateGrid, resetGrid } ) => {
  return (
    <GameControlsStyled>
      <button onClick={generateGrid} title="Try a new one.">
        Shuffle
      </button>
      <button onClick={resetGrid} title="Restart from the beginning.">
        Reset
      </button>
    </GameControlsStyled>
  )
}

export default GameControls;

const GameControlsStyled = styled.div`
  display: flex;
  margin: 5vh 0;
  justify-content: space-between;

  & button {
    background-color: #bf12bf;
    outline: none;
    border: none;
    padding: 20px;
    transition: all 0.8s;
    width: 49%;
    font-size: 1.4em;
  }

  & button:hover {
    background-color: #2e052e;
    color: lightgray;
  }
`;