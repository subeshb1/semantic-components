# Menu

```jsx
<UI.Container>
  <UI.Header as="h1">Menu</UI.Header>
  <UI.Header as="h2">Types</UI.Header>
  <UI.Header>Menu Flex </UI.Header>
  <UI.Menu count={3}>
    <UI.Menu.Item active>Home</UI.Menu.Item>
    <UI.Menu.Item>Contact</UI.Menu.Item>
    <UI.Menu.Item>Login</UI.Menu.Item>
  </UI.Menu>
  <UI.Header>Text Menu</UI.Header>
  <UI.Menu text>
    <UI.Menu.Item>
      <UI.Image src="/img/avatar-3.png" className="" />
    </UI.Menu.Item>
    <UI.Menu.Item>Hello</UI.Menu.Item>
    <DropDown
      text="File"
      open={["focus", "mouseover"]}
      close={["mouseout"]}
      extra="item"
    >
      <DropDown.Menu>
        <a className="item" tabIndex="0" href="">
          Open...
        </a>
        <div className="item">Save as...</div>
        <div className="item">Rename</div>
      </DropDown.Menu>
    </DropDown>
    <DropDown
      text="File"
      open={["focus", "mouseover"]}
      close={["mouseout"]}
      extra="right item"
    >
      <DropDown.Menu>
        <a className="item" tabIndex="0" href="">
          Open...
        </a>
        <div className="item">Save as...</div>
        <div className="item">Rename</div>
      </DropDown.Menu>
    </DropDown>
  </UI.Menu>
  <UI.Header>Secondary Menu</UI.Header>
  <UI.Menu secondary>
    <UI.Menu.Item active>Home</UI.Menu.Item>
    <UI.Menu.Item>Messages </UI.Menu.Item>
    <UI.Menu.Item>Contact</UI.Menu.Item>
    <UI.Menu right sub>
      <UI.Menu.Item as="div">
        <UI.Input icon="search" />
      </UI.Menu.Item>
      <UI.Menu.Item>LogOut</UI.Menu.Item>
    </UI.Menu>
  </UI.Menu>
  <UI.Header>Pointing Menu</UI.Header>
  <UI.Menu pointing>
    <UI.Menu.Item active>Home</UI.Menu.Item>
    <UI.Menu.Item>Messages </UI.Menu.Item>
    <UI.Menu.Item>Contact</UI.Menu.Item>
    <UI.Menu right sub>
      <UI.Menu.Item as="div">
        <UI.Input icon="search" />
      </UI.Menu.Item>
      <UI.Menu.Item>LogOut</UI.Menu.Item>
    </UI.Menu>
  </UI.Menu>
  <UI.Segment>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore velit
      maiores nesciunt quam, exercitationem sapiente? Vel neque magni labore
      quisquam minus voluptatum quo rem delectus, praesentium eaque eius quaerat
      nobis?
    </p>
  </UI.Segment>
  <UI.Header as="h4">Secondary Pointing</UI.Header>
  <UI.Menu secondary pointing>
    <UI.Menu.Item active>Home</UI.Menu.Item>
    <UI.Menu.Item>Messages </UI.Menu.Item>
    <UI.Menu.Item>Contact</UI.Menu.Item>
    <UI.Menu right sub>
      <UI.Menu.Item as="div">
        <UI.Input icon="search" />
      </UI.Menu.Item>
      <UI.Menu.Item>LogOut</UI.Menu.Item>
    </UI.Menu>
  </UI.Menu>
  <UI.Segment>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore velit
      maiores nesciunt quam, exercitationem sapiente? Vel neque magni labore
      quisquam minus voluptatum quo rem delectus, praesentium eaque eius quaerat
      nobis?
    </p>
  </UI.Segment>
  <UI.Header>Tabular Menu</UI.Header>
  <UI.Menu tabular attached="top">
    <UI.Menu.Item active>Home</UI.Menu.Item>
    <UI.Menu.Item>Messages </UI.Menu.Item>
    <UI.Menu.Item>Contact</UI.Menu.Item>
    <UI.Menu right sub>
      <UI.Menu.Item as="div">
        <UI.Input icon="search" transparent placeholder="Search.." />
      </UI.Menu.Item>
      <UI.Menu.Item>LogOut</UI.Menu.Item>
    </UI.Menu>
  </UI.Menu>
  <UI.Segment attached="bottom">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore velit
      maiores nesciunt quam, exercitationem sapiente? Vel neque magni labore
      quisquam minus voluptatum quo rem delectus, praesentium eaque eius quaerat
      nobis?
    </p>
  </UI.Segment>
  <UI.Segment attached="top">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore velit
      maiores nesciunt quam, exercitationem sapiente? Vel neque magni labore
      quisquam minus voluptatum quo rem delectus, praesentium eaque eius quaerat
      nobis?
    </p>
  </UI.Segment>
  <UI.Menu tabular attached="bottom">
    <UI.Menu.Item active>Home</UI.Menu.Item>
    <UI.Menu.Item>Messages </UI.Menu.Item>
    <UI.Menu.Item>Contact</UI.Menu.Item>
    <UI.Menu right sub>
      <UI.Menu.Item as="div">
        <UI.Input icon="search" transparent placeholder="Search.." />
      </UI.Menu.Item>
      <UI.Menu.Item>LogOut</UI.Menu.Item>
    </UI.Menu>
  </UI.Menu>
  <UI.Header>Vertical Menu</UI.Header>
  <UI.Header as="h4">Simple Menu</UI.Header>
  <UI.Menu vertical>
    <UI.Menu.Item active>
      Home
      <UI.Label pointing="left" float="left" color="red">
        1
      </UI.Label>
    </UI.Menu.Item>
    <UI.Menu.Item>Messages </UI.Menu.Item>
    <UI.Menu.Item>Contact</UI.Menu.Item>
    <UI.Menu.Item as="div">
      <UI.Input icon="search" transparent placeholder="Search.." />
    </UI.Menu.Item>
    <UI.Menu.Item>LogOut</UI.Menu.Item>
  </UI.Menu>
  <UI.Header as="h4">Secondary Menu</UI.Header>
  <UI.Menu secondary vertical>
    <UI.Menu.Item active>Home</UI.Menu.Item>
    <UI.Menu.Item>Messages </UI.Menu.Item>
    <UI.Menu.Item>Contact</UI.Menu.Item>
    <UI.Menu.Item as="div">
      <UI.Input icon="search" transparent placeholder="Search.." />
    </UI.Menu.Item>
    <UI.Menu.Item>LogOut</UI.Menu.Item>
  </UI.Menu>
  <UI.Header as="h4">Text Menu</UI.Header>
  <UI.Menu text vertical>
    <UI.Menu.Item active>Home</UI.Menu.Item>
    <UI.Menu.Item>Messages </UI.Menu.Item>
    <UI.Menu.Item>Contact</UI.Menu.Item>
    <UI.Menu.Item as="div">
      <UI.Input icon="search" transparent placeholder="Search.." />
    </UI.Menu.Item>
    <UI.Menu.Item>LogOut</UI.Menu.Item>
  </UI.Menu>
  <UI.Header as="h4">Pointing Menu</UI.Header>
  <UI.Menu pointing vertical>
    <UI.Menu.Item active>Home</UI.Menu.Item>
    <UI.Menu.Item>Messages </UI.Menu.Item>
    <UI.Menu.Item>Contact</UI.Menu.Item>
    <UI.Menu.Item as="div">
      <UI.Input icon="search" transparent placeholder="Search.." />
    </UI.Menu.Item>
    <UI.Menu.Item>LogOut</UI.Menu.Item>
  </UI.Menu>
  <UI.Header as="h4">Secondary Pointing Menu</UI.Header>
  <UI.Menu secondary pointing vertical>
    <UI.Menu.Item active color="red">
      Home
    </UI.Menu.Item>
    <UI.Menu.Item>Messages </UI.Menu.Item>
    <UI.Menu.Item>Contact</UI.Menu.Item>
    <UI.Menu.Item as="div">
      <UI.Input icon="search" transparent placeholder="Search.." />
    </UI.Menu.Item>
    <UI.Menu.Item>LogOut</UI.Menu.Item>
  </UI.Menu>
  <UI.Header as="h4">Secondary Pointing Menu</UI.Header>
  <UI.Menu vertical tabular>
    <UI.Menu.Item active color="red">
      Home
    </UI.Menu.Item>
    <UI.Menu.Item>Messages </UI.Menu.Item>
    <UI.Menu.Item>Contact</UI.Menu.Item>
    <UI.Menu.Item as="div">
      <UI.Input icon="search" transparent placeholder="Search.." />
    </UI.Menu.Item>
    <UI.Menu.Item>LogOut</UI.Menu.Item>
  </UI.Menu>
  <UI.Header>Pagination </UI.Header>
  <UI.Menu pagination>
    <UI.Menu.Item active color="red">
      1
    </UI.Menu.Item>
    <UI.Menu.Item>2</UI.Menu.Item>
    <UI.Menu.Item>3</UI.Menu.Item>
    <UI.Menu.Item>..</UI.Menu.Item>
    <UI.Menu.Item>11</UI.Menu.Item>
    <UI.Menu.Item>12</UI.Menu.Item>
  </UI.Menu>
  <UI.Header as="h2">Content</UI.Header>
  <UI.Header>
    Header
    <UI.Header sub as="div">
      A menu item may include a header or may itself be a header
    </UI.Header>
  </UI.Header>
  <UI.Menu>
    <UI.Menu.Item header as="div">
      Home
    </UI.Menu.Item>
    <UI.Menu.Item>Messages </UI.Menu.Item>
    <UI.Menu.Item>Contact</UI.Menu.Item>
    <UI.Menu.Item right as="div">
      <UI.Input icon="search" transparent placeholder="Search.." />
    </UI.Menu.Item>
    <UI.Menu.Item>LogOut</UI.Menu.Item>
    <UI.Button animated>
      <UI.Button.Hidden>Hello</UI.Button.Hidden>
      <UI.Button.Visible> HOver</UI.Button.Visible>
    </UI.Button>
  </UI.Menu>
  <UI.Header as="h4">Inside item</UI.Header>
  <UI.Menu vertical>
    <UI.Menu.Item as="div">
      <UI.Menu.Header>Products</UI.Menu.Header>
      <UI.Menu sub>
        <UI.Menu.Item>Enterprise</UI.Menu.Item>
        <UI.Menu.Item>Consumer</UI.Menu.Item>
      </UI.Menu>
    </UI.Menu.Item>
    <UI.Menu.Item as="div">
      <UI.Menu.Header>Features</UI.Menu.Header>
      <UI.Menu sub>
        <UI.Menu.Item>Enterprise</UI.Menu.Item>
        <UI.Menu.Item>Consumer</UI.Menu.Item>
      </UI.Menu>
    </UI.Menu.Item>
    <UI.Menu.Item as="div">
      <UI.Menu.Header>Categories</UI.Menu.Header>
      <UI.Menu sub>
        <UI.Menu.Item>Enterprise</UI.Menu.Item>
        <UI.Menu.Item>Consumer</UI.Menu.Item>
      </UI.Menu>
    </UI.Menu.Item>
  </UI.Menu>
  <UI.Header>
    Text{" "}
    <UI.Header as="div" sub>
      A vertical menu item can include any type of text content.
    </UI.Header>
  </UI.Header>
  <UI.Menu vertical>
    <UI.Menu.Item>
      <UI.Header as="h4">Promotions</UI.Header>
      <p>Check out our new promotions</p>
    </UI.Menu.Item>
    <UI.Menu.Item>
      <UI.Header as="h4">Promotions</UI.Header>
      <p>Check out our new promotions</p>
    </UI.Menu.Item>
    <UI.Menu.Item>
      <UI.Header as="h4">Promotions</UI.Header>
      <p>Check out our new promotions</p>
    </UI.Menu.Item>
  </UI.Menu>
  <UI.Header>
    Menu{" "}
    <UI.Header sub as="div">
      A menu may contain another menu group in the same level as menu items.
    </UI.Header>
  </UI.Header>
  <UI.Menu>
    <UI.Menu.Item>Home</UI.Menu.Item>
    <UI.Menu.Item>About</UI.Menu.Item>
    <UI.Menu right sub>
      <UI.Menu.Item>Home</UI.Menu.Item>
      <UI.Menu.Item>About</UI.Menu.Item>
    </UI.Menu>
  </UI.Menu>
  <UI.Header>Sun Menu (inside Item) </UI.Header>
  <UI.Menu vertical tabular>
    <UI.Menu.Item as="div">
      <UI.Input placeholder="search" />
    </UI.Menu.Item>
    <UI.Menu.Item as="div">
      <UI.Menu sub>
        <UI.Menu.Item active> Home</UI.Menu.Item>
        <UI.Menu.Item>Search</UI.Menu.Item>
        <UI.Menu.Item>Add</UI.Menu.Item>
      </UI.Menu>
    </UI.Menu.Item>
    <UI.Menu.Item>
      Browse<UI.Icon float="right" name="grid layout" />
    </UI.Menu.Item>
    <UI.Menu.Item>Log Out</UI.Menu.Item>
  </UI.Menu>
  <UI.Header as="h2">Variations</UI.Header>
  <UI.Header>Fixed</UI.Header>
  <UI.Button toggle onClick={() => this.toggle(0)} active={Boolean(active[0])}>
    Toggle
  </UI.Button>
  <UI.Menu secondary pointing fixed={active[0] ? "top" : undefined}>
    <UI.Menu.Item active>Home</UI.Menu.Item>
    <UI.Menu.Item>Messages </UI.Menu.Item>
    <UI.Menu.Item>Contact</UI.Menu.Item>
    <UI.Menu right sub>
      <UI.Menu.Item as="div">
        <UI.Input icon="search" />
      </UI.Menu.Item>
      <UI.Menu.Item>LogOut</UI.Menu.Item>
    </UI.Menu>
  </UI.Menu>
  <UI.Header as="h4"> Secondary Vertical Left</UI.Header>
  <UI.Button toggle onClick={() => this.toggle(1)} active={Boolean(active[1])}>
    Toggle
  </UI.Button>
  <UI.Menu secondary vertical fixed={active[1] ? "left" : undefined}>
    <UI.Menu.Item active>Home</UI.Menu.Item>
    <UI.Menu.Item>Messages </UI.Menu.Item>
    <UI.Menu.Item>Contact</UI.Menu.Item>
    <UI.Menu right sub>
      <UI.Menu.Item as="div">
        <UI.Input icon="search" />
      </UI.Menu.Item>
      <UI.Menu.Item>LogOut</UI.Menu.Item>
    </UI.Menu>
  </UI.Menu>
  <UI.Header as="h4"> Tabular vertical right</UI.Header>
  <UI.Button toggle onClick={() => this.toggle(2)} active={Boolean(active[2])}>
    Toggle
  </UI.Button>
  <UI.Menu color="red" tabular vertical fixed={active[2] ? "left" : undefined}>
    <UI.Menu.Item active>Home</UI.Menu.Item>
    <UI.Menu.Item>Messages </UI.Menu.Item>
    <UI.Menu.Item>Contact</UI.Menu.Item>
    <UI.Menu right sub>
      <UI.Menu.Item as="div">
        <UI.Input icon="search" />
      </UI.Menu.Item>
      <UI.Menu.Item>LogOut</UI.Menu.Item>
    </UI.Menu>
  </UI.Menu>
  <UI.Header>Stackable</UI.Header>
  <UI.Menu secondary pointing stackable>
    <UI.Menu.Item active>Home</UI.Menu.Item>
    <UI.Menu.Item>Messages </UI.Menu.Item>
    <UI.Menu.Item>Contact</UI.Menu.Item>
    <UI.Menu right sub>
      <UI.Menu.Item as="div">
        <UI.Input icon="search" />
      </UI.Menu.Item>
      <UI.Menu.Item>LogOut</UI.Menu.Item>
    </UI.Menu>
  </UI.Menu>
  <UI.Header>
    Inverted{" "}
    <UI.Header sub as="div">
      Some may require Nesting within an inverted segment
    </UI.Header>
  </UI.Header>
  <UI.Segment inverted>
    <UI.Menu secondary pointing stackable inverted>
      <UI.Menu.Item active>Home</UI.Menu.Item>
      <UI.Menu.Item>Messages </UI.Menu.Item>
      <UI.Menu.Item>Contact</UI.Menu.Item>
      <UI.Menu right sub>
        <UI.Menu.Item as="div">
          <UI.Input icon="search" />
        </UI.Menu.Item>
        <UI.Menu.Item>LogOut</UI.Menu.Item>
      </UI.Menu>
    </UI.Menu>
  </UI.Segment>
  <UI.Menu inverted vertical pointing>
    <UI.Menu.Item active> Home</UI.Menu.Item>
    <UI.Menu.Item>Contact</UI.Menu.Item>
    <UI.Menu.Item>About</UI.Menu.Item>
  </UI.Menu>
  <UI.Segment inverted>
    <UI.Menu secondary inverted>
      <UI.Menu.Item active>Home</UI.Menu.Item>
      <UI.Menu.Item>Messages </UI.Menu.Item>
      <UI.Menu.Item>Contact</UI.Menu.Item>
      <UI.Menu right sub>
        <UI.Menu.Item as="div">
          <UI.Input icon="search" />
        </UI.Menu.Item>
        <UI.Menu.Item>LogOut</UI.Menu.Item>
      </UI.Menu>
    </UI.Menu>
  </UI.Segment>
  <UI.Segment inverted>
    <UI.Menu tabular inverted>
      <UI.Menu.Item active>Home</UI.Menu.Item>
      <UI.Menu.Item>Messages </UI.Menu.Item>
      <UI.Menu.Item>Contact</UI.Menu.Item>
      <UI.Menu right sub>
        <UI.Menu.Item as="div">
          <UI.Input icon="search" />
        </UI.Menu.Item>
        <UI.Menu.Item>LogOut</UI.Menu.Item>
      </UI.Menu>
    </UI.Menu>
  </UI.Segment>
  <UI.Header>Color</UI.Header>
  {colorDef.map((x, i) => (
    <UI.Menu color={x} key={i} secondary pointing>
      <UI.Menu.Item>Home</UI.Menu.Item>
      <UI.Menu.Item active>Messages </UI.Menu.Item>
      <UI.Menu.Item>Contact</UI.Menu.Item>
    </UI.Menu>
  ))}
  {colorDef.map((x, i) => (
    <UI.Menu color={x} key={i} inverted>
      <UI.Menu.Item>Home</UI.Menu.Item>
      <UI.Menu.Item active>Messages </UI.Menu.Item>
      <UI.Menu.Item>Contact</UI.Menu.Item>
    </UI.Menu>
  ))}
  <UI.Header>Icon</UI.Header>
  <UI.Menu icon>
    <UI.Menu.Item>
      <UI.Icon name="gamepad" />
    </UI.Menu.Item>
    <UI.Menu.Item>
      <UI.Icon name="video camera" />
    </UI.Menu.Item>
    <UI.Menu.Item>
      <UI.Icon name="video play" />
    </UI.Menu.Item>
  </UI.Menu>
  <UI.Menu icon vertical>
    <UI.Menu.Item>
      <UI.Icon name="gamepad" />
    </UI.Menu.Item>
    <UI.Menu.Item>
      <UI.Icon name="video camera" />
    </UI.Menu.Item>
    <UI.Menu.Item>
      <UI.Icon name="video play" />
    </UI.Menu.Item>
  </UI.Menu>
  <UI.Header>Labeled Icon</UI.Header>
  <UI.Menu icon vertical labeled>
    <UI.Menu.Item>
      <UI.Icon name="gamepad" />
      Game
    </UI.Menu.Item>
    <UI.Menu.Item>
      <UI.Icon name="video camera" />
      Camera
    </UI.Menu.Item>
    <UI.Menu.Item>
      <UI.Icon name="video play" />
      Play
    </UI.Menu.Item>
  </UI.Menu>
  <UI.Header>Fluid Vertical Menu</UI.Header>
  <UI.Menu vertical fluid inverted>
    <UI.Menu.Item>Home</UI.Menu.Item>
    <UI.Menu.Item active>Messages </UI.Menu.Item>
    <UI.Menu.Item>Contact</UI.Menu.Item>
  </UI.Menu>
  <UI.Header>Compact</UI.Header>
  <UI.Menu icon labeled compact inverted>
    <UI.Menu.Item>
      <UI.Icon name="gamepad" />
      Game
    </UI.Menu.Item>
    <UI.Menu.Item>
      <UI.Icon name="video camera" />
      Camera
    </UI.Menu.Item>
    <UI.Menu.Item>
      <UI.Icon name="video play" />
      Play
    </UI.Menu.Item>
  </UI.Menu>
  <UI.Header as="h4" text="Icon" />
  <UI.Menu icon inverted compact>
    <UI.Menu.Item>
      <UI.Icon name="gamepad" />
    </UI.Menu.Item>
    <UI.Menu.Item>
      <UI.Icon name="video camera" />
    </UI.Menu.Item>
    <UI.Menu.Item>
      <UI.Icon name="video play" />
    </UI.Menu.Item>
  </UI.Menu>
  <UI.Header>Size</UI.Header>
  {size.map((x, i) => (
    <UI.Menu size={x} key={i} inverted>
      <UI.Menu.Item>Home</UI.Menu.Item>
      <UI.Menu.Item active>Messages </UI.Menu.Item>
      <UI.Menu.Item>Contact</UI.Menu.Item>
    </UI.Menu>
  ))}
  {size.map((x, i) => (
    <UI.Menu size={x} key={i} vertical pointing secondary>
      <UI.Menu.Item>Home</UI.Menu.Item>
      <UI.Menu.Item active>Messages </UI.Menu.Item>
      <UI.Menu.Item>Contact</UI.Menu.Item>
    </UI.Menu>
  ))}

  <UI.Header>Fitted</UI.Header>
  <UI.Menu vertical>
    <UI.Menu.Item fitted="horizontally">Home</UI.Menu.Item>
    <UI.Menu.Item active>Messages </UI.Menu.Item>
    <UI.Menu.Item fitted="vertically">Contact</UI.Menu.Item>
  </UI.Menu>
  <UI.Header>Borderless</UI.Header>
  <UI.Menu vertical borderless>
    <UI.Menu.Item>1</UI.Menu.Item>
    <UI.Menu.Item active>2 </UI.Menu.Item>
    <UI.Menu.Item>3</UI.Menu.Item>
    <UI.Menu.Item>4</UI.Menu.Item>
    <UI.Menu.Item>5</UI.Menu.Item>
  </UI.Menu>
  <UI.Menu borderless>
    <UI.Menu.Item>1</UI.Menu.Item>
    <UI.Menu.Item active>2 </UI.Menu.Item>
    <UI.Menu.Item>3</UI.Menu.Item>
    <UI.Menu.Item>4</UI.Menu.Item>
    <UI.Menu.Item>5</UI.Menu.Item>
  </UI.Menu>
  <UI.Menu borderless inverted compact>
    <UI.Menu.Item>1</UI.Menu.Item>
    <UI.Menu.Item active>2 </UI.Menu.Item>
    <UI.Menu.Item>3</UI.Menu.Item>
    <UI.Menu.Item>4</UI.Menu.Item>
    <UI.Menu.Item>5</UI.Menu.Item>
  </UI.Menu>
  <UI.Menu
    secondary
    pointing
    items={[
      {
        as: NavLink,
        to: "/collections/menu",
        exact: true,
        text: "Home",
        color: "red"
      },
      { as: "a", text: "Contact", color: "red" },
      { as: "a", text: "About", color: "red" }
    ]}
  />
</UI.Container>
```
