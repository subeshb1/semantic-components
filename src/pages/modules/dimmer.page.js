import React, { Component } from "react";
import {
  Icon,
  Dimmer,
  Image,
  Container,
  Loader,
  Button,
  Segment,
  Header
} from "../../components";

export default class DimmerPage extends Component {
  state = {
    active: false,
    page: false,
    blurry: false,
    final: false,
  };
  render() {
    const {final, active, page,blurry } = this.state;
    return (
      <Container>
        <Header as="h1">Dimmer</Header>
        <Header as="h2" text="Types" />
        <Button
          toggle
          text="Toggle"
          active={active}
          onClick={() => this.setState(({ active }) => ({ active: !active }))}
        />
        <Header text="Content Dimmer" />
        <Segment>
          <Dimmer show={active}>
            <Dimmer.Content>
              <Loader >My Name</Loader>
            </Dimmer.Content>
          </Dimmer>
          <Image
            src="/img/placeholder.svg"
            centered
            size="small"
            onClick={() => alert("Whoops")}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            asperiores eum blanditiis veritatis, nemo enim ducimus perferendis
            delectus voluptas molestias tempore optio laborum neque vero sed
            illo, nobis ea perspiciatis?
          </p>
        </Segment>
        <Header text="Page Dimmer" />
        <Button
          toggle
          text="Toggle"
          active={page}
          onClick={() => this.setState(({ page }) => ({ page: !page }))}
        />
        <Segment>
          <Dimmer
            page
            show={page}
            onClick={() => this.setState(({ page }) => ({ page: false }))}
          >
            <Dimmer.Content>
              <Header as="h1" size="massive" icon inverted>
                <Icon name="like" />
                Welcome
              </Header>
            </Dimmer.Content>
          </Dimmer>
          <Image src="/img/placeholder.svg" centered size="small" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            asperiores eum blanditiis veritatis, nemo enim ducimus perferendis
            delectus voluptas molestias tempore optio laborum neque vero sed
            illo, nobis ea perspiciatis?
          </p>
        </Segment>

        <Header as="h2" text="Variations" />
        <Header text="Blurring">
        
          <Header as="div" sub >
            A dimmable element can blur its contents. Simple Dimmer required for auto dim inner dimmer.
          </Header>
        </Header>
        <Button
          toggle
          text="Toggle"
          active={page}
          onClick={() => this.setState(({ blurry }) => ({ blurry: !blurry }))}
        />
        <Dimmer.Dimmable as={Segment} show={blurry} blurring>
          <Dimmer  simple>
            <Dimmer.Content>
              <Header as="h1" size="massive" icon inverted >
                <Icon name="like" />
                Welcome
              </Header>
            </Dimmer.Content>
          </Dimmer>
          <Image src="/img/placeholder.svg" centered size="small" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            asperiores eum blanditiis veritatis, nemo enim ducimus perferendis
            delectus voluptas molestias tempore optio laborum neque vero sed
            illo, nobis ea perspiciatis?
          </p>
        </Dimmer.Dimmable>
        <Button
          toggle
          text="Toggle"
          active={page}
          onClick={() => this.setState(({ final }) => ({ final: !final}))}
        />
        <Dimmer page  show={final} verticalAlign="top" onClick={() => this.setState(({ final }) => ({ final: false }))}>
          <Dimmer.Content >
              <Header textAlign="center" color="grey">Add Friend</Header>
              <Button>Accept</Button>
              <Button>Reject</Button>

          </Dimmer.Content>
        </Dimmer>
      </Container>
    );
  }
}
