import React from 'react';
import { LogoText, Wrappen, TextColor, LogoImg } from './Logo.styled.js';
import Phone from '../../Assets/img/Phon.png';

function Logo() {
  return (
    <Wrappen>
      <LogoText>Phone</LogoText>
      <LogoImg src={Phone} alt="Logo" width="40" />
      <TextColor>book</TextColor>
    </Wrappen>
  );
}

export default Logo;
