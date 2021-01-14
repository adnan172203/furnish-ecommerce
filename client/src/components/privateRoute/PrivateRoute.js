import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({component: Component, ...rest}) => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    return (
    <Route
      {...rest}
      render={(props) =>
        !userInfo  ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
