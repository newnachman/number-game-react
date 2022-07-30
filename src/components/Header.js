import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyled>
      <span>Awesome Number Game</span>
    </HeaderStyled>
  )
}

export default Header;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8em;
  font-weight: 800;
  font-style: italic;
  color: #101010;
  width: 100%;
  height: 10vh;
  background-color: #bf12bf;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
`;