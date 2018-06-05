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
          <Image src="/img/avatar8.png" wrapped />
          <Card.Content>
            <Card.Header textAlign="center" as="a" href="#">
              Kristy
            </Card.Header>
            <Card.Meta textAlign="right">Joined in 2013</Card.Meta>
            <Card.Description>
              Kristy is an art director living in New York.
            </Card.Description>
          </Card.Content>
          <Card.Content extra textAlign="center">
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}
