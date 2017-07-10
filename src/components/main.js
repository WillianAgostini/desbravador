import React, { Component } from "react";
import Home from "../views/home";
import Schedule from "../views/schedule";
import { Switch, Route } from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/schedule" component={Schedule} />
      </Switch>
    );
  }
}

export default Main;
