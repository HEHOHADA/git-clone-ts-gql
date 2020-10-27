import React, { Component } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
  component: any;
  isAuth: boolean;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, isAuth, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuth ? (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: routeProps.location },
            }}
          />
        ) : (
          <Component {...routeProps} />
        )
      }
    />
  );
};

export default PrivateRoute;
