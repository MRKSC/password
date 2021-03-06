import React from 'react';
import styled from 'styled-components';
import { GenerateCode } from './components/src/GenerateCode';

const AppWrapper = styled.div`
  align-content: center;
  font-family: 'Roboto', sans-serif;
  color: #1d1d1d;
`;
class App extends React.Component {
  render() {
    return (
          <AppWrapper>
            <GenerateCode />
          </AppWrapper>
    );
  }
}

export default App;
