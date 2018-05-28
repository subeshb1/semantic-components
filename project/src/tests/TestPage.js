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

import DropDown from "../components/modules/DropDown";
export default class TestPage extends Component {
  render() {
    return (
      <Container>
        <DropDown selection>
          <input type="hidden" name="gender" />
          <i class="dropdown icon" />
          <div class="default text">Gender</div>
          <DropDown.Menu>
        
            <div class="item" data-value="1">
              Male
            </div>
            <div class="item" data-value="0">
              Female
            </div>
          </DropDown.Menu>
        </DropDown>
      </Container>
    );
  }
}
