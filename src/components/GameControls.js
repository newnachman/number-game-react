import React, { useState } from 'react';
import styled from 'styled-components';

const GameControls = ( { generateGrid, resetGrid, shufflingTimesRef } ) => {

  const [times, setTimes] = useState(shufflingTimesRef.current)

  const setShufflingTimes = ( value ) => {
    shufflingTimesRef.current = value;
    setTimes(value);
  }

  return (
    <GameControlsStyled>
      <ShufflingControlStyled>
        <button onClick={generateGrid} title="Try a new game.">
          Shuffle
        </button>
        <input 
          type="number" 
          min={1} 
          max={72} 
          onChange={ ( e ) => setShufflingTimes( e.target.value ) } 
          value={times}
          title="1-72, determine the steps needed for solving."
        />
      </ShufflingControlStyled>
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

  &>button {
    background-color: #bf12bf;
    outline: none;
    border: none;
    padding: 20px;
    transition: all 0.8s;
    width: 49%;
    font-size: 1.4em;
  }

  &>button:hover {
    background-color: #101010;
    color: #bf12bf;
    border: 1px solid #bf12bf;
  }
`;

const ShufflingControlStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 49%;
  padding: 10px 5px;
  background-color: #bf12bf;
  transition: all 0.8s;

  &:hover {
    background-color: #101010;
    color: #bf12bf;
    border: 1px solid #bf12bf;
  }

  & button {
    background-color: inherit;
    color: inherit;
    width: 60%;
    outline: none;
    border: none;
    font-size: 1.4em;
  }

  & input[type="number"] {
    padding: 0 10px 0 15px;
    width: 40%;
    outline: none;
    font-size: 1.4em;
    border: none;
    background-color: #e625e6d1;
    box-shadow: inset 1px 0px 4px 0px #1a1b1db5;
  }

  & input[type=number]::-webkit-inner-spin-button, 
  & input[type=number]::-webkit-outer-spin-button {  
   opacity: 1;
  }
`;
