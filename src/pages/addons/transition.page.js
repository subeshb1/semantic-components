import React, { Component } from "react";

import * as UI from "../../components";
import { Transition, Display } from "../../components";

import u4 from "uniqid";
export default class TransitionPage extends Component {
  state = {
    unMount: false,
    remove: true,
    data: [],
    value: ""
  };
  remove(i) {
    this.setState(({ data }) => ({ data: data.filter((_, ind) => ind !== i) }));
  }
  render() {
    const { unMount, remove, data, value } = this.state;
    return (
      <UI.Container>
        <UI.Header as="h1">Transition</UI.Header>
        <UI.Header as="h2">Combined</UI.Header>
        <UI.Segment color="green">
          <UI.Header>Insert Items</UI.Header>
          <UI.Input
            placeholder="Add.."
            action
            value={value}
            onChange={e => this.setState({ value: e.target.value })}
          >
            <Transition
              trigger={[
                {
                  event: "click",
                  start: {
                    transform: "scale(1.2)",
                    transition: "all 0.2s ease"
                  },
                  end: {
                    transition: "all 0.1s ease",
                    transform: ""
                  },
                  delay: 200
                }
              ]}
            >
              <UI.Button
                text="CLick Me"
                color="teal"
                onClick={() => {
                  if (this.state.value.trim())
                    this.setState(({ data, value }) => ({
                      value: "",
                      data: [...data, { key: u4(), value }]
                    }));
                }}
              />
            </Transition>
          </UI.Input>
          <UI.List>
            {data.map((val, i) => {
              return (
                <Transition
                  onMount={{
                    start: {
                      opacity: 0,
                      transition: "all 0.2s ease"
                    },
                    end: {
                      transition: "all 0.9s ease",
                      opacity: 1
                    },
                    delay: 200
                  }}
                  trigger={[
                    {
                      event: 1,
                      start: {
                        opacity: 1,
                        transition: "all s ease"
                      },
                      end: {
                        opacity: 0,
                        transition: "all 0.5s ease"
                      },

                      delay: 1
                    }
                  ]}
                  key={val.key}
                >
                  <UI.List.Item
                    onClick={() => setTimeout(() => this.remove(i), 300)}
                  >
                    {val.value}
                  </UI.List.Item>
                </Transition>
              );
            })}
          </UI.List>
        </UI.Segment>
        <UI.Header>On Mount</UI.Header>
        <Transition
          onMount={{
            start: {
              transform: "translateY(-100%)",
              transition: "all 1s ease"
            },
            end: {
              transition: "all 1s ease",
              transform: ""
            }
          }}
        >
          <UI.Segment color="red" compact>
            Hello
          </UI.Segment>
        </Transition>
        <UI.Header>On UnMount </UI.Header>
        <Display show={!unMount}>
          <Transition
            onUnMount={{
              start: {
                transform: ""
              },
              end: {
                transition: "all 1s ease",
                transform: "translateY(-100%)",
                opacity: 0
              }
            }}
            remove={remove}
          >
            <UI.Segment color="red" compact>
              Hello
            </UI.Segment>
          </Transition>
        </Display>
        <UI.Header>Mount and UnMount</UI.Header>
        <Display show={!unMount}>
          <Transition
            onUnMount={{
              start: {
                transform: ""
              },
              end: {
                transition: "all 1s ease",
                transform: "translateY(-100%)",
                opacity: 0
              }
            }}
            onMount={{
              start: {
                transform: "translateY(-100%)"
              },
              end: {
                transition: "all 0.5s ease",
                transform: ""
              }
            }}
            remove={remove}
          >
            <UI.Segment color="red" compact>
              Hello
            </UI.Segment>
          </Transition>
        </Display>
        <UI.Button
          text="UnMount"
          color="negative"
          onClick={() =>
            this.setState({ remove: true }, () =>
              setTimeout(() => {
                this.setState(({ unMount }) => ({
                  unMount: !unMount
                }));
              }, 1003)
            )
          }
        />

        <UI.Header as="h2">On Events</UI.Header>
        <UI.Header>On Hover</UI.Header>
        <Transition
          trigger={[
            {
              event: "mouseover",
              start: {
                transform: "scale(1.2)",
                transition: "all 0.1s ease"
              },
              end: {}
            },
            {
              event: "mouseout",
              start: {
                transition: "all 0.2s ease",
                transform: ""
              },
              end: {
                transition: ""
              },
              delay: 1000
            }
          ]}
        >
          <UI.Segment color="red" compact>
            Hello
          </UI.Segment>
        </Transition>
        <UI.Header>On click</UI.Header>
        <Transition
          trigger={[
            {
              event: "click",
              start: {
                opacity: 0.1,
                transition: "all 0.5s ease"
              },
              end: {},
              delay: 100
            }
          ]}
        >
          <UI.Segment color="red" compact inverted>
            Hello
          </UI.Segment>
        </Transition>
      </UI.Container>
    );
  }
}
