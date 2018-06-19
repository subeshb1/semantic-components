import React, { Component } from "react";
import {
  Accordion,
  Container,
  Icon,
  Header,
  Segment,
  Menu
} from "../../components";

export default class AccordionPage extends Component {
  state = { active: false, active2: false, active3: false };
  render() {
    const { active, active2, active3, a1, a2, a3 } = this.state;
    return (
      <Container>
        <Header as="h1">Accordion</Header>
        <Header as="h2">Types</Header>
        <Header>Simple</Header>
        <Accordion>
          <Accordion.Item
            active={active === 1}
            onClick={() => {
              this.setState({ active: active === 1 ? false : 1 });
            }}
          >
            <Accordion.Title>
              <Icon name="dropdown" /> Click Me
            </Accordion.Title>
            <Accordion.Content>I am Dropping!!</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            active={active === 2}
            onClick={() => {
              this.setState({ active: active === 2 ? false : 2 });
            }}
          >
            <Accordion.Title>
              <Icon name="dropdown" /> Click Me
            </Accordion.Title>
            <Accordion.Content>I am Dropping!!</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            active={active === 3}
            onClick={() => {
              this.setState({ active: active === 3 ? false : 3 });
            }}
          >
            <Accordion.Title>
              <Icon name="dropdown" /> Click Me
            </Accordion.Title>
            <Accordion.Content>I am Dropping!!</Accordion.Content>
          </Accordion.Item>
        </Accordion>
        <Header>Styled</Header>
        <Accordion styled>
          <Accordion.Item
            active={active === 4}
            onClick={() => {
              this.setState({ active: active === 4 ? false : 4 });
            }}
          >
            <Accordion.Title>
              <Icon name="dropdown" /> Click Me
            </Accordion.Title>
            <Accordion.Content>I am Dropping!!</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            active={active === 5}
            onClick={() => {
              this.setState({ active: active === 5 ? false : 5 });
            }}
          >
            <Accordion.Title>
              <Icon name="dropdown" /> Click Me
            </Accordion.Title>
            <Accordion.Content>I am Dropping!!</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            active={active === 6}
            onClick={() => {
              this.setState({ active: active === 6 ? false : 6 });
            }}
          >
            <Accordion.Title>
              <Icon name="dropdown" /> Click Me
            </Accordion.Title>
            <Accordion.Content>I am Dropping!!</Accordion.Content>
          </Accordion.Item>
        </Accordion>
        <Header as="h2">Variations</Header>
        <Header>Fluid</Header>
        <Accordion styled fluid>
          <Accordion.Item
            active={active === 7}
            onClick={() => {
              this.setState({ active: active === 7 ? false : 7 });
            }}
          >
            <Accordion.Title>
              <Icon name="dropdown" /> Click Me
            </Accordion.Title>
            <Accordion.Content>I am Dropping!!</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            active={active === 8}
            onClick={() => {
              this.setState({ active: active === 8 ? false : 8 });
            }}
          >
            <Accordion.Title>
              <Icon name="dropdown" /> Click Me
            </Accordion.Title>
            <Accordion.Content>I am Dropping!!</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            active={active === 9}
            onClick={() => {
              this.setState({ active: active === 9 ? false : 9 });
            }}
          >
            <Accordion.Title>
              <Icon name="dropdown" /> Click Me
            </Accordion.Title>
            <Accordion.Content>I am Dropping!!</Accordion.Content>
          </Accordion.Item>
        </Accordion>
        <Header>Inverted</Header>
        <Segment inverted>
          <Accordion inverted>
            <Accordion.Item
              active={active === 10}
              onClick={() => {
                this.setState({ active: active === 10 ? false : 10 });
              }}
            >
              <Accordion.Title>
                <Icon name="dropdown" /> Click Me
              </Accordion.Title>
              <Accordion.Content>I am Dropping!!</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item
              active={active === 11}
              onClick={() => {
                this.setState({ active: active === 11 ? false : 11 });
              }}
            >
              <Accordion.Title>
                <Icon name="dropdown" /> Click Me
              </Accordion.Title>
              <Accordion.Content>I am Dropping!!</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item
              active={active === 12}
              onClick={() => {
                this.setState({ active: active === 12 ? false : 12 });
              }}
            >
              <Accordion.Title>
                <Icon name="dropdown" /> Click Me
              </Accordion.Title>
              <Accordion.Content>
                <p>
                  I am Dropping!! Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Commodi iusto necessitatibus officia nam
                  autem aliquam sed porro iure ullam, alias totam quibusdam
                  explicabo magni quas vel pariatur nostrum nisi repellat! Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Commodi
                  iusto necessitatibus officia nam autem aliquam sed porro iure
                  ullam, alias totam quibusdam explicabo magni quas vel pariatur
                  nostrum nisi repellat! Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Commodi iusto necessitatibus officia nam
                  autem aliquam sed porro iure ullam, alias totam quibusdam
                  explicabo magni quas vel pariatur nostrum nisi repellat!
                </p>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </Segment>

        <Accordion>
          <Accordion.Item
            active={active === 13}
            onClick={() => {
              this.setState({ active: active === 13 ? false : 13 });
            }}
          >
            <Accordion.Title>
              <Segment>
                <Icon name="dropdown" /> Click Me
              </Segment>
            </Accordion.Title>
            <Accordion.Content>
              <Container>
                <Segment state="loading">I am Dropping!!</Segment>
                <Segment state="loading">I am Dropping!!</Segment>
              </Container>
              {/* {"."} */}
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            active={active === 14}
            onClick={() => {
              this.setState({ active: active === 14 ? false : 14 });
            }}
          >
            <Accordion.Title>
              <Icon name="dropdown" /> Click Me
            </Accordion.Title>
            <Accordion.Content>I am Dropping!!</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            active={active === 15}
            onClick={() => {
              this.setState({ active: active === 15 ? false : 15 });
            }}
          >
            <Accordion.Title>
              <Icon name="dropdown" /> Click Me
            </Accordion.Title>
            <Accordion.Content>
              <p>
                I am Dropping!! Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Commodi iusto necessitatibus officia nam autem
                aliquam sed porro iure ullam, alias totam quibusdam explicabo
                magni quas vel pariatur nostrum nisi repellat! Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Commodi iusto
                necessitatibus officia nam autem aliquam sed porro iure ullam,
                alias totam quibusdam explicabo magni quas vel pariatur nostrum
                nisi repellat! Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Commodi iusto necessitatibus officia nam autem
                aliquam sed porro iure ullam, alias totam quibusdam explicabo
                magni quas vel pariatur nostrum nisi repellat! .
              </p>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
        <Header>Nested</Header>
        <Accordion styled>
          <Accordion.Item
            active={active === 4}
            onClick={() => {
              this.setState({ active: active === 4 ? false : 4 });
            }}
          >
            <Accordion.Title>
              <Icon name="dropdown" /> Click Me
            </Accordion.Title>
            <Accordion.Content>
              {" "}
              <Accordion styled>
                <Accordion.Item
                  active={active2 === 4}
                  onClick={() => {
                    this.setState({ active2: active2 === 4 ? false : 4 });
                  }}
                >
                  <Accordion.Title>
                    <Icon name="dropdown" /> Click Me
                  </Accordion.Title>
                  <Accordion.Content>
                    <Accordion sub>
                      <Accordion.Item
                        active={active3 === 4}
                        onClick={() => {
                          this.setState({ active3: active3 === 4 ? false : 4 });
                        }}
                      >
                        <Accordion.Title>
                          <Icon name="dropdown" /> Click Me
                        </Accordion.Title>
                        <Accordion.Content>
                          I am Dropping!! Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Laudantium, sunt, a, temporibus
                          accusamus voluptatum aperiam doloribus earum ratione
                          perspiciatis impedit delectus iure? Sequi sit facilis
                          magnam veritatis doloribus.
                        </Accordion.Content>
                      </Accordion.Item>
                      <Accordion.Item
                        active={active3 === 5}
                        onClick={() => {
                          this.setState({ active3: active3 === 5 ? false : 5 });
                        }}
                      >
                        <Accordion.Title>
                          <Icon name="dropdown" /> Click Me
                        </Accordion.Title>
                        <Accordion.Content>I am Dropping!!</Accordion.Content>
                      </Accordion.Item>
                      <Accordion.Item
                        active={active3 === 6}
                        onClick={() => {
                          this.setState({ active3: active3 === 6 ? false : 6 });
                        }}
                      >
                        <Accordion.Title>
                          <Icon name="dropdown" /> Click Me
                        </Accordion.Title>
                        <Accordion.Content>I am Dropping!!</Accordion.Content>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item
                  active={active2 === 5}
                  onClick={() => {
                    this.setState({ active2: active2 === 5 ? false : 5 });
                  }}
                >
                  <Accordion.Title>
                    <Icon name="dropdown" /> Click Me
                  </Accordion.Title>
                  <Accordion.Content>I am Dropping!!</Accordion.Content>
                </Accordion.Item>
                <Accordion.Item
                  active={active2 === 6}
                  onClick={() => {
                    this.setState({ active2: active2 === 6 ? false : 6 });
                  }}
                >
                  <Accordion.Title>
                    <Icon name="dropdown" /> Click Me
                  </Accordion.Title>
                  <Accordion.Content>I am Dropping!!</Accordion.Content>
                </Accordion.Item>
              </Accordion>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            active={active === 5}
            onClick={() => {
              this.setState({ active: active === 5 ? false : 5 });
            }}
          >
            <Accordion.Title>
              <Icon name="dropdown" /> Click Me
            </Accordion.Title>
            <Accordion.Content>I am Dropping!!</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            active={active === 6}
            onClick={() => {
              this.setState({ active: active === 6 ? false : 6 });
            }}
          >
            <Accordion.Title>
              <Icon name="dropdown" /> Click Me
            </Accordion.Title>
            <Accordion.Content>I am Dropping!!</Accordion.Content>
          </Accordion.Item>
        </Accordion>
        <Accordion styled>
          <Accordion.Item
            active={a1}
            onClick={() => {
              this.setState({ a1: !a1 });
            }}
          >
            <Accordion.Title>
              <Icon name="dropdown" /> Click Me
            </Accordion.Title>
            <Accordion.Content>I am Dropping!!</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            active={a2}
            onClick={() => {
              this.setState({ a2: !a2 });
            }}
          >
            <Accordion.Title>
              <Icon name="dropdown" /> Click Me
            </Accordion.Title>
            <Accordion.Content>I am Dropping!!</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            active={a3}
            onClick={() => {
              this.setState({ a3: !a3 });
            }}
          >
            <Accordion.Title>
              <Icon name="dropdown" /> Click Me
            </Accordion.Title>
            <Accordion.Content>I am Dropping!!</Accordion.Content>
          </Accordion.Item>
        </Accordion>
        <Accordion menu>
          <Menu.Item as="div">
            <Accordion.Item
              active={active === 100}
              onClick={() => {
                this.setState({ active: active === 100 ? false : 100 });
              }}
            >
              <Accordion.Title as="a">
                <Icon name="dropdown" /> Click Me
              </Accordion.Title>
              <Accordion.Content>
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
              </Accordion.Content>
            </Accordion.Item>
          </Menu.Item>
          <Menu.Item as="div">
            <Accordion.Item
              active={active === 101}
              onClick={() => {
                this.setState({ active: active === 101 ? false : 101 });
              }}
            >
              <Accordion.Title as="a">
                <Icon name="dropdown" /> Click Me
              </Accordion.Title>
              <Accordion.Content>
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
              </Accordion.Content>
            </Accordion.Item>
          </Menu.Item>
          <Menu.Item as="div">
            <Accordion.Item
              active={active === 102}
              onClick={() => {
                this.setState({ active: active === 102 ? false : 102 });
              }}
            >
              <Accordion.Title as="a">
                <Icon name="dropdown" /> Click Me
              </Accordion.Title>
              <Accordion.Content>
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
              </Accordion.Content>
            </Accordion.Item>

          </Menu.Item>
          </Accordion>
      </Container>
    );
  }
}
