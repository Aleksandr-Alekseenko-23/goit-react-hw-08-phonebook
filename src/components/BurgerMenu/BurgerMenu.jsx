import React from 'react';
import { Backdrop, Main, StyledNavLink, List } from './BurgerMenu.styled';

const BurgerMenu = ({ toggleMenu, mobileMenuIsOpen }) => {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      toggleMenu();
    }
  };
  return (
    <Backdrop onClick={handleBackdropClick} timeout={3000}>
      <Main>
        <List>
          <StyledNavLink
            to="register"
            onClick={() => {
              toggleMenu();
            }}
          >
            Sign up
          </StyledNavLink>

          <StyledNavLink to="login" onClick={toggleMenu}>
            Sign in
          </StyledNavLink>
        </List>
      </Main>
    </Backdrop>
  );
};

export default BurgerMenu;
