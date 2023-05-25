import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Component/providers/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../Component/Shared/Spinner/Spinner';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    return (
      <>
        {children}
        <ToastContainer />
      </>
    );
  }

  const handleNavigate = () => {
    toast.error('Please log in to access this page.');
    return <Navigate to="/login" state={{ from: location }} replace />;
  };

  return handleNavigate();
};

export default PrivateRoute;
