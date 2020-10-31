import React from "react";
import Login from "./pages/login";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
export default function App() {
  const isAuth = false;
  return (
      <BrowserRouter>
        <Redirect from="/" to="/login" />
        <Switch>
          <PrivateRoute isAuth={isAuth} path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
  );
}
