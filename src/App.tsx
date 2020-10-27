import React from "react";
import Login from "./app/pages/Login";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Redirect from="/" to="/login" />
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
