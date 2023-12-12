import { Navigate } from 'react-router-dom';
import { validateSession } from '../utils';
import React from 'react';

function RequireAuth(Component) {

    return function Auth(props) {
      
      const isValid = validateSession();
      console.log("Checking Authentication");
      if(!isValid) {
        console.log("Authentication Failed");
         return <Navigate to="/login" />
      } 

      return <Component {...props} />

    }

};

export default RequireAuth;