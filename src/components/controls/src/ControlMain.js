import React from 'react';
import styled from 'styled-components';
import  {ToggleLetters} from './ToggleLetters';
import  {ToggleNumbers} from './ToggleNumbers';
import {ToggleSigns} from './ToggleSigns';

const ControlWrapper = styled.div ` 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: black;
`;

export function ControlMain() {
    return (
        <ControlWrapper>
          <ToggleLetters />
          <ToggleNumbers />
          <ToggleSigns />
        </ControlWrapper>
    )
}

