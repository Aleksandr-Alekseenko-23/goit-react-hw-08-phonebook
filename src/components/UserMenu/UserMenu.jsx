import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUseremail } from '../../redux/selectors';
import { logout } from 'redux/authOperations';
import { Text } from './UserMenu.styled.js';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUseremail);

  return (
    <div>
      <Text>{email}</Text>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
