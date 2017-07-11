import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock
} from "react-bootstrap";
import Details from "./details";

class Home extends React.Component {
  constructor(props) {
    super(props);

    // this.handleChange = this.handleChange.bind(this)

    this.state = {
      valor: "",
      object: {},
      validationState: ""
    };
  }

  // getInitialState() {
  //   return {
  //     value: ""
  //   };
  // }

  // getValidationState() {
  //   let length = this.state.valor.length;
  //   if (length > 10) return "success";
  //   else if (length > 5) return "warning";
  //   else if (length > 0) return "error";
  // }

  handleChange = e => {
    this.setState({ valor: e.target.value });
  };

  keyPress = event => {
    this.setState({ validationState: "warning" });
    if (event.key === "Enter") {
      event.preventDefault();
      this.getUser();
    }
  };

  getUser() {
    let url = "https://api.github.com/users/" + this.state.valor;
    fetch(url).then(async status => {
      if (!status.ok) {
        this.setState({ validationState: "error" });
        console.warn(status);
      }

      let response = await status.json();
      console.log(response);

      this.setState({ validationState: "success" });
      this.setState({ object: response });
    });
  }

  render() {
    return (
      <div className="container">
        <form>
          <FormGroup
            controlId="formBasicText"
            validationState={this.state.validationState}
          >
            <FormControl
              type="text"
              value={this.state.valor}
              placeholder="Find user..."
              onChange={this.handleChange}
              onKeyPress={this.keyPress}              
            />
            <FormControl.Feedback />
          </FormGroup>
          <Details userDetails={this.state.object} />
        </form>
      </div>
    );
  }
}

export default Home;
