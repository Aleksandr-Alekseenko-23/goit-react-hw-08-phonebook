import { useSelector } from 'react-redux';
import { getIsLoggetIn } from '../../redux/selectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggetIn);
  return isLoggedIn ? children : <Navigate to="/login" />;
};
