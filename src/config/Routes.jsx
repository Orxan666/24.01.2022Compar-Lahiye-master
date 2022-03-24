import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";

const Routes = () => {
  return (
    <Switch>
      <Route component={About}  path="/about" />
      <Route component={Home} exact path="/" />
    </Switch>
  );
};

export default Routes;
