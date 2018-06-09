import React, { Component } from "react";
import {Container,DropDown,Button} from '../../components';
export default class DropDownPage extends Component {
  render() {
    return (
      <Container>
        <DropDown text="File" open={["focus", "mouseover"]} close={[]}>
          <DropDown.Menu>
            <DropDown
              text="File"
              open={["focus", "mouseover"]}
              close={["mouseout"]}
              nested
            >
              <DropDown.Menu right>
                <div
                  className="item"
                  onClick={e => {
                    e.cancelBubble = true;
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                  tabIndex="0"
                >
                  New
                </div>

                <div className="divider" />
                <div className="item">Download As...</div>
                <DropDown
                  text="File"
                  open={["focus", "mouseover"]}
                  close={["mouseout"]}
                  nested
                >
                  <DropDown.Menu right>
                    <div
                      className="item"
                      onClick={e => {
                        e.cancelBubble = true;
                        e.stopPropagation();
                        e.preventDefault();
                      }}
                      tabIndex="0"
                    >
                      New
                    </div>

                    <div className="divider" />
                    <div className="item">Download As...</div>
                  </DropDown.Menu>
                </DropDown>
              </DropDown.Menu>
            </DropDown>
            <a className="item" tabIndex="0" href="">
              <span className="description">ctrl + o</span>
              Open...
            </a>
            <div className="item">
              <span className="description">ctrl + s</span>
              Save as...
            </div>
            <div className="item">
              <span className="description">ctrl + r</span>
              Rename
            </div>
            <div className="item">Make a copy</div>
            <div className="item">
              <i className="folder icon" />
              Move to folder
            </div>
            <div className="item">
              <i className="trash icon" />
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
                  className="item"
                  onClick={e => {
                    e.cancelBubble = true;
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                  tabIndex="0"
                >
                  New
                </div>

                <div className="divider" />
                <div className="item">Download As...</div>
                <DropDown
                  text="File"
                  open={["focus", "mouseover"]}
                  close={["mouseout"]}
                  nested
                >
                  <DropDown.Menu right>
                    <div
                      className="item"
                      onClick={e => {
                        e.cancelBubble = true;
                        e.stopPropagation();
                        e.preventDefault();
                      }}
                      tabIndex="0"
                    >
                      New
                    </div>

                    <div className="divider" />
                    <div className="item">Download As...</div>
                  </DropDown.Menu>
                </DropDown>
              </DropDown.Menu>
            </DropDown>
          </DropDown.Menu>
        </DropDown>

        <Container>
          <Button>SUbeh</Button>
          <DropDown selection fluid close={["blur"]}>
            <input type="hidden" name="gender" />
            <i className="dropdown icon" />
            <div className="default text">Gender</div>
            <DropDown.Menu>
              <div className="item" data-value="jenny">
                <img className="ui mini avatar image" src="/img/avatar-3.png" 
                alt=""/>
                Jenny Hess
              </div>
              <div className="item" data-value="elliot">
                <img
                  className="ui mini avatar image"
                  src="/images/avatar/small/elliot.jpg"
                  alt=""
                />
                Elliot Fu
              </div>
              <div className="item" data-value="stevie">
                <img
                  className="ui mini avatar image"
                  src="/images/avatar/small/stevie.jpg"
                  alt=""
                />
                Stevie Feliciano
              </div>
              <div className="item" data-value="christian">
                <img
                  className="ui mini avatar image"
                  src="/images/avatar/small/christian.jpg"
                  alt=""
                />
                Christian
              </div>
              <div className="item" data-value="matt">
                <img
                  className="ui mini avatar image"
                  src="/images/avatar/small/matt.jpg"
                  alt=""
                />
                Matt
              </div>
              <div className="item" data-value="justen">
                <img
                  className="ui mini avatar image"
                  src="/images/avatar/small/justen.jpg"
                  alt=""
                />
                Justen Kitsune
              </div>
            </DropDown.Menu>
          </DropDown>

          <DropDown text="File" open={["focus", "mouseover"]} close={[]}>
            <DropDown.Menu>
              <DropDown
                text="File"
                open={["focus", "mouseover"]}
                close={["mouseout"]}
                nested
              >
                <DropDown.Menu>
                  <div
                    className="item"
                    onClick={e => {
                      e.cancelBubble = true;
                      e.stopPropagation();
                      e.preventDefault();
                    }}
                  >
                    New
                  </div>

                  <div className="divider" />
                  <div className="item">Download As...</div>
                  <DropDown
                    text="File"
                    open={["focus", "mouseover"]}
                    close={["mouseout"]}
                    nested
                  >
                    <DropDown.Menu right>
                      <div
                        className="item"
                        onClick={e => {
                          e.cancelBubble = true;
                          e.stopPropagation();
                          e.preventDefault();
                        }}
                      >
                        New
                      </div>

                      <div className="divider" />
                      <div className=" item">Download As...</div>
                    </DropDown.Menu>
                  </DropDown>
                </DropDown.Menu>
              </DropDown>
              <a className="item" href="">
                <span className="description">ctrl + o</span>
                Open...
              </a>
              <div className="item">
                <span className="description">ctrl + s</span>
                Save as...
              </div>
              <div className="item">
                <span className="description">ctrl + r</span>
                Rename
              </div>
              <div className="item">Make a copy</div>
              <div className="item">
                <i className="folder icon" />
                Move to folder
              </div>
              <div className="item">
                <i className="trash icon" />
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
                    className="item"
                    onClick={e => {
                      e.cancelBubble = true;
                      e.stopPropagation();
                      e.preventDefault();
                    }}
                  >
                    New
                  </div>

                  <div className="divider" />
                  <div className="item">Download As...</div>
                  <DropDown
                    text="File"
                    open={["focus", "mouseover"]}
                    close={["mouseout"]}
                    nested
                  >
                    <DropDown.Menu right>
                      <div
                        className="item"
                        onClick={e => {
                          e.cancelBubble = true;
                          e.stopPropagation();
                          e.preventDefault();
                        }}
                      >
                        New
                      </div>

                      <div className="divider" />
                      <div className="item">Download As...</div>
                    </DropDown.Menu>
                  </DropDown>
                </DropDown.Menu>
              </DropDown>
            </DropDown.Menu>
          </DropDown>
        </Container>
      </Container>
    );
  }
}
