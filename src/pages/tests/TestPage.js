import React, { Component } from "react";
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
  Segment
} from "../../components";
// eslint-disable-next-line
import { color } from "../../lib/react-extras";
export default class TestPage extends Component {
  render() {
    return (
      <Container>
        <div class="ui grid">
          <div class="two  row">
            <div class="column">
              <div class="ui segment">Large Screen2</div>
            </div>
            <div class="column">
              <div class="ui segment">Large Screen1</div>
            </div>
          </div>
          <div class="two column large screen only row">
            <div class="column">
              <div class="ui segment">Widescreen</div>
            </div>
            <div class="column">
              <div class="ui segment">Widescreen</div>
            </div>
          </div>
          <div class="two column mobile only row">
            <div class="column">
              <div class="ui segment">Mobile</div>
            </div>
            <div class="column">
              <div class="ui segment">Mobile</div>
            </div>
          </div>
          <div class="three column row">
            <div class="computer only column">
              <div class="ui segment">Computer</div>
            </div>
            <div class="tablet mobile only column">
              <div class="ui segment">Tablet and Mobile</div>
            </div>
            <div class="column">
              <div class="ui segment">All Sizes</div>
            </div>
            <div class="column">
              <div class="ui segment">All Sizes</div>
            </div>
          </div>
          <div class="four column computer only row">
            <div class="column">
              <div class="ui segment">Computer</div>
            </div>
            <div class="column">
              <div class="ui segment">Computer</div>
            </div>
            <div class="column">
              <div class="ui segment">Computer</div>
            </div>
            <div class="column">
              <div class="ui segment">Computer</div>
            </div>
          </div>
          <div class="three column tablet only row">
            <div class="column">
              <div class="ui segment">Tablet</div>
            </div>
            <div class="column">
              <div class="ui segment">Tablet</div>
            </div>
            <div class="column">
              <div class="ui segment">Tablet</div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
