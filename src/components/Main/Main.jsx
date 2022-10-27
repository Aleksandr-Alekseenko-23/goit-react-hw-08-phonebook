import Container from 'components/Container/Container.js';
import React from 'react';
import { MainWrapper } from './Main.styled.js';

function Main({ children }) {
  return (
    <MainWrapper>
      <Container>{children}</Container>
    </MainWrapper>
  );
}

export default Main;
