import React, { Component } from "react";
import Divider from "../components/divider";
import Container from '../components/container';
import Button from "../components/button";


export default class DividerPage extends Component {
  render() {
    return (
      <Container>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore...
        {/* Simple Divider */}
        <Divider />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore...
        {/* Divider with text */}
        <Divider text="Or" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore...
        {/* Divider with Icon */}
        <Divider text="Or" icon="tag" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore...
        {/* Fitted */}
        <Divider fitted />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore...
        <Divider section />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore... Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore...
        <Button float="right">Floated Button</Button>
        <Divider clearing />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore...
        {/* Inverted */}
        <div className="ui inverted segment">
          <Divider inverted text="Or" icon="tag" />
        </div>
      </Container>
    );
  }
}
