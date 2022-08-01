import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { STATUS } from '../gridManager/gridConfig';

const Timer = ( { setTimeActive, timeActive, gameStatus } ) => {

  const [time, setTime] = useState( 0 );

  useEffect(() => {
    if ( gameStatus === STATUS.RESET || gameStatus === STATUS.SHUFFLE) {
      setTime( 0 );
    }
  }, [gameStatus])

  useEffect(() => {
    let interval = null;

    if ( timeActive ) {
      interval = setInterval( () => {
        setTime( prevTme => prevTme + 10 );
      }, 10);
    } else {
      clearInterval( interval );
    }
  
    return () => {
      clearInterval( interval );
    }
  }, [ timeActive, setTime ])
  

  return (
    <TimerWrapperStyled>
      <div>
          <span>{( "0" + Math.floor( ( time / 60000 ) % 60 ) ).slice( -2 ) }:</span>
          <span>{( "0" + Math.floor( ( time / 1000 ) % 60 ) ).slice( -2 ) }:</span>
          <span>{( "0" + Math.floor( ( time / 10 ) % 100 ) ).slice( -2 ) }</span>
      </div>
      { gameStatus !== STATUS.WIN &&
      <ControlWrapper>
        { timeActive && <button onClick={ () => setTimeActive( false ) }>Pause</button> }
        { !timeActive && <button onClick={ () => setTimeActive( true ) }>Resume</button> }
      </ControlWrapper>
      }
    </TimerWrapperStyled>
  )
}

export default Timer;

const TimerWrapperStyled = styled.div`
  color: lightgray;
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: 3em;
  color: #656363;
  margin-bottom: 1vh;
`;

const ControlWrapper = styled.div`
  width: 50%;
  display: flex;
  padding: 10px 0;
  
  & button {
    width: 100%;
    padding: 0.2em;
    display: block;
    font-size: 0.5em;
    background-color: #121212;
    color: #656363;
    cursor: pointer;
    border: 1px solid #656363;
  }
`;