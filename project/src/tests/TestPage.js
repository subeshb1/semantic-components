import React, { Component } from "react";
// eslint-disable-next-line
import {
  Button,
  Container,
  Divider,
  Flag,
  Header,
  Icon,
  Image,
  Input,
  Label,
  List,
  Loader,
  Reveal,
  Segment
} from "../components";
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
        <div class=" ui bordered image " data-tooltip="d3/d3"
            data-position="bottom center" data-inverted>
          <a
            class=" ui left corner label "
            href="https://github.com/d3/d3"
            target="_blank"
          >
            <i class=" like icon " />
          </a>
          <img
            src="https://avatars1.githubusercontent.com/u/1562726?v=4"
            
            alt="avatar"
          />
        </div>
      </Container>
    );
  }
}
