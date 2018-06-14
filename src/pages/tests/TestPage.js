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
  // eslint-disable-next-line
  Display,
  // eslint-disable-next-line
  Menu,
  Transition2,
  Movable
} from "../../components";
// eslint-disable-next-line
import { colorDef } from "../../lib/react-extras";

export default class TestPage extends Component {
  state = {
    data: [{ content: "Subesh" }, { content: "Bhanfa" }],
    remove: false,
    client: { x: 0, y: 0 },
    offset: { x: 0, y: 0 },
    dimension: { width: 0, height: 0 },
    move: false
  };

  componentDidMount() {
    window.addEventListener("mousemove", e => {
      this.setState({ client: { x: e.clientX, y: e.clientY } });
    });
    window.addEventListener("touchmove", e => {
      this.setState({
        client: { x: e.touches[0].clientX, y: e.touches[0].clientY }
      });
    });
    window.addEventListener("mouseup", e => {
      this.setState({ move: false });
    });
    window.addEventListener("touchend", e => {
      this.setState({ move: false });
    });
  }

  render() {
    const {
      client: { x, y },
      offset: { x: ox, y: oy },
      dimension: { width, height },
      move
    } = this.state;
    console.log(ox, oy, x, y);
    return (
      <Container>
        <Movable
          onDrag={(offset, client, pos) => {
            // document.documentElement.style.touchAction = "none";

            document.querySelector("body").style.overscrollBehavior = "contain";
            this.setState({ move: true, offset, pos, client });
          }}
          style={{ transition: "transform 1s ease", transform: "scale(1.01)" }}
          drag={move}
          dragPos={{ x: x - ox, y: y - oy }}
        >
          <Segment stacked raised compact>
            Subesh
          </Segment>
        </Movable>
      </Container>
    );
  }
}
