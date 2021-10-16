import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({component: Component, ...rest}) => {
    const userLogin = useSelector((state) => state.userLogin);
    const { registerInfo } = useSelector((state) => state.userRegister);
    const { userInfo } = userLogin;
    const isAuthenticated = registerInfo || userInfo;

    return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
