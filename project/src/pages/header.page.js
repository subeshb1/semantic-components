import React from "react";
import Label from "../components/label";
import Container from "../components/container";
import Header from "../components/header";
import Icon from "../components/icon";
import Button from "../components/button";
import Input from "../components/input";
import Image from "../components/image";
import Divider from "../components/divider";

export default class HeaderPage extends React.Component {
  render() {
    return (
      <Container>
        {/* Default Headers */}
        <Header as="h1">H1</Header>
        <Header as="h2">H2</Header>
        <Header as="h3">H3</Header>
        <Header as="h4">H4</Header>
        <Header as="h5">H5</Header>
        <Header as="h6">H6</Header>
        {/* Div as Headers */}
        <Header size="huge">Huge</Header>
        <Header size="large">Large</Header>
        <Header size="medium">Medium</Header>
        <Header size="small">Small</Header>
        <Header size="tiny">Tiny</Header>
        {/* Headers with icon */}
        <Header icon>
          <Icon name="settings" />
          Account Settings
          <Header sub>
            {" "}
            Manage your account settings and set e-mail preferences.
          </Header>
        </Header>
        {/* SubHeaders Headers */}
        <Header as="h1">
          H1
          <Header sub>Sub Header </Header>
        </Header>
        <Header as="h2">
          H2
          <Header sub>Sub Header </Header>
        </Header>
        <Header as="h3">
          H3
          <Header sub>Sub Header </Header>
        </Header>
        <Header as="h4">
          H4
          <Header sub>Sub Header </Header>
        </Header>
        <Header as="h5">
          H5
          <Header sub>Sub Header </Header>
        </Header>
        <Header as="h6">
          H6
          <Header sub>Sub Header </Header>
        </Header>
        <Header sub as="h2">
          Proce{" "}
        </Header>

        {/* Headers with  image and ICon */}
        <Header as="h2">
          <Icon name="plug" />
          <Header.Content>Uptime Guarantee</Header.Content>
        </Header>

        <Header as="h2">
          <Icon name="settings" />
          <Header.Content>
            Account Settings
            <Header sub>Manage your preferences</Header>
          </Header.Content>
        </Header>
        {/* DIsabled */}
        <Header as="h2" disabled>
          <Icon name="settings" />
          <Header.Content>
            Account Settings
            <Header sub>Manage your preferences</Header>
          </Header.Content>
        </Header>
        {/* Dividing */}
        <Header as="h2" dividing>
          Hello
        </Header>
        {/* BLock Header */}
        <Header as="h2" block>
          Hello
        </Header>
        {/* Float */}
        <Header as="h2" float="right">
          Right
        </Header>
        <Header as="h2" float="left">
          Left
        </Header>
        <Divider clearing />
        {/* Attached */}
        <Header as="h2" attached="top">
          Top
        </Header>
        <Header as="h2" attached="top">
          Top
        </Header>
        <Header as="h2" attached="bottom">
          Bottom
        </Header>
        <Header as="h2" attached>
          Attached
        </Header>

        {/* Text Alignment */}
        <Header as="h2" textAlign="right">
          Right
        </Header>
        <Header as="h2" textAlign="left">
          Left
        </Header>
        <Header as="h2" textAlign="center">
          Center
        </Header>
        <Header as="h2" textAlign="justified">
          This should take up the full width even if only one line
        </Header>

        {/* Color and Inverted */}
        <Header as="h2" color="red">
          I am Colorful
        </Header>
        <Header as="h2" color="red" inverted>
          I am Inverted
        </Header>
      </Container>
    );
  }
}
