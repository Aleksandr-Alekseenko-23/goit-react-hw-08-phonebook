import { Wrapper } from './Container.styled.js';
import React from 'react';

function Container({ children }) {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
}

export default Container;
