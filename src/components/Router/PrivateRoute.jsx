import  { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../utils/Spinner';
import { toast } from 'react-toastify';

const PrivateRoute = ({ children }) => {
  const { user, isLoggingIn } = useContext(AuthContext);
  const location = useLocation();
  const notify = () => toast("Please login to visit the page.");

  if (isLoggingIn) {
    return <Spinner />;
  } else {
    if (user && user?.email) {
      return children;
    } else {
      notify();
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  }
};
export default PrivateRoute;