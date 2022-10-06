import React from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { getToken } from 'redux/selectors';
import { HeaderWrappen, Wrappen } from './AppBar.styled.js';
import Logo from '../Logo/Logo';
import Container from 'components/Container/Container.js';

const AppBar = () => {
  const token = useSelector(getToken);
  return (
    <HeaderWrappen>
      <Container>
        <Wrappen>
          <Logo />
          <Navigation />
          {!token ? <AuthNav /> : <UserMenu />}
        </Wrappen>
      </Container>
    </HeaderWrappen>
  );
};

export default AppBar;
