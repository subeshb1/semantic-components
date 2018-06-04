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
      <Container fluid>
        <div class="ui attached stackable menu">
          <a class="item">Name</a>
          <div class="ui container">
            <a class="item">
              <i class="home icon" /> Home
            </a>
            <a class="item">
              <i class="grid layout icon" /> Browse
            </a>
            <a class="item">
              <i class="mail icon" /> Messages
            </a>
            <div class="ui simple dropdown item">
              More
              <i class="dropdown icon" />
              <div class="menu">
                <a class="item">
                  <i class="edit icon" /> Edit Profile
                </a>
                <a class="item">
                  <i class="globe icon" /> Choose Language
                </a>
                <a class="item">
                  <i class="settings icon" /> Account Settings
                </a>
              </div>
            </div>
            <div class="right item">
              <div class="ui input">
                <input type="text" placeholder="Search..." />
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
