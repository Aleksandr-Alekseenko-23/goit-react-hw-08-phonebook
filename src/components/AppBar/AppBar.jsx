import { useState } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { getToken } from 'redux/selectors';
import { HeaderWrappen, Wrappen, Menu } from './AppBar.styled.js';
import Logo from '../Logo/Logo';
import Container from 'components/Container/Container.js';
import useMatchMedia from 'hooks/useMatchMedia';
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
    <HeaderWrappen>
      <Container>
        <Wrappen>
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
        </Wrappen>
      </Container>

      {isMobile && mobileMenuIsOpen && (
        <Menu>
          <BurgerMenu toggleMenu={toggleMenu} />
        </Menu>
      )}
    </HeaderWrappen>
  );
};

export default AppBar;
