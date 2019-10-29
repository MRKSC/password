import React from 'react';
import styled from 'styled-components';

const HeadingWrapper = styled.div `
display: flex;
justify-content: space-around;
flex-direction: column;
align-items: center;
padding: 5px;
margin: 5px;
`;

const BigHeading = styled.h1 `
color: black;
font-size: 70px;

`;


export function Headings() {
        return(
            <HeadingWrapper>
                <BigHeading>
                    Generate your own password
                </BigHeading>

            </HeadingWrapper>

        )
}