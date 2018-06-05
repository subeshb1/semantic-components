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
  Card
} from "../../components";
// eslint-disable-next-line
import { color } from "../../lib/react-extras";
export default class TestPage extends Component {
  render() {
    return (
      <Container>
        <Card>
         
          <Card.Content>
            <Card.Header as="a">Subesh Bhandari</Card.Header>
            <Card.Meta>20 yrs old</Card.Meta>
            <Card.Description>
              He is an average programmer with zero salary.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span className="right floated">Joined 2014</span>
            <Icon name="users" />
            151 Friends
          </Card.Content>
        </Card>
      </Container>
    );
  }
}
