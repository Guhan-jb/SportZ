import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('Token');
  if(token!==null)
  {
    return <Outlet />;
  }
  else{
    return  <Navigate to="/" />;
  }
  
  
};

export default PrivateRoute;
