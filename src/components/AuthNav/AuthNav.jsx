import React from 'react';
import { LinkHome, Item, List } from '../Navigation/Navigation.styled.js';
import useMatchMedia from 'hooks/useMatchMedia';
import { MobMenuButton } from './AuthNav.styled.js';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TfiClose } from 'react-icons/tfi';

const AuthNav = ({ mobileMenuIsOpen, toggleMenu }) => {
  const { isMobile } = useMatchMedia();

  return (
    <>
      {!isMobile ? (
        <List>
          <Item>
            <LinkHome to="register">Sign up</LinkHome>
          </Item>
          <Item>
            <LinkHome to="login">Sign in</LinkHome>
          </Item>
        </List>
      ) : (
        <MobMenuButton
          type="button"
          aria-label="burger-menu"
          onClick={toggleMenu}
        >
          {!mobileMenuIsOpen ? (
            <GiHamburgerMenu color="white" size={24} />
          ) : (
            <TfiClose color="white" size={24} />
          )}
        </MobMenuButton>
      )}
    </>
  );
};

export default AuthNav;
