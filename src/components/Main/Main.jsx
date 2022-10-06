import Container from 'components/Container/Container.js';
import React from 'react';
import { MainWrapper } from './Main.styled.js';

function Main({ children }) {
  return (
    <Container>
      <MainWrapper>{children}</MainWrapper>;
    </Container>
  );
}

export default Main;
