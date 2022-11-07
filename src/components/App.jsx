import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import AppBar from './AppBar/AppBar';
import { fetchCurrentUser } from '../redux/Auth/AuthOperations';
import PrivateRoute from './Routes/Privat/PrivateRoute';
import { PublicRoute } from './Routes/Public/PubllicRoute';
import { selectIsFetchingCurrent } from 'redux/Auth/AuthSelectors';
import Loader from './Loader/Loader';
import Main from './Main/Main';
import Footer from './Footer/Footer';

export const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const RegistrationFormLazy = lazy(() =>
    import('page/RegistrationForm/RegistrationForm')
  );
  const LoginFormLazy = lazy(() => import('page/LoginForm/LoginForm'));
  const PhoneBookLazy = lazy(() => import('../page/PhoneBook/PhoneBook'));
  const PageNotFound = lazy(() => import('../page/NotFound/NotFound'));

  const isFetchingCurrent = useSelector(selectIsFetchingCurrent);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (pathname === '/') {
      navigate('/contacts');
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
                    <RegistrationFormLazy />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute restricted>
                    <LoginFormLazy />
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
                  <PublicRoute>
                    <PageNotFound />
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
