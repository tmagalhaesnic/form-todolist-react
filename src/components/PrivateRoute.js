import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { user } = useAuth();

  return user ? <Element /> : <Navigate to="/identificacao" replace />;
};

export default PrivateRoute;
