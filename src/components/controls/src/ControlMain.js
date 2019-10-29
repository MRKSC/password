import React from 'react';
import styled from 'styled-components';
import  {GenerateCode} from './GenerateCode';


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
          <GenerateCode />
        </ControlWrapper>
    )
}

