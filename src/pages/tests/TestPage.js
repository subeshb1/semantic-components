import React, { Component } from "react";
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
  Display
} from "../../components";
// eslint-disable-next-line
import { color } from "../../lib/react-extras";

export default class TestPage extends Component {
  state = {
    toggle: true
  }
  render() {
    const {toggle} = this.state;
    return (
      <Container>
        <Button
          toggle
          active={toggle}
          onClick={() => this.setState(({ toggle }) => ({ toggle: !toggle }))}
        />
        <Display  show={toggle}>
          <Segment color="red">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              expedita harum at fuga delectus corrupti quasi, consequuntur
              dolores eligendi, error vero, cupiditate odit. Error eaque,
              aliquid tempora nulla obcaecati placeat.
            </p>
          </Segment>
          <Segment>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              expedita harum at fuga delectus corrupti quasi, consequuntur
              dolores eligendi, error vero, cupiditate odit. Error eaque,
              aliquid tempora nulla obcaecati placeat.
            </p>
          </Segment>
        </Display>
      </Container>
    );
  }
}
