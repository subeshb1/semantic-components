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
    data: ["Subesh", "Bhanfa"]
  };
  anima = undefined;
  ref = React.createRef();
  render() {
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
          <Segment color="grey">Subesh</Segment>
        </Transition2>
      </Container>
    );
  }
}
