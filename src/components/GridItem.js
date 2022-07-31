import React from 'react';
import styled from 'styled-components';
import * as config from '../gridManager/gridConfig';

const GridItem = ( { cellValue, currentLocation, moveToEmpty } ) => {
  
  return (
    <GridItemStyled 
      isEmpty={cellValue === config.EMPTY} 
      onClick={ () => moveToEmpty( currentLocation )}
    >
      { cellValue === config.EMPTY ? "" : cellValue }
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
  color: lightgrey;
  background-color: #202124;
  transition: all 0.3s;
  cursor: ${ props => props.isEmpty ? "initial" : "pointer" };
  user-select: none;

  &:hover {
    transform: ${ props => props.isEmpty ? "none" : "scale(1.02)" };
    background-color: ${ props => props.isEmpty ? "#202124" : "#26272b" };
  }
`;