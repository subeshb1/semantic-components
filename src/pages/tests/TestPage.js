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
// eslint-disable-next-line
import { color } from "../../lib/react-extras";

export default class TestPage extends Component {
  render() {
    return (
      <Container>
        <div class="ui  item menu">
          <a class="active item">Editorials</a>
          <a class="item">Reviews</a>
          <a class="item">Upcoming Events</a>
        </div>
      </Container>
    );
  }
}
