import React from 'react';
import styled from 'styled-components'

const ResultBoxContainer = styled.div `
display: flex;
align-items: center;
flex-direction: column;
min-width: 700px;
background: #cbe4d9;
padding: 20px;
margin: 20px;
`;

const GeneratedPassword = styled.h1 `
color: black;
`;

export function ResultBox() {
    return (
        <ResultBoxContainer>
            <GeneratedPassword>Generated password will show here</GeneratedPassword>
        </ResultBoxContainer>
    )
}