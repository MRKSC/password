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
const SmallHeading = styled.h2 `
color: black;
font-size: 40px;
`;

const SmallParagraph = styled.p `
padding: 0px;
margin: 0px;
color: black;
`;

const BigHeading = styled.h1 `
color: black;
font-size: 70px;

`;

const H3 = styled.h3 `
color : black;
`;

export function Headings() {
        return(
            <HeadingWrapper>
                <BigHeading>
                    Generate your own password
                </BigHeading>
                <SmallHeading>
                    Easy just with one click
                </SmallHeading>
                <SmallParagraph>
                    We are here to provide easy solution to your need have a strong independent passwords
                    ripped from any human bias you can think off
                </SmallParagraph>
            </HeadingWrapper>

        )
}