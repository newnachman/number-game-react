import React from 'react';
import styled from 'styled-components';
import { Config } from '../dataManager/gridConfig';

const GridItem = ( { cellValue, currentLocation, moveToEmpty } ) => {
  
  return (
    <GridItemStyled onClick={ () => moveToEmpty( currentLocation )}>
      { cellValue === Config.Empty ? "" : cellValue }
    </GridItemStyled>
  )
}

export default GridItem;

const GridItemStyled = styled.div`
  min-width: 80px;
  min-height: 80px;
  text-align: center;
  border: 1px solid #5b075b;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  color: lightgray;
  background-color: #202124;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`;