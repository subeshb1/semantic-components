# List

```jsx
<Container>
  <Header as="h1">Lists</Header>
  <Header as="h2">Type of Lists</Header>
  <Header>Simple List</Header>
  <List>
    <List.Item>Apples</List.Item>
    <List.Item>Pears</List.Item>
    <List.Item>Oranges</List.Item>
  </List>
  <Header>
    Simple List as ul or ol. {"{use ol or li for bulleted or ordered list}"}
  </Header>
  <List as="ul">
    <List.Item>Apples</List.Item>
    <List.Item>Pears</List.Item>
    <List.Item>Oranges</List.Item>
  </List>
  <Header>Bulleted List</Header>
  <List as="ul" bulleted>
    <List.Item as="li">Apples</List.Item>
    <List.Item as="li">Pears</List.Item>
    <List.Item as="li">
      Oranges
      <List nested as="ul">
        <List.Item as="li">Apples</List.Item>
        <List.Item as="li">Pears</List.Item>
        <List.Item as="li">Oranges</List.Item>
      </List>
    </List.Item>
    <List.Item>Pears</List.Item>
  </List>
  <Header>Ordered List</Header>
  <List as="ol" ordered>
    <List.Item>Apples</List.Item>
    <List.Item>
      Subesh
      <List as="ol" nested>
        <List.Item>Apples</List.Item>
        <List.Item>Pears</List.Item>
        <List.Item>Oranges</List.Item>
      </List>
    </List.Item>
    <List.Item>Oranges</List.Item>
  </List>
  <Header>List with Links</Header>
  <List link>
    <List.Item className="active item">Home</List.Item>
    <List.Item as="a">About</List.Item>
    <List.Item as="a">Jobs</List.Item>
    <List.Item as="a">Team</List.Item>
  </List>
  <Header as="h2">List Content</Header>
  <Header>Item</Header>
  <List>
    <List.Item>1</List.Item>
    <List.Item>2</List.Item>
    <List.Item>3</List.Item>
    <List.Item>4</List.Item>
  </List>
  <Header>Icon</Header>
  <List>
    <List.Item as="a">
      <Icon name="help" />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
        <List.Description>
          This text will always have a left margin to make sure it sits
          alongside your icon
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item as="a" active>
      <Icon name="right triangle" />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
        <List.Description>
          This text will always have a left margin to make sure it sits
          alongside your icon
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Icon name="help" />
      Inline Text
    </List.Item>
  </List>
  <Header>Image</Header>
  <List>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header as="a">Floated Icons</List.Header>
        <List.Description>
          This text will always have a{" "}
          <a>
            <b>left margin </b>
          </a>to make sure it sits alongside your icon
        </List.Description>
      </List.Content>
    </List.Item>
  </List>
  <Header>List provided with array of items</Header>
  <List
    ordered
    items={[
      { as: "div", active: true, children: "Subesh" },
      { as: "div", active: true, children: "Subesh" },
      { as: "div", active: true, children: "Subesh" },
      { as: "div", active: true, children: "Subesh" },
      { as: "div", active: true, children: "Subesh" }
    ]}
  />
  <Header>Lists as Link</Header>
  <List
    items={[
      { as: "a", active: true, children: "What is your name?" },
      { as: "a", active: true, children: "What is her name?" },
      { as: "a", active: true, children: "Subesh" }
    ]}
  />
  <Header>List with Headers</Header>
  <List
    items={[
      {
        as: "div",
        children: (
          <React.Fragment>
            <List.Header>New York</List.Header>
            It is a wonderful Place.
          </React.Fragment>
        )
      },
      {
        as: "div",
        children: (
          <React.Fragment>
            <List.Header>Kathmandu</List.Header>
            It is a wonderful Place.
          </React.Fragment>
        )
      },
      {
        as: "div",
        children: (
          <React.Fragment>
            <List.Header>Australia </List.Header>
            It is a wonderful Place.
          </React.Fragment>
        )
      },
      {
        as: "div",
        children: (
          <React.Fragment>
            <List.Header>New York</List.Header>
            It is a wonderful Place.
          </React.Fragment>
        )
      }
    ]}
  />

  <Header>Lists with Descriptions</Header>
  <List
    items={[
      {
        as: "div",
        children: (
          <React.Fragment>
            <Icon name="map marker" />
            <List.Content>
              <List.Header as="a">Krolewskie Jadlo</List.Header>
              <List.Description>
                An excellent polish restaurant, quick delivery and hearty,
                filling meals.
              </List.Description>
            </List.Content>
          </React.Fragment>
        )
      },
      {
        as: "div",
        children: (
          <React.Fragment>
            <Icon name="map marker" />
            <List.Content>
              <List.Header as="a">Krolewskie Jadlo</List.Header>
              <List.Description>
                An excellent polish restaurant, quick delivery and hearty,
                filling meals.
              </List.Description>
            </List.Content>
          </React.Fragment>
        )
      },
      {
        as: "div",
        children: (
          <React.Fragment>
            <Icon name="map marker" />
            <List.Content>
              <List.Header as="a">Krolewskie Jadlo</List.Header>
              <List.Description>
                An excellent polish restaurant, quick delivery and hearty,
                filling meals.
              </List.Description>
            </List.Content>
          </React.Fragment>
        )
      }
    ]}
  />
  <Header as="h2">Variations</Header>
  <List horizontal>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Joe</List.Header>
        <List.Description>A Handsome Guy</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/avatar-3.png" avatar />
      <List.Content>
        <List.Header>Panda</List.Header>
        <List.Description>A Fierce Animal</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/snake.jpg" avatar />
      <List.Content>
        <List.Header>Snake</List.Header>
        <List.Description>A Beautiful Creature</List.Description>
      </List.Content>
    </List.Item>
  </List>
  <Header>Ordered Horizontal</Header>
  <List horizontal ordered>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Joe</List.Header>
        <List.Description>A Handsome Guy</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/avatar-3.png" avatar />
      <List.Content>
        <List.Header>Panda</List.Header>
        <List.Description>A Fierce Animal</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/snake.jpg" avatar />
      <List.Content>
        <List.Header>Snake</List.Header>
        <List.Description>A Beautiful Creature</List.Description>
      </List.Content>
    </List.Item>
  </List>
  <Header>Inverted</Header>
  <Segment inverted>
    <List inverted divided>
      <List.Item>Apples</List.Item>
      <List.Item>Pears</List.Item>
      <List.Item>Oranges</List.Item>
    </List>
  </Segment>
  <Header>Selectable List</Header>
  <List selection>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Joe</List.Header>
        <List.Description>A Handsome Guy</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/avatar-3.png" avatar />
      <List.Content>
        <List.Header>Panda</List.Header>
        <List.Description>A Fierce Animal</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/snake.jpg" avatar />
      <List.Content>
        <List.Header>Snake</List.Header>
        <List.Description>A Beautiful Creature</List.Description>
      </List.Content>
    </List.Item>
  </List>
  <Header>Selectable List</Header>
  <List selection>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Joe</List.Header>
        <List.Description>A Handsome Guy</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/avatar-3.png" avatar />
      <List.Content>
        <List.Header>Panda</List.Header>
        <List.Description>A Fierce Animal</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/snake.jpg" avatar />
      <List.Content>
        <List.Header>Snake</List.Header>
        <List.Description>A Beautiful Creature</List.Description>
      </List.Content>
    </List.Item>
  </List>
  <Header>Selectable Animated List</Header>
  <List selection animated>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Joe</List.Header>
        <List.Description>A Handsome Guy</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/avatar-3.png" avatar />
      <List.Content>
        <List.Header>Panda</List.Header>
        <List.Description>A Fierce Animal</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/snake.jpg" avatar />
      <List.Content>
        <List.Header>Snake</List.Header>
        <List.Description>A Beautiful Creature</List.Description>
      </List.Content>
    </List.Item>
  </List>
  <Header>Relaxed List</Header>
  <List relaxed>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header as="a">Floated Icons</List.Header>
        <List.Description>
          This text will always have a{" "}
          <a>
            <b>left margin </b>
          </a>to make sure it sits alongside your icon
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header as="a">Floated Icons</List.Header>
        <List.Description>
          This text will always have a{" "}
          <a>
            <b>left margin </b>
          </a>to make sure it sits alongside your icon
        </List.Description>
      </List.Content>
    </List.Item>
  </List>
  <Header>Very Relaxed List</Header>
  <List relaxed="very">
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header as="a">Floated Icons</List.Header>
        <List.Description>
          This text will always have a{" "}
          <a>
            <b>left margin </b>
          </a>to make sure it sits alongside your icon
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header as="a">Floated Icons</List.Header>
        <List.Description>
          This text will always have a{" "}
          <a>
            <b>left margin </b>
          </a>to make sure it sits alongside your icon
        </List.Description>
      </List.Content>
    </List.Item>
  </List>
  <Header>Very Relaxed Horizontal List</Header>
  <List relaxed="very" horizontal>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
  </List>
  <Header>Divided List</Header>
  <List divided>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
  </List>
  <Header>Celled List</Header>
  <List celled>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
  </List>
  <Header>Horizontal Celled List</Header>
  <List celled horizontal relaxed>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
  </List>
  <Header>Orderd Celled List</Header>
  <List as="ol" ordered celled>
    <List.Item>Apples</List.Item>
    <List.Item>
      Subesh
      <List as="ol" nested>
        <List.Item>Apples</List.Item>
        <List.Item>Pears</List.Item>
        <List.Item>Oranges</List.Item>
      </List>
    </List.Item>
    <List.Item>Oranges</List.Item>
  </List>
  <Header>List with different size</Header>
  <List celled horizontal size="mini">
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
  </List>
  <Divider />
  <List celled horizontal size="tiny">
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
  </List>
  <Divider />
  <List celled horizontal size="small">
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
  </List>
  <Divider />
  <List celled horizontal size="large">
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
  </List>
  <Divider />
  <List celled horizontal size="big">
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
  </List>
  <Divider />
  <List celled horizontal size="huge">
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
  </List>
  <Divider />
  <List celled horizontal size="massive">
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content textAlign="top">
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>
        <List.Header>Floated Icons</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image src="/img/joe.jpg" avatar />
      <List.Content textAlign="bottom">
        <List.Header onClick={() => alert("ASd")}>
          {" "}
          Floated Icons Click show
        </List.Header>
      </List.Content>
    </List.Item>
  </List>
  <Divider />
  <Header size="large">Content Variations</Header>
  <Header>Float Content</Header>
  <List divided aligned="middle">
    <List.Item>
      <List.Content right>
        <Button>Add</Button>
      </List.Content>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>Joe</List.Content>
    </List.Item>
    <List.Item>
      <List.Content right>
        <Button>Add</Button>
      </List.Content>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>Joe</List.Content>
    </List.Item>
    <List.Item>
      <List.Content right>
        <Button>Add</Button>
      </List.Content>
      <Image src="/img/joe.jpg" avatar />
      <List.Content>Joe</List.Content>
    </List.Item>
  </List>
  <Header>Float Content</Header>
  <List divided>
    <List.Item>
      <List.Content right>
        <Button>Add</Button>
      </List.Content>
      <Image src="/img/joe.jpg" avatar />
      <List.Content textAlign="middle">Joe</List.Content>
    </List.Item>
    <List.Item>
      <List.Content right>
        <Button>Add</Button>
      </List.Content>
      <Image src="/img/joe.jpg" avatar />
      <List.Content textAlign="middle">Joe</List.Content>
    </List.Item>
    <List.Item>
      <List.Content right>
        <Button>Add</Button>
      </List.Content>
      <Image src="/img/joe.jpg" avatar />
      <List.Content textAlign="bottom" onMouseOver={() => alert("Sdsd")}>
        Joe
      </List.Content>
    </List.Item>
  </List>
</Container>
```
