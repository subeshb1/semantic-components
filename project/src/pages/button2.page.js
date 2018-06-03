import React, { Component } from "react";
// eslint-disable-next-line
// import Button, { ButtonGroup } from "../components/button";
// eslint-disable-next-line
import Container from "../components/container";
// eslint-disable-next-line
import Divider from "../components/divider";
// eslint-disable-next-line
import Icon from "../components/icon";
// eslint-disable-next-line
import Flag from "../components/flag";
// eslint-disable-next-line
import Header from "../components/header";
// eslint-disable-next-line
import Image from "../components/image";
// eslint-disable-next-line
import Label, { LabelGroup } from "../components/label";
// eslint-disable-next-line
import Loader from "../components/loader";
// eslint-disable-next-line
import Segment from "../components/segment";
// eslint-disable-next-line
import Input from "../components/input";
// eslint-disable-next-line
import List, { ListItem } from "../components/list";
import Button from "../components/button2";

export default class extends Component {
  render() {
    return (
      <Container>
        <Header as="h1">Buttons</Header>
        <Header as="h2">Types</Header>
        <Header>1. Standard Button</Header>
        <Button text="Hello">Button</Button>
        <Button as="div">Div Button</Button>
        <Header>
          2. Emphasis
          <Header sub>Can be given using color attribute</Header>
        </Header>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button >Normal</Button>
        <Header>3. Animated</Header>
      </Container>
    );
  }
}
