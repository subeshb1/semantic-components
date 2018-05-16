# Button Group

``` jsx
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
        <ButtonGroup invert>
          <Button color="red" text={"One"} />
          <Button color="blue" text={"Two"} />
          <Button color="green" text={"Three"} />
        </ButtonGroup>
        {/*  Size in Group */}
        <ButtonGroup invert size="massive">
          <Button invert color="red" text={"One"} />
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