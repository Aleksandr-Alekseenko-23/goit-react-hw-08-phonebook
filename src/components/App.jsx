import React from 'react';
import Container from './Container/Container';
import PhoneBook from '../page/PhoneBook/PhoneBook';
import { Route, Routes } from 'react-router-dom';
import Register from 'page/Register/Register';
import Login from 'page/Login/Login';
import AppBar from './AppBar/AppBar';

export const App = () => {
  return (
    <>
      <Container>
        <AppBar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<PhoneBook />} />
        </Routes>
      </Container>
    </>
  );
};
