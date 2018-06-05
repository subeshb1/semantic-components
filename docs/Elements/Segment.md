# Segment

```jsx
<Container>
  <Header as="h2">Types of Segment</Header>
  <Header as="h4">Simple</Header>
  <Segment>Simple Segment</Segment>
  <Header as="h4">Raised</Header>
  <Segment raised>Raised Segment</Segment>
  <Header as="h4">Stacked</Header>
  <Segment stacked>Raised Segment</Segment>
  <Segment stacked="tall">Raised Segment</Segment>
  <Header as="h4">Piled</Header>
  <Segment piled>Raised Segment</Segment>
  <Header as="h4">Vertical</Header>
  <Segment vertical>Vertical Segment</Segment>
  <Segment vertical>Vertical Segment</Segment>
  <Segment vertical>Vertical Segment</Segment>
  <Header as="h2">States</Header>
  <Header as="h4">Disabled</Header>
  <Segment state="disabled">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
    repellendus magnam porro, vero necessitatibus perferendis recusandae
    officiis libero sequi! Est quae maxime laboriosam totam laudantium unde
    repudiandae consequuntur non atque. Raised Segment
  </Segment>
  <Header as="h4">Loading</Header>
  <Segment state="loading">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
    repellendus magnam porro, vero necessitatibus perferendis recusandae
    officiis libero sequi! Est quae maxime laboriosam totam laudantium unde
    repudiandae consequuntur non atque. Raised Segment
  </Segment>
  <Header as="h2">Variations</Header>
  <Header as="h4">Inverted</Header>
  <Segment inverted>Inverted Segment</Segment>
  <Header as="h4">Attached</Header>
  <Segment attached="top">Top Attached</Segment>
  <Segment attached>Both side Attached</Segment>
  <Segment attached="bottom">Bottom Attached</Segment>
  <Header as="h4">Padded</Header>
  <Segment padded>
    <Header as="h5">Padded</Header> Lorem ipsum dolor sit amet, consectetur
    adipisicing elit. Nemo alias repellat, aperiam saepe voluptate ullam quo
    consequatur nihil iusto aliquam vero! Ab, praesentium harum maiores vel amet
    doloribus quas ut?
  </Segment>
  <Segment padded="very">
    <Header as="h5">Very Padded</Header> Lorem ipsum dolor sit amet, consectetur
    adipisicing elit. Nemo alias repellat, aperiam saepe voluptate ullam quo
    consequatur nihil iusto aliquam vero! Ab, praesentium harum maiores vel amet
    doloribus quas ut?
  </Segment>
  <Header as="h4">Compact</Header>
  <Segment compact>Compact</Segment>
  <Header as="h4">Colored</Header>
  <Segment color="red">Red</Segment>
  <Segment color="orange">Orange</Segment>
  <Segment color="yellow">Yellow</Segment>
  <Segment color="olive">Olive</Segment>
  <Header as="h4">Inverted Color</Header>
  <Segment inverted color="red">
    Red
  </Segment>
  <Segment inverted color="orange">
    Orange
  </Segment>
  <Segment inverted color="yellow">
    Yellow
  </Segment>
  <Segment inverted color="olive">
    Olive
  </Segment>
  <Header as="h4">Emphasis</Header>
  <Segment emphasis="secondary">Secondary</Segment>
  <Segment emphasis="tertiary">Tertiary</Segment>
  <Header as="h4">Inverted Emphasis</Header>
  <Segment inverted emphasis="secondary">
    Secondary
  </Segment>
  <Segment inverted emphasis="tertiary">
    Tertiary
  </Segment>
  <Header as="h4">Colored Inverted Emphasis</Header>
  <Segment color="red" inverted emphasis="secondary">
    Secondary
  </Segment>
  <Segment color="red" inverted emphasis="tertiary">
    Tertiary
  </Segment>
  <Header as="h4">Circular Segment</Header>
  <Segment circular>
    <Header as="h2">
      Sale!
      <Header sub as="div">
        $10.99
      </Header>
    </Header>
  </Segment>
  <Segment circular inverted>
    <Header as="h2" inverted>
      Buy Now
      <Header sub as="div">
        $10.99
      </Header>
    </Header>
  </Segment>
  <Header>Float Segment</Header>
  <Segment float="right">Right</Segment>
  <Segment float="left">Left</Segment>
  <Divider clearing />
  <Header>Clearing</Header>
  <Segment clearing>
    <Header>A segment can clear floating elements</Header>
    <Segment float="right">Right</Segment>
    <Segment float="left">Left</Segment>
  </Segment>
  <Header>Text Alignment</Header>
  <Segment textAlign="right">Right</Segment>
  <Segment textAlign="left">Left</Segment>
  <Segment textAlign="center">Center</Segment>
  <Header>Basic</Header>
  <Segment basic>
    <Header>Basic Segment</Header>Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Saepe necessitatibus ad ipsum laudantium in quod ipsam, assumenda cumque
    porro consequuntur repellat distinctio voluptatum laborum error placeat nisi
    quia delectus et.
  </Segment>
</Container>
```

## Segment Group

```jsx
<Container>
  <Header>Simple Segment Group</Header>
  <Segment.Group>
    <Segment>Top</Segment>
    <Segment>Middle</Segment>
    <Segment>Middle</Segment>
    <Segment>Bottom</Segment>
  </Segment.Group>
  <Segment.Group>
    <Segment>Top</Segment>
    <Segment color="red">Middle</Segment>
    <Segment color="blue">Middle</Segment>
    <Segment color="green">Middle</Segment>
    <Segment color="yellow">Bottom</Segment>
  </Segment.Group>
  <Segment.Group>
    <Segment emphasis="secondary">Top</Segment>
    <Segment emphasis="tertiary">Bottom</Segment>
  </Segment.Group>
  <Header>Horizontal Group</Header>
  <Segment.Group horizontal>
    <Segment emphasis="secondary">
      <Header>Left</Header> Lorem, ipsum dolor sit amet consectetur adipisicing
      elit. Ut animi quia, amet quibusdam corporis possimus assumenda
      reprehenderit, facilis exercitationem nobis et beatae. Mollitia
      necessitatibus atque excepturi possimus, suscipit quibusdam unde.
    </Segment>
    <Segment emphasis="tertiary">
      {" "}
      <Header>Middle</Header> Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Id temporibus nostrum magni recusandae vitae ut nisi quas unde doloremque
      maiores ea tenetur sit eveniet soluta tempore excepturi, totam sequi vel.
    </Segment>
    <Segment emphasis="tertiary">
      {" "}
      <Header>Right</Header> Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Fuga ipsum harum sit exercitationem pariatur blanditiis doloremque, molestias
      voluptate similique, sed quae asperiores. Laudantium, minus eligendi numquam
      temporibus necessitatibus sunt voluptatem!
    </Segment>
  </Segment.Group>
  <Header>Raised</Header>
  <Segment.Group raised>
    <Segment>Top</Segment>
    <Segment>Bottom</Segment>
  </Segment.Group>
  <Header>Stacked</Header>
  <Segment.Group stacked>
    <Segment>Top</Segment>
    <Segment>Bottom</Segment>
  </Segment.Group>
  <Header>Piled</Header>
  <Segment.Group piled>
    <Segment>Top</Segment>
    <Segment>Bottom</Segment>
  </Segment.Group>
  <Header> Nested </Header>
  <Segment.Group>
    <Segment color="red" inverted>
      Top
    </Segment>
    <Segment.Group stacked>
      <Segment>Nested Top</Segment>
      <Segment>Nested Middle</Segment>
      <Segment>Nested Bottom</Segment>
    </Segment.Group>
    <Segment>Middle</Segment>
    <Segment.Group horizontal>
      <Segment emphasis="secondary">
        <Header>Left</Header> Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Ut animi quia, amet quibusdam corporis possimus
        assumenda reprehenderit, facilis exercitationem nobis et beatae.
        Mollitia necessitatibus atque excepturi possimus, suscipit quibusdam
        unde.
      </Segment>
      <Segment emphasis="tertiary">
        {" "}
        <Header>Middle</Header> Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Id temporibus nostrum magni recusandae vitae ut nisi quas unde doloremque
        maiores ea tenetur sit eveniet soluta tempore excepturi, totam sequi vel.
      </Segment>
      <Segment emphasis="tertiary">
        {" "}
        <Header>Right</Header> Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Fuga ipsum harum sit exercitationem pariatur blanditiis doloremque,
        molestias voluptate similique, sed quae asperiores. Laudantium, minus eligendi
        numquam temporibus necessitatibus sunt voluptatem!
      </Segment>
    </Segment.Group>
    <Segment>Bottom</Segment>
  </Segment.Group>
</Container>
```
