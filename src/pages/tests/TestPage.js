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
  Segment
} from "../../components";
import { color } from "../../lib/react-extras";
console.log(color.length);
export default class TestPage extends Component {
  render() {
    return (
      <Container>
        <div class="ui middle aligned four column centered padded grid">
          <div class="row">
            <div class="column">
              <Image src="/img/avatar6.png" size="tiny" />
            </div>
            <div class="column">
              <Image src="/img/avatar6.png"  size="tiny"/>
              <Image src="/img/avatar6.png" size="tiny" />
            </div>
            <div class="column">
              <Image src="/img/avatar6.png" size="tiny" />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
