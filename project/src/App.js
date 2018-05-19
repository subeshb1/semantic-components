import React, { Component } from "react";
import "./App.css";
// eslint-disable-next-line
import Button, { ButtonGroup } from "./components/button";
// eslint-disable-next-line
import Container from "./components/container";
// eslint-disable-next-line
import Divider from "./components/divider";
// eslint-disable-next-line
import Icon from "./components/icon";
// eslint-disable-next-line
import Flag from "./components/flag";
// eslint-disable-next-line
import Header from "./components/header";
// eslint-disable-next-line
import Image from "./components/image";
// eslint-disable-next-line
import Label, { LabelGroup } from "./components/label";
// eslint-disable-next-line
import Loader from "./components/loader";
// eslint-disable-next-line
import Segment from "./components/segment";
// eslint-disable-next-line
import Input from "./components/input";

class App extends Component {
  render() {
    return (
      <Container> <ButtonGroup>
          <Button text={"One"} />
          <Button text={"Two"} />
          <Button text={"Three"} />
        </ButtonGroup>
        {/* Button Group to hold Icons */}
        <ButtonGroup icon>
          <Button micon={"align left"} />
          <Button micon={"align center"} />
          <Button micon={"align right"} />
        </ButtonGroup>
        <ButtonGroup icon>
          <Button micon={"play"} />
          <Button micon={"pause"} />
          <Button micon={"shuffle"} />
        </ButtonGroup>
        {/* Vertical Button Group */}
        <ButtonGroup vertical>
          <Button text={"One"} />
          <Button text={"Two"} />
          <Button text={"Three"} />
        </ButtonGroup>
        {/*  Labeled Icon Group */}
        <ButtonGroup vertical>
          <Button labeledIcon text={"Play"} ficon="play" />
          <Button labeledIcon text={"Pause"} ficon="pause" />
          <Button labeledIcon text={"Shuffle"} ficon="shuffle" />
        </ButtonGroup>
        {/*  Colored Button Group */}
        <ButtonGroup color="red">
          <Button text={"One"} />
          <Button text={"Two"} />
          <Button text={"Three"} />
        </ButtonGroup>
        {/*  Basic Button Group */}
        <ButtonGroup basic>
          <Button text={"One"} />
          <Button text={"Two"} />
          <Button text={"Three"} />
        </ButtonGroup>
        {/*  Basic Buttons in Group */}
        <ButtonGroup inverted>
          <Button color="red" text={"One"} />
          <Button color="blue" text={"Two"} />
          <Button color="green" text={"Three"} />
        </ButtonGroup>
        {/*  Size in Group */}
        <ButtonGroup inverted size="massive">
          <Button inverted color="red" text={"One"} />
          <Button color="blue" text={"Two"} />
          <Button color="green" text={"Three"} />
        </ButtonGroup>
        {/* Attached Buttona*/}
        <ButtonGroup>
          <Button color="red" text={"One"} />
          <Button color="blue" text={"Two"} />
          <Button.Or />
          <Button color="green" text={"Three"} />
          <Button.Or />
          <Button color="violet" text={"Three"} />
          <Button color="pink" text={"Three"} />
          <Button color="green" text={"Three"} />
          <Button animate text={"Hello"} bicon={"right arrow"} />
        </ButtonGroup>
        {/*  Attached in Group */}
        <ButtonGroup attached="top" count="three">
          <Button color="red" text={"One"} />
          <Button color="blue" text={"Two"} />
          <Button color="green" text={"Three"} />
        </ButtonGroup>

        <ButtonGroup attached="bottom" count={"three"}>
          <Button color="red" text={"One"} />
          <Button color="blue" text={"Two"} />
          <Button animate color="green" text={"Three"} bicon={"right arrow"} />
        </ButtonGroup>
        {/* Mixed Group */}
        <ButtonGroup>
          <Button animate bicon={"left chevron"} text={"Back"} />
          <Button ficon={"stop"} text={"Stop"} />
          <Button animate bicon={"right chevron"} text={"Front"} />
        </ButtonGroup>
        <ButtonGroup>
          <Button labeledIcon ficon={"left chevron"} text={"Back"} />
          <Button ficon={"stop"} text={"Stop"} />
          <Button labeledIcon bicon={"right chevron"} text={"Front"} />
        </ButtonGroup>
        <ButtonGroup >
          <Button
            labeled
            color={"red"}
            text={"Like"}
            ficon={"home"}
            htext={"2048"}
            href="#"
            pointed
          />
          <Button
            labeled={"left"}
            color={"blue"}
            text={"Like"}
            ficon={"home"}
            htext={"2048"}
            href="#"
          />
        </ButtonGroup></Container>
    );
  }
}
export default App;
