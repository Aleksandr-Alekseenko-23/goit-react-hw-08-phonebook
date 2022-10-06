import React from 'react';
import { Wrapper } from './Container.styled.js';

function Container({ children }) {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
}

export default Container;
