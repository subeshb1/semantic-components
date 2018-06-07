import React, { Component } from "react";
// import { NavLink } from "react-router-dom";

// eslint-disable-next-line
import {
  // eslint-disable-next-line
  Button,
  // eslint-disable-next-line
  Container,
  // eslint-disable-next-line
  Divider,
  // eslint-disable-next-line
  Flag,
  // eslint-disable-next-line
  Header,
  // eslint-disable-next-line
  Icon,
  // eslint-disable-next-line
  Image,
  // eslint-disable-next-line
  Input,
  // eslint-disable-next-line
  Label,
  // eslint-disable-next-line
  List,
  // eslint-disable-next-line
  Loader,
  // eslint-disable-next-line
  Reveal,
  // eslint-disable-next-line
  Segment,
  Display,
  Menu
} from "../../components";
// eslint-disable-next-line
import { colorDef } from "../../lib/react-extras";

export default class TestPage extends Component {
  state = {
    toggle: true
  };
  render() {
    const { toggle } = this.state;
    return (
      <Container>
        <Button
          toggle
          active={toggle}
          onClick={() => this.setState(({ toggle }) => ({ toggle: !toggle }))}
        />
        <Display
          show={toggle}
          visibleRange={{ min: Display.Tablet.max, max: Infinity }}
        >
          <Menu
            secondary
            pointing
            items={[
              {
                as: "a",
                text: "Home",
                color: colorDef[Math.floor(Math.random() * 13)],
                active: "true"
              },
              {
                as: "a",
                text: "Contact",
                color: colorDef[Math.floor(Math.random() * 13)],
                active: "true"
              },
              {
                as: "a",
                text: "About",
                color: colorDef[Math.floor(Math.random() * 13)],
                active: "true"
              }
            ]}
          />
        </Display>
      </Container>
    );
  }
}
