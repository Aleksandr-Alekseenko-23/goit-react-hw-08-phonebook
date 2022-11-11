import React from 'react';
import { LinkHome, Item, List } from '../Navigation/Navigation.styled.js';
import useMatchMedia from '../../hooks/UseMatchMedia';
import {
  MobMenuButton,
  appearDuration,
  MobMenuClose,
  MobHamburgerMenuClose,
} from './AuthNav.styled.js';

import { CSSTransition } from 'react-transition-group';

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
        <>
          <MobMenuButton
            type="button"
            aria-label="burger-menu"
            onClick={toggleMenu}
          >
            <CSSTransition
              in={mobileMenuIsOpen}
              timeout={appearDuration}
              classNames={{
                enterActive: 'exampleEnter',
                enterDone: 'exampleEnterActive',
                exitActive: 'exampleExit',
                exitDone: 'exampleActive',
              }}
            >
              {!mobileMenuIsOpen ? (
                <MobHamburgerMenuClose color="white" size={24} />
              ) : (
                <MobMenuClose color="white" size={24} />
              )}
            </CSSTransition>
          </MobMenuButton>
        </>
      )}
    </>
  );
};

export default AuthNav;
