import React from "react";
import Label from "../components/label";
import Container from "../components/container";
import Header from "../components/header";
import Icon from "../components/icon";
import Button from "../components/button";
import Input from "../components/input";
import Image from "../components/image";
import Divider from "../components/divider";


export default class ImagePage extends React.Component {
  render() {
    return (
      <Container>
        <Header as="h2">Types of Image</Header>
        <Header>Image</Header>
        <Image src="/img/flower2.jpg" alt="Snake" size="small" />
        <Header>Wrapped Image</Header>
        <Image src="/img/flower2.jpg" alt="Snake" size="small" wrapped />
        <Header>image as Link</Header>
        <Image
          src="/img/flower2.jpg"
          alt="Snake"
          size="small"
          as="a"
          target="_blank"
          href="/img/flower2.jpg"
        />
        <Header as="h2">Image States</Header>
        <Header>Hidden Image</Header>
        <Image src="/img/flower2.jpg" alt="Snake" size="small" state="hidden" />
        <Header>Disabled Image</Header>
        <Image
          src="/img/flower2.jpg"
          alt="Snake"
          size="small"
          state="disabled"
        />
        <Header as="h2">Image Variations</Header>
        <Image src="/img/avatar-3.png" alt="Avatar" size="small" />
        <Header>Image as Avatar</Header>
        <Image src="/img/avatar-3.png" alt="Avatar" avatar />
        <Header>Bordered Image</Header>
        <Image src="/img/avatar-3.png" alt="Avatar" size="small" bordered />
        <Header> Rounded Image</Header>
        <Image src="/img/snake.jpg" alt="Avatar" size="small" rounded />
        <Header> Circular Image - Requires Square Image for Circle</Header>
        <Image src="/img/snake.jpg" alt="Avatar" size="small" circular />
        <Header> Centered Image </Header>
        <Image src="/img/snake.jpg" alt="Avatar" size="small" centered />
        <Header> Vertical Alignment </Header>
        <Image src={"/img/snake.jpg"} size="tiny" verticalAlign="top" />{" "}
        <span>Top Aligned</span>
        <Divider />
        <Image src={"/img/snake.jpg"} size="tiny" verticalAlign="middle" />{" "}
        <span>Middle Aligned</span>
        <Divider />
        <Image src={"/img/snake.jpg"} size="tiny" verticalAlign="bottom" />{" "}
        <span>Bottom Aligned</span>
        <Header>Spaced</Header>
        <div class="ui segment">
          <p>
            Te eum doming eirmod, nominati pertinacia<Image
              src={"/img/flower1.jpg"}
              size="mini"
              spaced
            />{" "}
            argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip
            detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur
            vix. Cum ea laoreet recteque electram, eos choro alterum definiebas
            in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
          </p>
        </div>
        <Header>Floated</Header>
        <div class="ui segment">
          <Image src={"/img/flower1.jpg"} size="small" float="right" />
          <p>
            Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam
            alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
            referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
            electram, eos choro alterum definiebas in. Vim dolorum definiebas
            an. Mei ex natum rebum iisque.
          </p>
          <Image src={"/img/flower1.jpg"} size="small" float="left" />
          <p>
            Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
            definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne,
            his te phaedrum referrentur consectetuer. Id vix fabulas oporteat,
            ei quo vide phaedrum, vim vivendum maiestatis in.
          </p>
          <p>
            Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.
            Mei ut facer dolores adolescens, no illum aperiri quo, usu odio
            brute at. Qui te porro electram, ea dico facete utroque quo. Populo
            quodsi te eam, wisi everti eos ex, eum elitr altera utamur at.
            Quodsi convenire mnesarchum eu per, quas minimum postulant per id.
          </p>
        </div>
        <Header>Fluid</Header>
        <Image src="/img/flower2.jpg" alt="Snake" fluid />
        <Header>Sizes</Header>
        <Header sub>Mini</Header>
        <Image src="/img/flower2.jpg" alt="Snake" size="mini" />
        <Header sub>Tiny</Header>
        <Image src="/img/flower2.jpg" alt="Snake" size="tiny" />
        <Header sub>Small</Header>
        <Image src="/img/flower2.jpg" alt="Snake" size="small" />
        <Header sub>Medium</Header>
        <Image src="/img/flower2.jpg" alt="Snake" size="medium" />
        <Header sub>Large</Header>
        <Image src="/img/flower2.jpg" alt="Snake" size="large" />
        <Header sub>Big</Header>
        <Image src="/img/flower2.jpg" alt="Snake" size="big" />
        <Header sub>Huge</Header>
        <Image src="/img/flower2.jpg" alt="Snake" size="huge" />
        <Header sub>Massive</Header>
        <Image src="/img/flower2.jpg" alt="Snake" size="massive" />
        <Header as="h2">Image Groups</Header>
        <Image.Group size="small">
          <Image src="/img/flower2.jpg" alt="Snake" />
          <Image src="/img/flower2.jpg" alt="Snake" />
          <Image src="/img/flower2.jpg" alt="Snake" />
          <Image src="/img/flower2.jpg" alt="Snake" />
          <Image src="/img/flower2.jpg" alt="Snake" />
          <Image src="/img/flower2.jpg" alt="Snake" />
          <Image src="/img/flower2.jpg" alt="Snake" />
          <Image src="/img/flower2.jpg" alt="Snake" />
          <Image src="/img/flower2.jpg" alt="Snake" />
          <Image src="/img/flower2.jpg" alt="Snake" />
          <Image src="/img/flower2.jpg" alt="Snake" />
          <Image src="/img/flower2.jpg" alt="Snake" />
          <Image src="/img/flower2.jpg" alt="Snake" />
          <Image src="/img/flower2.jpg" alt="Snake" />
        </Image.Group>
        <Image.Group size="medium">
          <Image src="/img/flower2.jpg" alt="Snake" />
          <Image src="/img/flower2.jpg" alt="Snake" />
          <Image src="/img/flower2.jpg" alt="Snake" />
          <Image src="/img/flower2.jpg" alt="Snake" />
          <Image src="/img/flower2.jpg" alt="Snake" />
        </Image.Group>
        <Image.Group size="small" extra="circular bordered ">
          <Image src="/img/flower2.jpg" alt="Snake" />
          <Image src="/img/avatar-3.png" alt="Snake" />
          <Image src="/img/flower2.jpg" alt="Snake" />
          <Image src="/img/flower2.jpg" alt="Snake" />
          <Image src="/img/flower2.jpg" alt="Snake" />
        </Image.Group>
        <Header as="h2">End</Header>
        <Image />
      </Container>
    );
  }
}
