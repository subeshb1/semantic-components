import React, { Component } from "react";
// eslint-disable-next-line
import {
  // eslint-disable-next-line
  Container,
  // eslint-disable-next-line
  Segment,
  Button,
  Menu,
  Transition2
} from "../../components";
import { NavLink } from "react-router-dom";

class TestPage extends Component {
  state = {
    active: true
  };
  render() {
    const { active } = this.state;
    const propsM = {
      vertical: true,
      text: false,
      count: false,
      secondary: true,
      sub: false,
      right: false,
      pointing: true,
      tabular: false,
      pagination: false,
      fixed: true,
      attached: true,
      color: "black",
      inverted: true,
      stackable: true,
      borderless: false,
      size: "large",
      fluid: false,
      compact: false,
      icon: false,
      labeled: false,
      container: false,
      style: {
        background: "black"
      },
      as: "div",
      extra: ""
    };
    return (
      <Container>
        <Button
          toggle
          active={active}
          onClick={() => this.setState({ active: !active })}
          text="Toggle"
          float="right"
        />

        <Menu secondary inverted style={{ background: "rebeccapurple" }}>
          <Menu.Item>Hello</Menu.Item>
          <Menu.Item right>Hello</Menu.Item>
        </Menu>
        <Menu
          vertical={false}
          text={false}
          count={false}
          secondary={false}
          sub={false}
          right={false}
          pointing={false}
          tabular={false}
          pagination={false}
          fixed={false}
          attached={false}
          color={false}
          inverted={false}
          stackable={false}
          borderless={false}
          size={false}
          fluid={false}
          compact={false}
          icon={false}
          labeled={false}
          container={false}
          style={{ background: "red" }}
        >
          <Menu.Item active>Item</Menu.Item>
          <Menu.Item>Item</Menu.Item>
          <Menu.Item>Item</Menu.Item>
          <Menu.Item>Item</Menu.Item>
          <Menu.Item>Item</Menu.Item>
        </Menu>
        <Transition2
          transition={[
            {
              style: {
                transform: ""
              },
              duration: 200,
              property: "transform"
            }
          ]}
          onRemove={[
            {
              style: {
                transform: "translate(-100%)"
              },
              duration: 200,
              property: "transform"
            }
          ]}
          animate={active}
          remove={!active}
        >
          <Menu {...propsM}>
            <Menu.Item as={NavLink} to="/test/test/1">
              Item
            </Menu.Item>
            <Menu.Item as={NavLink} to="/test/test/2">
              <Menu sub>
                <Menu.Item as={NavLink} to="/test/test/2/1">
                  Item
                </Menu.Item>
                <Menu.Item as={NavLink} to="/test/test/2/2">
                  Item
                </Menu.Item>
                <Menu.Item as={NavLink} to="/test/test/2/3">
                  Item
                </Menu.Item>
              </Menu>
            </Menu.Item>
            <Menu.Item as={NavLink} to="/test/test/3">
              Item
            </Menu.Item>
            <Menu.Item as={NavLink} to="/test/test/4">
              Item
            </Menu.Item>
            <Menu.Item as={NavLink} to="/test/test/5">
              Item
            </Menu.Item>
            <Menu.Item>
              <div class="ui simple dropdown item">
                Dropdown
                <i class="dropdown icon" />
                <div class="menu">
                  <div class="item">Choice 1</div>
                  <div class="item">Choice 2</div>
                  <div class="item">Choice 3</div>
                </div>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div class="ui vertical accordion menu">
                <div class="item">
                  <a class="active title">
                    <i class="dropdown icon" />
                    Size
                  </a>
                  <div class="active content">
                    <div class="ui form">
                      <div class="grouped fields">
                        <div class="field">
                          <div class="ui radio checkbox">
                            <input type="radio" name="size" value="small" />
                            <label>Small</label>
                          </div>
                        </div>
                        <div class="field">
                          <div class="ui radio checkbox">
                            <input type="radio" name="size" value="medium" />
                            <label>Medium</label>
                          </div>
                        </div>
                        <div class="field">
                          <div class="ui radio checkbox">
                            <input type="radio" name="size" value="large" />
                            <label>Large</label>
                          </div>
                        </div>
                        <div class="field">
                          <div class="ui radio checkbox">
                            <input type="radio" name="size" value="x-large" />
                            <label>X-Large</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <a class="title">
                    <i class="dropdown icon" />
                    Colors
                  </a>
                  <div class="content">
                    <div class="ui form">
                      <div class="grouped fields">
                        <div class="field">
                          <div class="ui checkbox">
                            <input type="checkbox" name="small" />
                            <label>Red</label>
                          </div>
                        </div>
                        <div class="field">
                          <div class="ui checkbox">
                            <input type="checkbox" name="medium" />
                            <label>Orange</label>
                          </div>
                        </div>
                        <div class="field">
                          <div class="ui checkbox">
                            <input type="checkbox" name="large" />
                            <label>Green</label>
                          </div>
                        </div>
                        <div class="field">
                          <div class="ui checkbox">
                            <input type="checkbox" name="x-large" />
                            <label>Blue</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Menu.Item>
            <div class="item">
              <a class="active title">
                <i class="dropdown icon" />
                Size
              </a>
              <div class="active content">
                <div class="ui form">
                  <div class="grouped fields">
                    <div class="field">
                      <div class="ui radio checkbox">
                        <input type="radio" name="size" value="small" />
                        <label>Small</label>
                      </div>
                    </div>
                    <div class="field">
                      <div class="ui radio checkbox">
                        <input type="radio" name="size" value="medium" />
                        <label>Medium</label>
                      </div>
                    </div>
                    <div class="field">
                      <div class="ui radio checkbox">
                        <input type="radio" name="size" value="large" />
                        <label>Large</label>
                      </div>
                    </div>
                    <div class="field">
                      <div class="ui radio checkbox">
                        <input type="radio" name="size" value="x-large" />
                        <label>X-Large</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <a class="title">
                <i class="dropdown icon" />
                Colors
              </a>
              <div class="content">
                <div class="ui form">
                  <div class="grouped fields">
                    <div class="field">
                      <div class="ui checkbox">
                        <input type="checkbox" name="small" />
                        <label>Red</label>
                      </div>
                    </div>
                    <div class="field">
                      <div class="ui checkbox">
                        <input type="checkbox" name="medium" />
                        <label>Orange</label>
                      </div>
                    </div>
                    <div class="field">
                      <div class="ui checkbox">
                        <input type="checkbox" name="large" />
                        <label>Green</label>
                      </div>
                    </div>
                    <div class="field">
                      <div class="ui checkbox">
                        <input type="checkbox" name="x-large" />
                        <label>Blue</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                <div class="ui inverted accordion">
                  <div class="title">
                    <i class="dropdown icon" />
                    What is a dog?
                  </div>
                  <div class="content">
                    <p class="transition hidden">
                      A dog is a type of domesticated animal. Known for its
                      loyalty and faithfulness, it can be found as a welcome
                      guest in many households across the world.
                    </p>
                  </div>
                  <div class="title">
                    <i class="dropdown icon" />
                    What kinds of dogs are there?
                  </div>
                  <div class="content">
                    <p>
                      There are many breeds of dogs. Each breed varies in size
                      and temperament. Owners often select a breed of dog that
                      they find to be compatible with their own lifestyle and
                      desires from a companion.
                    </p>
                  </div>
                  <div class="title">
                    <i class="dropdown icon" />
                    How do you acquire a dog?
                  </div>
                  <div class="content">
                    <p>
                      Three common ways for a prospective owner to acquire a dog
                      is from pet shops, private owners, or shelters.
                    </p>
                    <p>
                      A pet shop may be the most convenient way to buy a dog.
                      Buying a dog from a private owner allows you to assess the
                      pedigree and upbringing of your dog before choosing to
                      take it home. Lastly, finding your dog from a shelter,
                      helps give a good home to a dog who may not find one so
                      readily.
                    </p>
                  </div>
                </div>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>1</Menu.Item>
          </Menu>
          <Menu.Item>1</Menu.Item>
        </Transition2>
        <div class="ui bottom attached segment">
          <div class="ui sidebar vertical left menu borderless sidemenu inverted grey">
            <a class="item logo">
              <img src="./assets/icon.png" />
            </a>
            <div class="ui accordion inverted">
              <a class="title item">
                <i class="home titleIcon icon" /> Dashboard 1<i class="dropdown icon" />
              </a>
              <div class="content">
                <a class="item" href="index.html">
                  Dashboard v1
                </a>
              </div>
              <a class="title item">
                <i class="home titleIcon icon" /> Option{" "}
                <i class="dropdown icon" />
              </a>
              <div class="content">
                <a class="item" href="index.html">
                  Dashboard v1
                </a>
              </div>
            </div>
          </div>
          <div class="pusher">
            <div class="ui top attached menu">
              <a class="item" id="toggle">
                <i class="sidebar icon" />
              </a>
            </div>
            <div class="ui basic segment">
              <router-view />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default TestPage;
