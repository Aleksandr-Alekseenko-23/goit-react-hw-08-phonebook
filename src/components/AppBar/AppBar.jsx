import { Navigation } from 'components/Navigation/Navigation';
import React from 'react';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { getIsLoggetIn } from 'redux/selectors';
import { useSelector } from 'react-redux';

const AppBar = () => {
  const isLoggetIn = useSelector(getIsLoggetIn);
  return (
    <header>
      <Navigation />
      {isLoggetIn ? <AuthNav /> : <UserMenu />}
    </header>
  );
};

export default AppBar;
