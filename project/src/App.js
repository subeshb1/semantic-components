import React, { Component } from "react";
import "./App.css";
import * as Button from "./components/button";

const { StandardButton } = Button;
class App extends Component {
  render() {
    return (
      <div className="container">
        <StandardButton
          color="primary"
          ficon={"user icon"}
          bicon={"home icon"}
          text={"Welcome"}
          lab
        />
        <StandardButton color="red" size={"large"} text={"Subesh"} circular />
        <StandardButton text="Click me" />
        <StandardButton color="violet" size={"massive"} text={"Subesh"} />
        <StandardButton color="positive" size={"small"} text={"Subesh"} />
        <StandardButton color="" text={"Follow"} />
        <StandardButton color="primary" text={"Save"} />
        <StandardButton color="red" text={"Save"} invert />
        <StandardButton
          color="teal"
          text={"Save"}
          onClick={evt => console.log(evt)}
        />
        <StandardButton
          color="teal"
          text={"Active"}
          state={"loading"}
          onClick={(evt, state) => console.log(evt, state)}
        />
        <StandardButton
          color="teal"
          text={"Active"}
          state={"loading"}
          onClick={(evt, state) => console.log(evt)}
        />
        <StandardButton
          text={"Facebook"}
          color={"facebook"}
          ficon={"facebook icon"}
        />
        <StandardButton color={"facebook"} micon={"facebook icon"} circular />
        <StandardButton color="teal" text={"Active"} state={"active"} />
        <StandardButton color="teal" text={"Active"} state={"active"} />
        
        <StandardButton 
          color="teal"
          text={"Disabled"}
          state={"disabled"}
          onClick={(evt, state) => console.log(evt)}
        />
      </div>
    );
  }
}
export default App;
