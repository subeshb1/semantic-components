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
import { toUpper } from "../lib/basic-utils";
import { social, color, size } from "../lib/react-extras";

export default class extends Component {
  state = {
    active: false
  };
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
          <Header sub as="div">
            Can be given using color attribute
          </Header>
        </Header>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button>Normal</Button>
        <Header>
          3. Animated
          <Header sub as="div">
            A button can show hidden content using animation. Use Visible and
            Hidden Components in child
          </Header>
        </Header>
        <Button animated>
          <Button.Visible text="Next" />
          <Button.Hidden>
            <Icon name="right arrow" />
          </Button.Hidden>
        </Button>
        <Button animated="vertical">
          <Button.Hidden text="shop" />
          <Button.Visible>
            <Icon name="shopping cart" />
          </Button.Visible>
        </Button>
        <Button animated="fade">
          <Button.Hidden text="$12.99 a month" />
          <Button.Visible text="Sign-up for a Pro account" />
        </Button>
        <Header>
          Labeled Button
          <Header sub as="div">
            A Button can appear along side a label.
          </Header>
        </Header>
        <Button as="div" labeled>
          <Button>
            <Icon name="heart " /> Like
          </Button>
          <Label basic as="a">
            2,048
          </Label>
        </Button>
        <Button as="div" labeled="left">
          <Label basic as="a">
            2,048
          </Label>
          <Button>
            <Icon name="heart " /> Like
          </Button>
        </Button>
        <Button labeled="left">
          <Label as="a" href="#" basic pointing="right">
            2,048
          </Label>
          <Button>
            <Icon name="heart" /> Like
          </Button>
        </Button>
        <Button labeled>
          <Button color="red">
            <Icon name="heart" /> Like
          </Button>
          <Label as="a" pointing="left" basic color="red">
            2,048
          </Label>
        </Button>
        <Button labeled="left">
          <Label as="a" pointing="right" basic color="blue">
            2,048
          </Label>
          <Button color="blue" basic>
            <Icon name="heart" /> Like
          </Button>
        </Button>
        <Header>
          4. Icon
          <Header sub as="div">
            A Button can have only an Icon.
          </Header>{" "}
        </Header>
        <Button icon>
          <Icon name="cloud" />
        </Button>

        <Header>
          5. Labeled Icon{" "}
          <Header as="div" sub>
            A Button can use label as well as an Icon
          </Header>{" "}
        </Header>
        <Button labeled icon text="Pause">
          <Icon name="pause" />
        </Button>
        <Button labeled="right" icon text="Next">
          <Icon name="right arrow" />
        </Button>
        <Header>
          6. Basic{" "}
          <Header as="div" sub>
            A basic button is less pronounced.
          </Header>{" "}
        </Header>
        {color.map((x, index) => (
          <Button color={x} basic key={index}>
            {x ? x : "Standard"}
          </Button>
        ))}
        <Header>
          7. Inverted{" "}
          <Header as="div" sub>
            A button can be inverted
          </Header>{" "}
        </Header>
        <Segment inverted>
          {color.map((x, index) => (
            <Button color={x} inverted key={index}>
              {x ? x : "Standard"}
            </Button>
          ))}
        </Segment>
        <Segment inverted>
          {color.map((x, index) => (
            <Button color={x} inverted basic key={index}>
              {x ? x : "Standard"}
            </Button>
          ))}
        </Segment>

        <Header as="h2">States</Header>
        <Header>Active</Header>
        <Button active>Active</Button>
        <Button> Normal</Button>
        <Header>Disabled</Header>
        <Button disabled>Disabled</Button>
        <Header>Loading</Header>
        <Button loading>Subesh</Button>
        <Button loading color="primary">
          Subesh
        </Button>
        <Header as="h2">Variation</Header>
        <Header>Social</Header>
        <Button social="facebook">
          <Icon name="facebook" />
          Facebook
        </Button>

        {social.map((x, i) => (
          <Button key={i} social={x}>
            <Icon name={x} />
            {toUpper(x[0]) + x.slice(1)}
          </Button>
        ))}
        <Header>Size</Header>
        {size.map((x, i) => (
          <Button size={x} key={i}>
            {x}
          </Button>
        ))}
        <Header>Floated Button</Header>
        <Button float="left"> Left</Button>
        <Button float="right"> Right</Button>
        <Divider clearing />
        <Header>Colored</Header>
        {color.map((x, index) => (
          <Button color={x} key={index}>
            {x ? x : "Standard"}
          </Button>
        ))}
        <Header>Compact</Header>
        <Button compact>Button</Button>
        <Button compact icon>
          <Icon name="pause" />
        </Button>
        <Button compact labeled="right" icon>
          <Icon name="pause" /> Subesh
        </Button>
        <Header>Fluid</Header>
        <Button fluid>Fluid</Button>
        <Header>Toggle</Header>
        <Button
          toggle
          active={this.state.active}
          onClick={() => this.setState(({ active }) => ({ active: !active }))}
          text="Click Me!"
        />
        <Header>Circular</Header>
        <Button circular color="red">
          Button
        </Button>
        <Button icon circular>
          {" "}
          <Icon name="settings" />
        </Button>
        <Button icon circular social="facebook">
          {" "}
          <Icon name="facebook" />
        </Button>
        <Button icon circular social="instagram">
          {" "}
          <Icon name="instagram" />
        </Button>
        <Header>Vertically Attached </Header>
        <Button attached="top">Top</Button>
        <Segment attached>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste sequi
          laborum odio repellat at, soluta fugiat, reiciendis veniam,
          repellendus blanditiis obcaecati id quam non praesentium nihil minima
          sapiente! Maxime, qui?
        </Segment>
        <Button attached="bottom">Bottom</Button>

        <Header>Horizontally Attached</Header>
        <Button attached="left">Left</Button>
        <Button attached="right">Right</Button>

        <Header as="h1">ButtonGroup</Header>
        <Header>Simple Button Group</Header>
        <Button.Group>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </Button.Group>
        <Header>Icon Button Group</Header>
        <Button.Group>
          <Button>
            <Icon name="align left" />
          </Button>
          <Button>
            <Icon name="align center" />
          </Button>
          <Button>
            <Icon name="align right" />
          </Button>
        </Button.Group>
        <Header>Either or Button Group</Header>
        <Button.Group>
          <Button>Button 1</Button>
          <Button.Or />
          <Button>Button 2</Button>
          <Button.Or />
          <Button>Button 3</Button>
        </Button.Group>
        <Header>Vertical Button Group</Header>
        <Button.Group vertical>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </Button.Group>
        <Header>Labeled Icon Button Group</Header>
        <Button.Group labeled="left" icon>
          <Button>
            Button 1
            <Icon name="align left" />
          </Button>
          <Button>
            <Icon name="align center" />Button 2
          </Button>
          <Button>
            <Icon name="align right" />Button 3
          </Button>
        </Button.Group>
      </Container>
    );
  }
}
