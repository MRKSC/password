import React from 'react';
import styled from 'styled-components'


const GenerateButtonContainer = styled.div `
display: flex;
align-items: center;
flex-direction: column;
padding: 20px;
margin: 20px;
`;

const ToggleButton = styled.button `
  padding: 10px 28px 10px 28px;
  background-color: #0b0c11;
  color: #f5f5f5;
  border: none;
  border-radius: 5px;
  display:inline-block;
  cursor:pointer;
  font-size:17px;
  font-weight: 600;
  text-decoration:none;
`;

const H3 = styled.h3 `
color:black
`;

export class GenerateButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number : 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            number: state.number + 10
        }))
    }

    render() {
    return (
        <GenerateButtonContainer>
            <H3>{this.state.number}</H3>
            <ToggleButton onClick={this.handleClick}> Click Me</ToggleButton>
        </GenerateButtonContainer>
    );
}
}
