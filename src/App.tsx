import React from "react";
import Login from "./app/pages/Login";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./app/routes/PrivateRoute";
export default function App() {
  const isAuth = false;
  return (
    <div>
      <BrowserRouter>
        <Redirect from="/" to="/login" />
        <Switch>
          <PrivateRoute isAuth={isAuth} path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
