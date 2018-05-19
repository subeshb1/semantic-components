# Label

```jsx
<Container>
  <Header as="h4">Simple Label</Header>
  <Label>Name</Label>
  <Header as="h4">Label with Icon</Header>
  <Label>
    <Icon name="mail" />
    Name
  </Label>
  <Header as="h4">Image Label</Header>
  <Label as="a" image>
    <Image src="/img/avatar-3.png" />
    Subesh
  </Label>
  <Label as="a" image>
    <Image src="/img/joe.jpg" />
    Joe
  </Label>
  <Header as="h4">Colored Label with Detail</Header>
  <Label as="a" image color="yellow">
    <Image src="/img/joe.jpg" />
    Joe
    <Label.Detail>Friend</Label.Detail>
  </Label>
  <Header as="h4">Label with cross Icon</Header>
  <Label image color="yellow">
    <Image src="/img/joe.jpg" />
    Joe
    <Icon name="delete" />
  </Label>
  <Header as="h4">Pointing Label</Header>
  <Label pointing>I am pointed</Label>
  <Label pointing="top">I am pointed</Label>

  <Label pointing="left">I am pointed</Label>
  <Label pointing="right">I am pointed</Label>
  <Label pointing="right" basic color="red">
    I am pointed
  </Label>
  <Label pointing="right" color="red">
    I am pointed
  </Label>

  <Header>Corner Labels</Header>
  <Image.Group size="medium">
    <Image src="/img/flower2.jpg" fluid>
      <Label as="a" corner="left">
        <Icon name="heart" />
      </Label>
    </Image>
    <Image src="/img/flower2.jpg" fluid>
      <Label as="a" corner="right" color="red">
        <Icon name="save" />
      </Label>
    </Image>
  </Image.Group>

  <Header as="h4">Label Tag</Header>
  <Label tag>New</Label>
  <Label color="red" tag>
    Upcoming
  </Label>
  <Label color="teal" tag>
    Featured
  </Label>

  <Header as="h4">Ribbon</Header>
  <Image.Group size="medium">
    <Image src="/img/flower2.jpg" fluid>
      <Label as="a" ribbon="left">
        <Icon name="heart" />
      </Label>
    </Image>
    <Image src="/img/flower2.jpg" fluid>
      <Label as="a" ribbon="right" color="red">
        <Icon name="save" />
      </Label>
    </Image>
  </Image.Group>
  <Image.Group size="medium">
    <Image src="/img/flower2.jpg" fluid>
      <Label as="div" ribbon="left">
        No. 1
      </Label>
    </Image>
    <Image src="/img/flower2.jpg" fluid>
      <Label as="div" ribbon="right" color="red">
        <Icon name="save" /> No. 2
      </Label>
    </Image>
  </Image.Group>
  <Header as="h4">Horizontal Formated label</Header>
  <Label horizontal>label</Label>
  <Label horizontal color="violet">
    label
  </Label>
  <Label horizontal color="red">
    label
  </Label>
  <Header as="h4">Floating Label</Header>

  <div class="ui compact menu">
    <a class="item">
      Message
      <Label floating color="red">
        22
      </Label>
    </a>
  </div>

  <Header as="h4">Content</Header>
  <Label>
    <Icon name="mail" />23
    <Label.Detail> View Mail</Label.Detail>
  </Label>

  <Header as="h4">Variations</Header>
  <Label circular>1</Label>
  <Label circular color="red">
    2
  </Label>
  <Label size="massive" color="red">
    2
  </Label>

  <Header as="h4">Group</Header>
  <Label.Group>
    <Label>one</Label>
    <Label>two</Label>
    <Label>three</Label>
    <Label>four</Label>
  </Label.Group>
  <Label.Group circular>
    <Label>one</Label>
    <Label>two</Label>
    <Label>three</Label>
    <Label>four</Label>
  </Label.Group>
  <Label.Group tag>
    <Label>one</Label>
    <Label>two</Label>
    <Label>three</Label>
    <Label>four</Label>
  </Label.Group>
  <Label.Group color="red">
    <Label>one</Label>
    <Label>two</Label>
    <Label>three</Label>
    <Label>four</Label>
  </Label.Group>
  <Label.Group size="massive">
    <Label>one</Label>
    <Label>two</Label>
    <Label>three</Label>
    <Label>four</Label>
  </Label.Group>

  <Header>Mesage</Header>
  <Segment compact>
    <Label floating size="small" circular color="red">
      {" "}
      1
    </Label>
    Messages
  </Segment>
  <Segment padded="very">
    <Label attached="bottom  right">Css</Label>Lorem ipsum, dolor sit amet consectetur
    adipisicing elit. Magnam molestias veritatis at fugit consectetur, commodi ducimus
    voluptas nemo vel, doloribus tempora natus repellendus quae quo consequuntur
    earum temporibus illum. Doloribus!
  </Segment>
</Container>
```
