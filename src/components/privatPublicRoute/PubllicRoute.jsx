import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from '../../redux/selectors';

export const PublicRoute = ({ children, restricted = false }) => {
  const token = useSelector(getToken);
  const shouldRedirect = token && restricted;
  return shouldRedirect ? <Navigate to="/contacts" /> : children;
};
