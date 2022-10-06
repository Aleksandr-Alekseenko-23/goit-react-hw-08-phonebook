import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from 'redux/authOperations';
import { TitleOne } from '../PhoneBook/PhoneBook.styled.js';
import {
  FormRegister,
  LabelRegister,
  InputRegister,
  ButtonRegister,
} from '../Register/Register.styled.js';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
    navigate('/contacts');
  };

  return (
    <div>
      <TitleOne>Login page</TitleOne>
      <FormRegister onSubmit={handleSubmit} autoComplete="off">
        <LabelRegister>
          Email
          <InputRegister
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </LabelRegister>
        <LabelRegister>
          Password
          <InputRegister
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </LabelRegister>
        <ButtonRegister type="submit">Sign in</ButtonRegister>
      </FormRegister>
    </div>
  );
};

export default Login;
