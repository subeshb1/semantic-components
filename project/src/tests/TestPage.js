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
import { reactComponent } from "../lib/react-extras";
import DropDown from "../components/modules/DropDown";

import Button from "../components/button";
export default class TestPage extends Component {
  render() {
    return (
      <Container>
        <div class="ui top attached button" tabindex="0">
          Top
        </div>
        <div class="ui attached segment">
          <p />
        </div>
        <div class="ui bottom attached button" tabindex="0">
          Bottom
        </div>
      </Container>
    );
  }
}
