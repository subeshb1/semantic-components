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
        <DropDown text="File" open={[""]} close={[]}>
          <DropDown.Menu>
            <DropDown
              text="File"
              open={["focus", "mouseover"]}
              close={["mouseout"]}
              nested
            >
              <DropDown.Menu right>
                <div
                  class="item"
                  onClick={e => {
                    e.cancelBubble = true;
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                  tabIndex="0"
                >
                  New
                </div>

                <div class="divider" />
                <div class="item">Download As...</div>
                <DropDown
                  text="File"
                  open={["focus", "mouseover"]}
                  close={["mouseout"]}
                  nested
                >
                  <DropDown.Menu right>
                    <div
                      class="item"
                      onClick={e => {
                        e.cancelBubble = true;
                        e.stopPropagation();
                        e.preventDefault();
                      }}
                      tabIndex="0"
                    >
                      New
                    </div>

                    <div class="divider" />
                    <div class="item">Download As...</div>
                  </DropDown.Menu>
                </DropDown>
              </DropDown.Menu>
            </DropDown>
            <a class="item" tabIndex="0" href="">
              <span class="description">ctrl + o</span>
              Open...
            </a>
            <div class="item">
              <span class="description">ctrl + s</span>
              Save as...
            </div>
            <div class="item">
              <span class="description">ctrl + r</span>
              Rename
            </div>
            <div class="item">Make a copy</div>
            <div class="item">
              <i class="folder icon" />
              Move to folder
            </div>
            <div class="item">
              <i class="trash icon" />
              Move to trash
            </div>
            <DropDown
              text="File"
              open={["focus", "mouseover"]}
              close={["mouseout"]}
              nested
            >
              <DropDown.Menu left>
                <div
                  class="item"
                  onClick={e => {
                    e.cancelBubble = true;
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                  tabIndex="0"
                >
                  New
                </div>

                <div class="divider" />
                <div class="item">Download As...</div>
                <DropDown
                  text="File"
                  open={["focus", "mouseover"]}
                  close={["mouseout"]}
                  nested
                >
                  <DropDown.Menu right>
                    <div
                      class="item"
                      onClick={e => {
                        e.cancelBubble = true;
                        e.stopPropagation();
                        e.preventDefault();
                      }}
                      tabIndex="0"
                    >
                      New
                    </div>

                    <div class="divider" />
                    <div class="item">Download As...</div>
                  </DropDown.Menu>
                </DropDown>
              </DropDown.Menu>
            </DropDown>
          </DropDown.Menu>
        </DropDown>
      </Container>
    );
  }
}
