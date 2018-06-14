import React, { Component } from "react";

// eslint-disable-next-line
import {
  // eslint-disable-next-line
  Button,
  // eslint-disable-next-line
  Container,
  // eslint-disable-next-line
  Image,
  // eslint-disable-next-line
  Segment,
  Transition2
} from "../../components";

export default class TestPage extends Component {
  state = {
    toggle: true,
    value: "",
    animate: false,
    data: ["Subesh", "Bhanfa"],
    remove: false
  };
  render() {
    const { animate, remove } = this.state;
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
            overflow: "hidden",
            width: "100px",
            height: "100px",
            display: "block"
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

        <Transition2
          onRemove={[
            {
              style: {
                opacity: 0,
                transition: "all 1s ease"
              }
            }
          ]}
          remove={remove}
        >
          <Button onClick={() => this.setState({ remove: true })}>
            Click Me and I'll Disappear.
          </Button>
        </Transition2>
        <Transition2
          mapEvents={[
            {
              event: "click",
              transition: [
                {
                  style: {
                    transform: "scale(1.2)",
                    transition: "all 0.1s ease",
                    background:
                      "linear-gradient(to right, rgba(222,48,17,1) 0%, rgba(250,76,53,1) 10%, rgba(248,81,59,1) 13%, rgba(240,102,84,1) 25%, rgba(230,106,92,1) 36%, rgba(235,20,0,1) 57%, rgba(235,20,0,1) 100%)"
                  }
                },
                {
                  style: {
                    transform: "scale(1)",
                    transition: "all 0.1s ease",
                    background:
                      "linear-gradient(to right, rgba(222,48,17,1) 0%, rgba(233,59,32,1) 13%, rgba(250,76,53,1) 32%, rgba(240,102,84,1) 51%, rgba(230,106,92,1) 71%, rgba(235,20,0,1) 100%)"
                  },

                  delay: 100,
                  duration: 200
                }
              ]
            }
          ]}
        >
          <Button>Click Me and I'll Grow.</Button>
        </Transition2>
        <Transition2
          mapEvents={[
            {
              event: "click",
              transition: [
                {
                  style: {
                    transform: "scale(1.2)",
                    background:
                      "linear-gradient(to right, rgba(222,48,17,1) 0%, rgba(250,76,53,1) 10%, rgba(248,81,59,1) 13%, rgba(240,102,84,1) 25%, rgba(230,106,92,1) 36%, rgba(235,20,0,1) 57%, rgba(235,20,0,1) 100%)"
                  },
                  duration: 100
                },
                {
                  style: {
                    transform: "scale(1)",
                    background:
                      "linear-gradient(to right, rgba(222,48,17,1) 0%, rgba(233,59,32,1) 13%, rgba(250,76,53,1) 32%, rgba(240,102,84,1) 51%, rgba(230,106,92,1) 71%, rgba(235,20,0,1) 100%)"
                  },
                  duration: 200
                }
              ]
            }
          ]}
          // remove={remove}
        >
          <Button>I work he Same Way</Button>
        </Transition2>
        <Segment
          style={{
            position: "relative",
            overflow: "hidden"
          }}
        >
          <Transition2
            mapEvents={[
              {
                event: "click",
                transition: [
                  {
                    style: {
                      transform: "translateY(-100%)"
                    }
                  },
                  {
                    style: {
                      transform: "translateY(0%)"
                    },
                    delay: 100,
                    duration: 400
                  }
                ]
              }
            ]}
          >
            <Segment inverted color="red" extra="text container">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              corrupti id, voluptatum, perferendis nobis eligendi velit dolorum
              optio nemo eius aperiam beatae pariatur exercitationem ut
              excepturi error architecto sequi consequatur. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Et nihil reprehenderit
              praesentium recusandae nobis. Nesciunt illo sit, tempora
              recusandae iure doloribus, nisi similique, aliquam quas ex unde in
              voluptate numquam.
            </Segment>
          </Transition2>
        </Segment>
      </Container>
    );
  }
}
