import React, { Component } from "react";
// eslint-disable-next-line
import Button, { ButtonGroup } from "../components/button";
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
import { reactComponent } from "../lib/react-extras";
import DropDown from "../components/modules/DropDown";

const ActionButton = reactComponent(Button, {
  "data-tooltip": "Subesh",
  children: "Click",
  color:"red"
});
// const SegmentDiv = div({ className: "ui segment" });
// const SegmentDiv1= SegmentDiv({ className: "ui segment" })("sdas");
// const SegmentDiv1= div();

export default class TestPage extends Component {
  render() {
    return (
      <Container>
        <Divider />
        <ActionButton >Subesh</ActionButton>
      </Container>
    );
  }
}
