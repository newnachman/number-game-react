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
      <div>
        <button onClick={ () => setTimeActive( false ) }>Stop</button>
        <button onClick={ () => setTimeActive( true ) }>Resume</button>
      </div>
    </TimerWrapperStyled>
  )
}

export default Timer;

const TimerWrapperStyled = styled.div`
  color: lightgray;
`;