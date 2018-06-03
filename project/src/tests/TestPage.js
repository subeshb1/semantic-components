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
import Reveal from "../components/reveal";

export default class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  componentDidMount() {
    // (() => {
    //   let lasScroll = document.documentElement.scrollTop;
    //   window.addEventListener("scroll", event => {
    //     if (document.documentElement.scrollTop > lasScroll)
    //       this.setState(({ active }) => ({ active: true }));
    //     else this.setState(({ active }) => ({ active: false }));
    //     lasScroll = document.documentElement.scrollTop;
    //   });
    // })();
    window.addEventListener("click", event => {
      this.setState(({ active }) => ({ active: !active }));
    });
  }
  render() {
    return (
      <Container>
        <div class="ui small  circular rotate left reveal image">
          <img class="visible content" src="/img/avatar1.png" />
          <img class="hidden content" src="/img/avatar2.png" />
        </div>
      </Container>
    );
  }
}
