import React, { Component } from "react";
import {
  Button,
  FormGroup,
  InputGroup,
  FormControl,
  Glyphicon,
  DropdownButton,
  MenuItem
} from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <FormGroup>
          <InputGroup>
            <FormControl type="text" />
            <InputGroup.Button>
              <Button>Before</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </div>
    );
  }
}

export default Home;
