import { useSelector } from 'react-redux';
import { getIsLoggetIn } from '../../../redux/Auth/AuthSelectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggetIn);
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
