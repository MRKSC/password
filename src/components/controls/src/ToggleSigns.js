import React from 'react';
import styled from 'styled-components'

const ToggleSignsContainer = styled.div `
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
color : black;
`;

export class ToggleSigns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toggleState: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            toggleState: !prevState.toggleState
        }));
    }

    render() {
        return (
            <ToggleSignsContainer>
                <H3> Use Signs ?</H3>
                <ToggleButton onClick={this.handleClick}>{this.state.toggleState ? 'ON' : 'OFF'}</ToggleButton>
            </ToggleSignsContainer>
        );
    }

}

