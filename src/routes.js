import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Create from "./components/Create";
import App from "./App";

export default (
  <Switch>
    <Route exact path="/" Component={App} />
    {/* <Route path="/create" component={Create} /> */}
  </Switch>
);
