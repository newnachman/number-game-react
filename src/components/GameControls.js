import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const GameControls = ( { generateGrid, resetGrid, shufflingTimesRef } ) => {

  const [times, setTimes] = useState(shufflingTimesRef.current);
  const inputRef = useRef(null);
  const timesLength = { min: 1, max: 72};

  const setShufflingTimes = ( value ) => {
    value = value ? +value : "";
    if (!value || value < timesLength.min || value > timesLength.max) {
      return;
    }
    shufflingTimesRef.current = value;
    setTimes(value);
  }

  return (
    <GameControlsStyled>
      <ShufflingControlStyled>
        <button onClick={generateGrid} title="Try a new game.">
          Shuffle
        </button>
        <InputStyled 
          ref={inputRef}
          onClick={() => inputRef.current.select()}
          type="number" 
          min={timesLength.min} 
          max={timesLength.max} 
          onChange={ ( e ) => setShufflingTimes( e.target.value ) } 
          value={times}
          title={`From ${timesLength.min} to ${timesLength.max}, determine the steps needed for solving.`}
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

   @media (max-width: 500px) {
    & button {
      font-size: 1.2em;
    }
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
    transition: font-size 0.8s;
  } 

   @media (max-width: 500px) {
    & button {
      font-size: 1.2em;
      width: 65%;
    }
   }
`;

const InputStyled = styled.input.attrs( { type: 'number' } )`
  padding: 0 10px 0 15px;
  width: 40%;
  outline: none;
  font-size: 1.4em;
  border: none;
  background-color: #e625e6d1;
  box-shadow: inset 1px 0px 4px 0px #1a1b1db5;

  &::-webkit-inner-spin-button, 
  &::-webkit-outer-spin-button {  
      opacity: 1;
  }

  @media (max-width: 500px) {
    font-size: 1.2em;
    width: 35%;
    padding: 0 10px;
    &::-webkit-inner-spin-button, 
    &::-webkit-outer-spin-button {  
      opacity: 0;
      display: none;
    }
  }
`;