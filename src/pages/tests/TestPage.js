import React, { Component } from "react";
// import { NavLink } from "react-router-dom";

// eslint-disable-next-line
import {
  // eslint-disable-next-line
  Button,
  // eslint-disable-next-line
  Container,
  // eslint-disable-next-line
  Divider,
  // eslint-disable-next-line
  Flag,
  // eslint-disable-next-line
  Header,
  // eslint-disable-next-line
  Icon,
  // eslint-disable-next-line
  Image,
  // eslint-disable-next-line
  Input,
  // eslint-disable-next-line
  Label,
  // eslint-disable-next-line
  List,
  // eslint-disable-next-line
  Loader,
  // eslint-disable-next-line
  Reveal,
  // eslint-disable-next-line
  Segment,
  // eslint-disable-next-line
  Display,
  // eslint-disable-next-line
  Menu,
  Transition2
} from "../../components";
// eslint-disable-next-line
import { colorDef } from "../../lib/react-extras";

export default class TestPage extends Component {
  state = {
    toggle: true,
    value: "",
    animate: false,
    data: ["Subesh", "Bhanfa"]
  };
  anima = undefined;
  ref = React.createRef();
  render() {
    const { animate } = this.state;
    return (
      <Container>
        <Transition2
          mapEvents={[
            {
              event: "click",
              transition: [
                {
                  style: {
                    transform: "translateY(-100%)",
                    transition: "all 1s ease"
                  },
                  duration: 1000,
                  delay: 1000
                },
                {
                  style: {
                    transform: "translate(-100%,-100%)",
                    transition: "all 1s ease"
                  },
                  duration: 1000
                },
                {
                  style: {
                    transform: "translate(-100%,0%)",
                    transition: "all 1s ease"
                  },
                  duration: 1000
                },
                {
                  style: {
                    transform: "translate(0%,0%)",
                    transition: "all 1s ease"
                  },
                  duration: 1000
                },
                {
                  style: {
                    transform: "scale(2)",
                    transition: "all 1s ease"
                  },
                  duration: 1000
                },
                {
                  style: {
                    transform: "scale(-1)",
                    transition: "all 1s ease"
                  },
                  duration: 1000
                },
                {
                  style: {
                    transform: "scale(1)",
                    transition: "all 1s ease"
                  },
                  duration: 1000
                },
                {
                  default: true
                }
              ]
            },
            {
              event: "mouseover",
              transition: [
                {
                  style: {
                    transform: "scale(2)",
                    transition: "all 1s ease"
                  }
                }
              ]
            },
            {
              event: "mouseout",
              transition: [
                {
                  style: {
                    transform: "scale(1)",
                    transition: "all 1s ease"
                  }
                }
              ]
            }
          ]}
        >
          <Segment color="grey" compact float="right">
            Subesh
          </Segment>
        </Transition2>
        <Transition2
          onEnter={[
            {
              style: {
                transform: "translateY(-100%)",
                opacity: 0
              }
            },
            {
              style: {
                transition: "all 1s ease",
                transform: "",
                opacity: 1
              },
              delay: 1000,
              duration: 1000
            }
          ]}
          mapEvents={[
            {
              event: "mouseover",
              transition: [
                {
                  style: {
                    transform: "rotate(20deg)",
                    transition: "all 0.2s ease"
                  }
                },
                {
                  style: {
                    transition: "all 0.2s ease",
                    transform: "rotate(-20deg)"
                  },
                  delay: 200,
                  duration: 200
                },
                {
                  style: {
                    transition: "all 0.2s ease",
                    transform: ""
                  }
                }
              ]
            }
          ]}
        >
          <Segment color="blue" compact>
            Subesh
          </Segment>
        </Transition2>
        <Transition2
          mapEvents={[
            {
              event: "mouseover",
              transition: [
                {
                  style: {
                    transform: "scale(1,0.5)",
                    transition: "all 0.5s ease-in"
                  }
                },
                {
                  style: {
                    transition: "all 0.2s ease",
                    transform: "scale(1,1.2)"
                  },
                  delay: 500,
                  duration: 200
                },
                {
                  style: {
                    transition: "all 0.2s ease",
                    transform: "scale(1,0.75)"
                  },
                  duration: 200
                },
                {
                  style: {
                    transition: "all 0.2s ease",
                    transform: ""
                  }
                }
              ]
            }
          ]}
        >
          <Image src="/img/5.png" size="small" />
        </Transition2>
        <div
          style={{
            // overflow: "hidden",
            // width: "500px",
            // height: "500px"
          }}
        >
          <Transition2
            mapEvents={[
              {
                event: "click",
                transition: [
                  {
                    style: {
                      transform: "translateX(-100%)",
                      transition: "all 0.9s ease",
                      opacity: 1
                    }
                  }
                ]
              }
            ]}
          >
            <Image
              src="/img/avatar1.png"
              wrapped
              fluid
              onClick={() => this.setState({ animate: true })}
            />
          </Transition2>
          <Transition2
            mapEvents={[
              {
                event: "click",
                transition: [
                  {
                    style: {
                      transform: "translateX(-200%)",
                      transition: "all 0.9s ease"
                    }
                  }
                ]
              }
            ]}
            transition={[
              {
                style: {
                  transform: "translateX(-100%)",
                  transition: "all 0.9s ease"
                }
              }
            ]}
            animate={animate}
          >
            <Image src="/img/avatar2.png" wrapped fluid />
          </Transition2>
        </div>
      </Container>
    );
  }
}
