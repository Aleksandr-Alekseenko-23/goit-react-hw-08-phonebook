import { useState } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { getToken } from 'redux/Auth/AuthSelectors';
import { HeaderWrapper, Wrapper, Menu } from './AppBar.styled.js';
import Logo from '../Logo/Logo';
import Container from 'components/Container/Container.js';
import useMatchMedia from '../../hooks/UseMatchMedia';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const AppBar = () => {
  const token = useSelector(getToken);
  const { isMobile } = useMatchMedia();
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    if (mobileMenuIsOpen) return closeMobMenu();
    setMobileMenuIsOpen(true);
  };

  const closeMobMenu = () => {
    setMobileMenuIsOpen(false);
  };

  return (
    <HeaderWrapper>
      <Container>
        <Wrapper>
          <Logo />
          {!isMobile && <Navigation />}
          {!token ? (
            <AuthNav
              mobileMenuIsOpen={mobileMenuIsOpen}
              toggleMenu={toggleMenu}
            />
          ) : (
            <UserMenu />
          )}
        </Wrapper>
      </Container>

      {isMobile && mobileMenuIsOpen && (
        <Menu>
          <BurgerMenu
            toggleMenu={toggleMenu}
            mobileMenuIsOpen={mobileMenuIsOpen}
          />
        </Menu>
      )}
    </HeaderWrapper>
  );
};

export default AppBar;
