import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !localStorage.getItem("userToken") ? (
          <Redirect to="/admin" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default AuthRoute;
