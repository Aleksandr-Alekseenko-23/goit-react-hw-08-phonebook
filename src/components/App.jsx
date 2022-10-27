import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import AppBar from './AppBar/AppBar';
import { fetchCurrentUser } from '../redux/authOperations';
import { PrivateRoute } from 'components/privatPublicRoute/PrivateRoute';
import { PublicRoute } from 'components/privatPublicRoute/PubllicRoute';
import { selectIsFetchingCurrent } from 'redux/selectors';
import Loader from './Loader/Loader';
import Main from './Main/Main';
import Footer from './Footer/Footer';

export const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const RegisterLazy = lazy(() => import('page/Register/Register'));
  const LoginLazy = lazy(() => import('page/Login/Login'));
  const PhoneBookLazy = lazy(() => import('../page/PhoneBook/PhoneBook'));

  const isFetchingCurrent = useSelector(selectIsFetchingCurrent);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (pathname === '/') {
      navigate('/login');
    }
  }, [navigate, pathname]);

  return (
    <>
      <AppBar />
      <Main>
        <Suspense fallback={<Loader />}>
          {!isFetchingCurrent && (
            <Routes>
              <Route
                path="/register"
                element={
                  <PublicRoute restricted>
                    <RegisterLazy />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute restricted>
                    <LoginLazy />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <PhoneBookLazy />
                  </PrivateRoute>
                }
              />
              <Route
                path="*"
                element={
                  <PublicRoute restricted>
                    <LoginLazy />
                  </PublicRoute>
                }
              />
            </Routes>
          )}
        </Suspense>
      </Main>
      <Footer />
    </>
  );
};
