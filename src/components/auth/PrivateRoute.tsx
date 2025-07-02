import { useAppSelector } from '@/hooks/redux/SelectorAndDispatchHooks';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = useAppSelector(state => state.auth.token);

  if (token !== null) return children;
  else return <Navigate to="/phantom/signin/student" />;
};

export default PrivateRoute;
