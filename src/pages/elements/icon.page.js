import React from "react";
// eslint-disable-next-line
import {
  Button,
  Container,
  Flag,
  Icon} from "../../components";
export default class InputPage extends React.Component {
  render() {
    return (
      <Container>
        <Container>
          <Icon name="home" />
          <Icon name="spinner" state="loading" />
          <Icon name="users" state="disabled" />
          <Icon name="cloud" />
          <Icon name="cloud" flipped="vertically" />
          <Icon name="cloud" flipped />

          <Icon name="cloud" rotated />
          <Icon name="cloud" rotated="counterclockwise" />
          <Icon name="home" fitted />
          <Icon name="home" size="big" />
          <Icon name="close" link onClick={alert} />
          <Icon name="user" circular />
          <Icon name="user" bordered />
          <Icon name="user" bordered inverted />
          <Icon name="user" color={"red"} />
          <Icon name="user" color={"red"} inverted />
        </Container>

        <Container>
          <Icon.Group size="huge">
            <Icon name="dont" color="red" size="big" />
            <Icon name="user" color="black" />
          </Icon.Group>
          <Icon.Group size="huge">
            <Icon name="puzzle" />
            <Icon name="add" corner="top left" />
          </Icon.Group>
          <Icon.Group size="huge" onClick={() => alert("YO")}>
            <Icon name="twitter" />
            <Icon name="add" corner inverted />
          </Icon.Group>
          <Icon name="ad" />
          <Button icon state="active" color="red">
            <Icon.Group size="big">
              <Icon name="twitter" />
              <Icon name="add" corner inverted />
            </Icon.Group>
          </Button>
          <Button icon>
            <Flag name="np" />
          </Button>
        </Container>
      </Container>
    );
  }
}
