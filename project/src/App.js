import React, { Component } from "react";
import "./App.css";
import Button from "./components/button";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Button
          color="primary"
          ficon={"user "}
          bicon={"home "}
          text={"Welcome"}
          lab
        />
        <Button color="red" size={"large"} text={"Subesh"} circular />
        <Button text="Click me" />
        <Button color="violet" size={"massive"} text={"Subesh"} />
        <Button color="positive" size={"small"} text={"Subesh"} />
        <Button color="" text={"Follow"} />
        <Button color="primary" text={"Save"} />
        <Button color="red" text={"Save"} invert />
        <Button color="red" text={"Save"} invert compact />
        <Button color="red" text={"Save"} labeledIcon ficon="play" />
        <Button text={"Save"} labeledIcon bicon="arrow" />
        <Button micon="home" />
        <Button>
          <i className="stop icon" />
          Stop
        </Button>
        <Button color="teal" text={"Save"} onClick={evt => console.log(evt)} />
        <Button
          color="teal"
          text={"Active"}
          state={"loading"}
          onClick={(evt, state) => console.log(evt, state)}
        />
        <Button
          color="teal"
          text={"Active"}
          state={"loading"}
          onClick={(evt, state) => console.log(evt)}
        />
        <Button text={"Facebook"} color={"facebook"} ficon={"facebook "} />
        <Button
          color="teal"
          text={"Disabled"}
          state={"disabled"}
          onClick={(evt, state) => console.log(evt)}
        />
        <Button color={"facebook"} micon={"facebook "} circular />
        <Button color="teal" text={"Active"} state={"active"} />
        <Button color="teal" text={"Active"} state={"active"} />
        <Button color="pink" text={"Active"} rightFloated fluid />
        <Button animate={"fade"} ficon={"left arrow"} bicon={"right arrow"} />
        <Button
          labeled={"left"}
          text={"Like"}
          ficon={"heart"}
          htext={"2048"}
          href="#"
        />
        <Button
          labeled={"left"}
          text={"Like"}
          ficon={"heart"}
          htext={"2048"}
          href="#"
          pointed
        />
        <Button
          labeled
          text={"Like"}
          ficon={"heart"}
          htext={"2048"}
          href="#"
          pointed
        />
        <Button
          labeled
          color={"red"}
          text={"Like"}
          ficon={"home"}
          htext={"2048"}
          href="#"
          pointed
        />
      </div>
    );
  }
}
export default App;
