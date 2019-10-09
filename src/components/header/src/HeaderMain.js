import React from 'react';
import styled from 'styled-components'
import {Headings} from "./Headings";

const HeadingsContainer = styled.div `
display: flex;
justify-content: center;
flex-direction: column;
`;


export function HeaderMain() {
    return (
        <HeadingsContainer>
            <Headings />
        </HeadingsContainer>

    )
}

