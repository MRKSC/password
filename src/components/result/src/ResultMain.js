import React from 'react';
import styled from 'styled-components'
import { GenerateButton } from './GenerateButton'
import { ResultBox } from './ResultBox'

const ResultMainContainer = styled.div `
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
padding: 20px;
margin: 20px;
`;

const ToggleButton = styled.button `

`;

export function ResultMain() {
    return (
        <ResultMainContainer>
            <GenerateButton />
            <ResultBox />
        </ResultMainContainer>
    )
}