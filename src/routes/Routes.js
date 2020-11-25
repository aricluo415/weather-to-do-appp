import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "../containers/Home/Home.js";
function Routes() {
  return (
    <Switch>
      <Route exact to="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
