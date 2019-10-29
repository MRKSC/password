import React from 'react';
import styled from 'styled-components';
import { ControlMain } from './components/controls/src/ControlMain';

const AppWrapper = styled.div` 
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  background-color: rgba(230,230,230,0.04);
  color: #1d1d1d;
`;

class App extends React.Component {
    render() {
        return (
            <AppWrapper>
                <ControlMain />
            </AppWrapper>
        );
    }
}


export default App;
