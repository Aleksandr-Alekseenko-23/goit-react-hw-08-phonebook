import React from 'react';
import { LogoText, Wrapper, TextColor, LogoImg } from './Logo.styled.js';
import Phone from '../../Assets/img/Phon.png';

function Logo() {
  return (
    <Wrapper>
      <LogoText>Phone</LogoText>
      <LogoImg src={Phone} alt="Logo" width="40" />
      <TextColor>book</TextColor>
    </Wrapper>
  );
}

export default Logo;
