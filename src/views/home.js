import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock
} from "react-bootstrap";

class Home extends React.Component {
  constructor(props) {
    super(props);

    // this.handleChange = this.handleChange.bind(this)

    this.state = { valor: "" };
  }

  // getInitialState() {
  //   return {
  //     value: ""
  //   };
  // }

  getValidationState() {
    let length = this.state.valor.length;
    if (length > 10) return "success";
    else if (length > 5) return "warning";
    else if (length > 0) return "error";
  }

  handleChange = e => {
    this.setState({ valor: e.target.value });
  };

  keyPress = (event) => {
    if (event.key === "Enter") {
      alert("enter");
    }
  };

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.valor}
            placeholder="Enter text"
            onChange={this.handleChange}
            onKeyPress={this.keyPress}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    );
  }
}

export default Home;
