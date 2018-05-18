# Button

```jsx
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
        <Button color="red" text={"Save"} inverted />
        <Button color="red" text={"Save"} inverted compact />
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
        {/* Attached Button */}
        <Button color="brown" attached="left" text="Left"/>
        <Button color="brown" attached="right" text="Right"/>
        <Button color="brown" attached="top" text="Top"/>
        <Button color="brown" attached="bottom" text="Bottom"/>
```

## Button Group

```jsx
 {/* Simple Button Group */}
        <ButtonGroup>
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
        </ButtonGroup>
```
