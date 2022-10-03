import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authOperations';
import { TitleOne } from '../PhoneBook/PhoneBook.styled.js';
import {
  FormRegister,
  LabelRegister,
  InputRegister,
  ButtonRegister,
} from './Register.styled.js';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <TitleOne>Registration page</TitleOne>
      <FormRegister onSubmit={handleSubmit} autoComplete="off">
        <LabelRegister>
          Name
          <InputRegister
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </LabelRegister>
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
        <ButtonRegister type="submit">Register</ButtonRegister>
      </FormRegister>
    </div>
  );
};

export default Register;
