import React from 'react';
import styled from 'styled-components';
import { ControlMain } from './components/controls/src/ControlMain';
import { HeaderMain } from './components/header/src/HeaderMain';
import { ResultMain } from './components/result/src/ResultMain';

const AppWrapper = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  color: red;
  font-family: 'Roboto', sans-serif;

`;

class App extends React.Component {
    render() {
        return (
            <AppWrapper className="big">
                <HeaderMain />
                <ControlMain />
                <ResultMain />
            </AppWrapper>
        );
    }
}


export default App;
