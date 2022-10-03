import React from 'react';
import { LinkHome, Item, List } from '../Navigation/Navigation.styled.js';

const AuthNav = () => {
  return (
    <>
      <List>
        <Item>
          <LinkHome to="register">Sign up</LinkHome>
        </Item>
        <Item>
          <LinkHome to="login">Sign in</LinkHome>
        </Item>
      </List>
    </>
  );
};

export default AuthNav;
