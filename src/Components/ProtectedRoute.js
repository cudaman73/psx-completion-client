import React, { useContext } from 'react';
import AuthContext from '../AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, authChecked } = useContext(AuthContext);

  if (!authChecked) return null; // still checking the session; don't redirect yet
  if (!isAuthenticated) return <Navigate to="/login" />;
  return children;
};

export default ProtectedRoute;
