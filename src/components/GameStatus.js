import React, { useEffect } from 'react';
import styled from 'styled-components';

const GameStatus = ( { gameStatus } ) => {
 
  return (
   <GameStatusStyled> {gameStatus} </GameStatusStyled>
  )
}

export default GameStatus;

const GameStatusStyled = styled.h2`
  font-size: 1.6em;
  font-weight: 800;
  font-style: italic;
  color: lightgray;
  text-align: center;
`;