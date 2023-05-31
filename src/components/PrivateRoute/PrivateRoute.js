import React from 'react';
import {Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component,}) => {
  const isLogged = localStorage.getItem('isLogged');
  console.log(isLogged)
    return JSON.parse(isLogged) === true
        ? <Component />
        : <Navigate to='/log-in' />
}


export default PrivateRoute;