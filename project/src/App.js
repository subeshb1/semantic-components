import React, { Component } from "react";
import "./App.css";
// eslint-disable-next-line
import Button, { ButtonGroup } from "./components/button";
// eslint-disable-next-line
import Container from "./components/container";
// eslint-disable-next-line
import Divider from "./components/divider";
// eslint-disable-next-line
import Icon from "./components/icon";
// eslint-disable-next-line
import Flag from "./components/flag";
// eslint-disable-next-line
import Header from "./components/header";
// eslint-disable-next-line
import Image from "./components/image";
// eslint-disable-next-line
import Label, { LabelGroup } from "./components/label";
// eslint-disable-next-line
import Loader from "./components/loader";
// eslint-disable-next-line
import Segment from "./components/segment";
// eslint-disable-next-line
import Input from "./components/input";
// eslint-disable-next-line
import List, { ListItem } from "./components/list";

class App extends Component {
  render() {
    return (
      <Container>
        <Header as="h1">Lists</Header>
        <Header as="h2">Type of Lists</Header>
        <Header>Simple List</Header>
        <List>
          <List.Item>Apples</List.Item>
          <List.Item>Pears</List.Item>
          <List.Item>Oranges</List.Item>
        </List>
        <Header>
          Simple List as ul or ol.{" "}
          {"{use ol or li for bulleted or ordered list}"}
        </Header>
        <List as="ul">
          <List.Item>Apples</List.Item>
          <List.Item>Pears</List.Item>
          <List.Item>Oranges</List.Item>
        </List>
        <Header>Bulleted List</Header>
        <List as="ul" bulleted>
          <List.Item as="li">Apples</List.Item>
          <List.Item as="li">Pears</List.Item>
          <List.Item as="li">
            Oranges
            <List nested as="ul">
              <List.Item as="li">Apples</List.Item>
              <List.Item as="li">Pears</List.Item>
              <List.Item as="li">Oranges</List.Item>
            </List>
          </List.Item>
          <List.Item>Pears</List.Item>
        </List>
        <Header>Ordered List</Header>
        <List as="ol" ordered>
          <List.Item>Apples</List.Item>
          <List.Item>
            Subesh
            <List as="ol" nested>
              <List.Item>Apples</List.Item>
              <List.Item>Pears</List.Item>
              <List.Item>Oranges</List.Item>
            </List>
          </List.Item>
          <List.Item>Oranges</List.Item>
        </List>
        <Header>List with Links</Header>
        <List link>
          <List.Item className="active item">Home</List.Item>
          <List.Item as="a">About</List.Item>
          <List.Item as="a">Jobs</List.Item>
          <List.Item as="a">Team</List.Item>
        </List>
        <Header as="h2">List Content</Header>
        <Header>Item</Header>
        <List>
          <List.Item>1</List.Item>
          <List.Item>2</List.Item>
          <List.Item>3</List.Item>
          <List.Item>4</List.Item>
        </List>
        <Header>Icon</Header>
        <List>
          <List.Item as="a">
            <Icon name="help" />
            <List.Content>
              <List.Header>Floated Icons</List.Header>
              <List.Description>
                This text will always have a left margin to make sure it sits
                alongside your icon
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item as="a" active>
            <Icon name="right triangle" />
            <List.Content>
              <List.Header>Floated Icons</List.Header>
              <List.Description>
                This text will always have a left margin to make sure it sits
                alongside your icon
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <Icon name="help" />
            Inline Text
          </List.Item>
        </List>
        <Header>Image</Header>
        <List>
          <List.Item as="a">
            <Image src="/img/joe.jpg" avatar />
            <List.Content>
              <List.Header>Floated Icons</List.Header>
              <List.Description data-tooltip="Amazing Image">
                This text will always have a left margin to make sure it sits
                alongside your icon
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
        <List ordered items={[
          { as: "div",active:true,children:<List nested items={[
            { as: "div",active:true,children:"Subesh" },
            { as: "div",active:true,children:"Subesh" },
            { as: "div",active:true,children:"Subesh" },
            { as: "div",active:true,children:"Subesh" },
            { as: "div",active:true,children:"Subesh" },
            { as: "div",active:true,children:"Subesh" },
            { as: "div",active:true,children:"Subesh" },
            { as: "div",active:true,children:"Subesh" },
            { as: "div",active:true,children:"Subesh" },
            ]} /> },
          { as: "div",active:true,children:"Subesh" },
          { as: "div",active:true,children:"Subesh" },
          { as: "div",active:true,children:"Subesh" },
          { as: "div",active:true,children:"Subesh" },
          { as: "div",active:true,children:"Subesh" },
          { as: "div",active:true,children:"Subesh" },
          { as: "div",active:true,children:"Subesh" },
          { as: "div",active:true,children:"Subesh" },
          ]} />
      </Container>
    );
  }
}
export default App;
