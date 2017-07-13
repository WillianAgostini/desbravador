import React, { Component } from "react";
import Home from "../views/home";
import Schedule from "../views/schedule";
import { Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
class Main extends Component {
  constructor() {
    super();
    this.setData = this.setData.bind(this);
    this.state = {
      data: {}
    };
    this.history = createBrowserHistory();
  }
  setData(params) {
    this.setState({ data: params });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
          setdata={this.setData}
          history={this.history}
        />
        <Route
          path="/schedule"
          component={Schedule}
          data={this.state.data}
          history={this.history}
        />
      </Switch>
    );
  }
}

export default Main;
