import React from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { getToken } from 'redux/selectors';
import { HeaderWrappen, Wrappen } from './AppBar.styled.js';
import Logo from '../Logo/Logo';
import Container from 'components/Container/Container.js';
import useMatchMedia from 'hooks/useMatchMedia';

const AppBar = () => {
  const token = useSelector(getToken);
  const { isMobile } = useMatchMedia();
  return (
    <HeaderWrappen>
      <Container>
        <Wrappen>
          <Logo />
          {!isMobile && <Navigation />}
          {!token ? <AuthNav /> : <UserMenu />}
        </Wrappen>
      </Container>
    </HeaderWrappen>
  );
};

export default AppBar;
