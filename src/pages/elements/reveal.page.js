import React, { Component } from "react";
// eslint-disable-next-line
import {Button,Container,Divider,Flag,Header,Icon,Image,Input,Label,List,Loader,Reveal,Segment} from '../../components';
export default class componentName extends Component {
  state = {
    active: false
  };
  render() {
    return (
      <Container>
        <Header as="h1">Reveal</Header>
        <Header as="h2">Types</Header>
        <Header>Fade</Header>
        <Reveal>
          <Reveal.Visible>
            <Image src="/img/avatar1.png" size="small" alt="Avatar" />
          </Reveal.Visible>
          <Reveal.Hidden>
            <Image src="/img/avatar2.png" size="small" alt="Avatar" />
          </Reveal.Hidden>
        </Reveal>
        <Header>Move</Header>
        <Reveal animation="move">
          <Reveal.Visible>
            <Image src="/img/avatar1.png" size="small" alt="Avatar" />
          </Reveal.Visible>
          <Reveal.Hidden>
            <Image src="/img/avatar2.png" size="small" alt="Avatar" />
          </Reveal.Hidden>
        </Reveal>
        <Reveal animation="move right">
          <Reveal.Visible>
            <Image src="/img/avatar1.png" size="small" alt="Avatar" />
          </Reveal.Visible>
          <Reveal.Hidden>
            <Image src="/img/avatar2.png" size="small" alt="Avatar" />
          </Reveal.Hidden>
        </Reveal>
        <Reveal animation="move up">
          <Reveal.Visible>
            <Image src="/img/avatar1.png" size="small" alt="Avatar" />
          </Reveal.Visible>
          <Reveal.Hidden>
            <Image src="/img/avatar2.png" size="small" alt="Avatar" />
          </Reveal.Hidden>
        </Reveal>
        <Reveal animation="move down">
          <Reveal.Visible>
            <Image src="/img/avatar1.png" size="small" alt="Avatar" />
          </Reveal.Visible>
          <Reveal.Hidden>
            <Image src="/img/avatar2.png" size="small" alt="Avatar" />
          </Reveal.Hidden>
        </Reveal>
        <Header>Rotate</Header>
        <Reveal animation="rotate">
          <Reveal.Visible>
            <Image src="/img/avatar1.png" size="small" alt="Avatar" />
          </Reveal.Visible>
          <Reveal.Hidden>
            <Image src="/img/avatar2.png" size="small" alt="Avatar" />
          </Reveal.Hidden>
        </Reveal>
        <Reveal animation="rotate left">
          <Reveal.Visible>
            <Image src="/img/avatar1.png" size="small" alt="Avatar" />
          </Reveal.Visible>
          <Reveal.Hidden>
            <Image src="/img/avatar2.png" size="small" alt="Avatar" />
          </Reveal.Hidden>
        </Reveal>
        <Header as="h2">States</Header>
        <Header>Active</Header>
        <Reveal animation="rotate left" show={true}>
          <Reveal.Visible>
            <Image src="/img/avatar1.png" size="small" alt="Avatar" />
          </Reveal.Visible>
          <Reveal.Hidden>
            <Image src="/img/avatar2.png" size="small" alt="Avatar" />
          </Reveal.Hidden>
        </Reveal>
        <Header>Instant</Header>
        <Reveal animation="rotate left" instant>
          <Reveal.Visible>
            <Image src="/img/avatar1.png" size="small" alt="Avatar" />
          </Reveal.Visible>
          <Reveal.Hidden>
            <Image src="/img/avatar2.png" size="small" alt="Avatar" />
          </Reveal.Hidden>
        </Reveal>
        <Header>Disabled only works properly for move</Header>
        <Reveal animation="move right" show={false}>
          <Reveal.Visible>
            <Image src="/img/avatar1.png" size="small" alt="Avatar" />
          </Reveal.Visible>
          <Reveal.Hidden>
            <Image src="/img/avatar2.png" size="small" alt="Avatar" />
          </Reveal.Hidden>
        </Reveal>
        <Header as="h2">Controlled (Only Works Properly for move)</Header>
        <Header>On Reveal click</Header>
        <Reveal
          animation="move right"
          show={this.state.active}
          onClick={() => this.setState(({ active }) => ({ active: !active }))}
        >
          <Reveal.Visible>
            <Image src="/img/avatar1.png" size="small" alt="Avatar" />
          </Reveal.Visible>
          <Reveal.Hidden>
            <Image src="/img/avatar2.png" size="small" alt="Avatar" />
          </Reveal.Hidden>
        </Reveal>
        <Header>On Mouse Toggle (Handling outside Reveal)</Header>
        <Reveal animation="move up" show={this.state.active}>
          <Reveal.Visible>
            <Image src="/img/avatar1.png" size="small" alt="Avatar" circular />
          </Reveal.Visible>
          <Reveal.Hidden>
            <Image src="/img/avatar2.png" size="small" alt="Avatar" circular />
          </Reveal.Hidden>
        </Reveal>
        <Button
          toggle
          active={this.state.active}
          onClick={() => this.setState(({ active }) => ({ active: !active }))}
        >
          Toggle
        </Button>
        <Divider clearing />
        <div className="ui grid">
          <div className="four wide colum">
            <Reveal animation="fade" show={this.state.active}>
              <Reveal.Visible>
                <Image
                  src="/img/avatar1.png"
                  size="small"
                  alt="Avatar"
                  circular
                />
              </Reveal.Visible>
              <Reveal.Hidden>
                <Image
                  src="/img/avatar2.png"
                  size="small"
                  alt="Avatar"
                  circular
                />
              </Reveal.Hidden>
            </Reveal>
          </div>
          <div className="four wide colum">
            <Reveal animation="move" show={this.state.active}>
              <Reveal.Visible>
                <Image
                  src="/img/avatar1.png"
                  size="small"
                  alt="Avatar"
                  circular
                />
              </Reveal.Visible>
              <Reveal.Hidden>
                <Image
                  src="/img/avatar2.png"
                  size="small"
                  alt="Avatar"
                  circular
                />
              </Reveal.Hidden>
            </Reveal>
          </div>
          <div className="four wide colum">
            <Reveal animation="move up" show={this.state.active}>
              <Reveal.Visible>
                <Image
                  src="/img/avatar1.png"
                  size="small"
                  alt="Avatar"
                  circular
                />
              </Reveal.Visible>
              <Reveal.Hidden>
                <Image
                  src="/img/avatar2.png"
                  size="small"
                  alt="Avatar"
                  circular
                />
              </Reveal.Hidden>
            </Reveal>
          </div>
          <div className="four wide colum">
            <Reveal animation="move down" show={this.state.active}>
              <Reveal.Visible>
                <Image
                  src="/img/avatar1.png"
                  size="small"
                  alt="Avatar"
                  circular
                />
              </Reveal.Visible>
              <Reveal.Hidden>
                <Image
                  src="/img/avatar2.png"
                  size="small"
                  alt="Avatar"
                  circular
                />
              </Reveal.Hidden>
            </Reveal>
          </div>
          <div className="four wide colum">
            <Reveal animation="move right" show={this.state.active}>
              <Reveal.Visible>
                <Image
                  src="/img/avatar1.png"
                  size="small"
                  alt="Avatar"
                  circular
                />
              </Reveal.Visible>
              <Reveal.Hidden>
                <Image
                  src="/img/avatar2.png"
                  size="small"
                  alt="Avatar"
                  circular
                />
              </Reveal.Hidden>
            </Reveal>
          </div>
          <div className="four wide colum">
            <Reveal animation="rotate" instant show={this.state.active}>
              <Reveal.Visible>
                <Image
                  src="/img/avatar1.png"
                  size="small"
                  alt="Avatar"
                  circular
                />
              </Reveal.Visible>
              <Reveal.Hidden>
                <Image
                  src="/img/avatar2.png"
                  size="small"
                  alt="Avatar"
                  circular
                />
              </Reveal.Hidden>
            </Reveal>
          </div>
        </div>
        <div className="ui grid">
          <div className="four wide colum">
            <Reveal animation="rotate left" show={this.state.active}>
              <Reveal.Visible>
                <Image
                  src="/img/avatar1.png"
                  size="small"
                  alt="Avatar"
                  circular
                />
              </Reveal.Visible>
              <Reveal.Hidden>
                <Image
                  src="/img/avatar2.png"
                  size="small"
                  alt="Avatar"
                  circular
                />
              </Reveal.Hidden>
            </Reveal>
          </div>
          <div className="four wide colum">
            <Reveal animation="fade" show={this.state.active}>
              <Reveal.Visible>
                <Image src="/img/avatar1.png" size="small" alt="Avatar" />
              </Reveal.Visible>
              <Reveal.Hidden>
                <Image src="/img/avatar2.png" size="small" alt="Avatar" />
              </Reveal.Hidden>
            </Reveal>
          </div>
          <div className="four wide colum">
            <Reveal animation="move" show={this.state.active}>
              <Reveal.Visible>
                <Image src="/img/avatar1.png" size="small" alt="Avatar" />
              </Reveal.Visible>
              <Reveal.Hidden>
                <Image src="/img/avatar2.png" size="small" alt="Avatar" />
              </Reveal.Hidden>
            </Reveal>
          </div>
          <div className="four wide colum">
            <Reveal animation="move up" show={this.state.active}>
              <Reveal.Visible>
                <Image src="/img/avatar1.png" size="small" alt="Avatar" />
              </Reveal.Visible>
              <Reveal.Hidden>
                <Image src="/img/avatar2.png" size="small" alt="Avatar" />
              </Reveal.Hidden>
            </Reveal>
          </div>
          <div className="four wide colum">
            <Reveal animation="move down" show={this.state.active}>
              <Reveal.Visible>
                <Image src="/img/avatar1.png" size="small" alt="Avatar" />
              </Reveal.Visible>
              <Reveal.Hidden>
                <Image src="/img/avatar2.png" size="small" alt="Avatar" />
              </Reveal.Hidden>
            </Reveal>
          </div>
          <div className="four wide colum">
            <Reveal animation="move right" show={this.state.active}>
              <Reveal.Visible>
                <Image src="/img/avatar1.png" size="small" alt="Avatar" />
              </Reveal.Visible>
              <Reveal.Hidden>
                <Image src="/img/avatar2.png" size="small" alt="Avatar" />
              </Reveal.Hidden>
            </Reveal>
          </div>
          <div className="four wide colum">
            <Reveal animation="rotate left" instant show={this.state.active}>
              <Reveal.Visible>
                <Image src="/img/avatar1.png" size="small" alt="Avatar" />
              </Reveal.Visible>
              <Reveal.Hidden>
                <Image src="/img/avatar2.png" size="small" alt="Avatar" />
              </Reveal.Hidden>
            </Reveal>
          </div>
          <div className="four wide colum">
            <Reveal animation="rotate " instant show={this.state.active}>
              <Reveal.Visible>
                <Image src="/img/avatar1.png" size="small" alt="Avatar" />
              </Reveal.Visible>
              <Reveal.Hidden>
                <Image src="/img/avatar2.png" size="small" alt="Avatar" />
              </Reveal.Hidden>
            </Reveal>
          </div>
        </div>
      </Container>
    );
  }
}
